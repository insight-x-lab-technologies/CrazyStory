# CrazyStory — Arquitetura

> Referência técnica do estado atual do código. Para visão de produto/gameplay,
> ver [PRODUCT_VISION.md](./PRODUCT_VISION.md). Para histórico de decisões e
> pendências, ver [ROADMAP.md](./ROADMAP.md).

---

## 1. Stack

- **HTML + CSS + JS vanilla**, sem build, sem framework, sem bundler, sem npm/package.json.
- **PWA**: `manifest.webmanifest` + `service-worker.js` (cache versionado `crazystory-pwa-vN`).
- **Dependências externas** (via CDN, só usadas no fluxo multi-device):
  - `peerjs@1.5.5` — WebRTC P2P entre host e convidados.
  - `qrcodejs@1.0.0` — geração do QR code de convite.
- **Servidor local**: `python3 -m http.server` via `scripts/run.sh` / `scripts/stop.sh`,
  serve `src/` na porta 8080 (configurável por `PORT`/`WEBAPPLAB_PORT`).
- **Testes**: scripts Node standalone em `scripts/test-*.js` (sem test runner/framework).

## 2. Estrutura de arquivos

```
src/
  index.html          # shell único — todas as telas do jogo (setup, papéis, história, voto, placar...)
  i18n.js             # dicionário I18N (pt/en/es) — só dados, carregado antes do script.js
  script.js           # ~2400 linhas — toda a lógica: estado, render, áudio, P2P, scoring
  style.css           # layout base, responsivo (breakpoints 768px/1180px, landscape)
  themes.css          # 6 temas visuais (cosmic, liquid-glass, material3, light, dark, high-contrast)
  service-worker.js   # cache-first para assets locais, network-first para navegação
  manifest.webmanifest
  assets/             # ícones, backgrounds WebP por tema/dispositivo, trilhas sonoras (mp3 128 kbps)
design/
  icon-master.png      # arte-fonte do ícone (fora de src/, não é publicada)
scripts/
  run.sh / stop.sh     # sobe/derruba o http.server local
  test-all.sh          # roda todos os test-*.js (usado pelo CI)
  test-*.js            # scoring, hygiene, i18n, story-recap, content, audio, multidevice, visual
docs/
  ARCHITECTURE.md      # este arquivo
  PRODUCT_VISION.md
  ROADMAP.md
```

Não há `src/src/` — entrada única em `src/index.html` (consolidação já feita, ver Fase 0 do roadmap).

## 3. Modelo de execução

Aplicação **single-page**, sem módulos ES nem roteador: toda a lógica fica em
`script.js`, carregada no `index.html` depois de `i18n.js` (scripts clássicos; `I18N` é
global no navegador e vem por `require` no Node). O JS manipula o DOM diretamente por
`id`/seletor (`$`, `$$` helpers, `goTo(screen)` alterna visibilidade de telas via classe).

O markup de todas as telas fixas (incluindo setup, regras e multi-device) está no
`index.html` com `data-i18n`; as funções `render*` só sincronizam estado (classes,
valores, visibilidade) e preenchem listas dinâmicas. Templates `innerHTML` ficam restritos
a conteúdo que depende de dados (papel secreto, listas de jogadores/temas/packs, voto).

Não há componente/estado reativo (nenhum virtual DOM). Cada mudança de estado chama
explicitamente a função `render*` correspondente (`renderSetupScreen`, `renderGameScreen`,
`renderVote`, `renderScoreScreen`, etc.) — padrão "estado global + render imperativo".

### 3.1 Estado global (`state`)

Objeto único em memória (`script.js`, `const state`) com os campos principais:

- **Config de partida**: `players`, `selectedCategories`, `rounds`, `gameVariant`
  (`classic`/`lightning`), `contentMode` (`family`/`party`), `impostorCount`/`impostorIndexes`.
- **Progresso**: `currentRound`, `currentPlayerIndex`, `roleRevealIndex`, `voteRevealIndex`,
  `phase` (`setup` → papéis → história → voto → placar → final).
- **Rodada corrente**: `prompt`, `category`, `twist`, `votes`, `voteResult`, `guessOptions`.
- **Placar**: `scores` (acumulado na sessão), `pendingScore`.
- **História**: `storyLog` (nomes por turno), `fullStoryLog` (texto opcional capturado por turno,
  usado no recap final).
- **Conteúdo do usuário**: `customContent` (prompts/twists extras), `extensionPacks` (packs
  importados de arquivo).
- **`multidevice`**: sub-objeto com `peer` (instância PeerJS), `connections[]`, papel de
  host/guest, código de sessão, e flags de submissão remota (voto/frase/palpite).

### 3.2 Persistência (localStorage)

| Chave                              | Conteúdo                                  |
|-------------------------------------|--------------------------------------------|
| `crazystory_settings_v1`           | tema, idioma, volume, timers, preferências |
| `crazystory_leaderboard_v1`        | placar histórico entre sessões             |
| `crazystory_quick_game_v1`         | última config de jogo rápido               |
| `crazystory_custom_content_v1`     | prompts/twists customizados pelo usuário   |
| `crazystory_extension_packs_v1`    | packs de conteúdo importados               |
| `crazystory_seen_rules_v1`         | flag de tela de regras já vista            |
| `crazystory_guest_token_v1`        | token do aparelho convidado (multi-device) |

Sem backend — todo o estado persistente vive no dispositivo (localStorage), exceto o
estado efêmero de sessão multi-device (em memória, via P2P).

## 4. Fluxo de telas (`phase`)

```
setup → papel (revelação passa-e-revela) → história (uma frase/turno, timer) →
voto (individual, maioria) → [defesa/palpite do impostor] → placar da rodada →
(mais rodadas?) → placar final + recap da história + leaderboard
```

`renderScreen(screen)` / `goTo(screen)` fazem a troca; `handleAction(button)` +
`registerEvents()` centralizam o roteamento de cliques via `data-action` nos elementos.

## 5. Conteúdo do jogo

- `STORY_CATEGORIES` (`script.js`): 6 categorias fixas (aventura, mistério, família,
  absurdo, escola & trabalho, fantasia), 5 prompts cada.
- `EXTRA_STORY_PROMPTS` / `PARTY_STORY_PROMPTS`: prompts extras e prompts modo "party"
  (conteúdo adulto/festa, separado do modo família).
- Twists (dicas secretas) e dicas de impostor: listas próprias, mescladas com conteúdo
  custom via `mergeCustomContent`.
- Usuário pode adicionar prompts/twists próprios (`addCustomPrompt`/`addCustomTwist`) ou
  importar **packs de extensão** (arquivo JSON via `selectExtensionPackFile`).

## 6. Scoring

Regras em `applyRoundScore` + `calculateVoteResult` (`script.js`):

- Voto é **individual** (cada jogador aponta um suspeito); maioria decide, com tratamento
  de empate (`tied`).
- Se o grupo aponta corretamente um impostor (`groupFoundImpostor`): cada jogador que votou
  certo ganha `scoring.correctPoints`.
- Se o impostor escapa (empate ou grupo errou) **ou** acerta o palpite do tema
  (`guessedTheme`): o(s) impostor(es) ganham `scoring.impostorPoints`.
- Suporta múltiplos impostores (`impostorIndexes`) em grupos grandes.
- Correção manual de placar por rodada disponível (`correctScore`/`applyScoreCorrection`),
  para o host ajustar erros de contagem.

## 7. i18n

- `I18N` (`src/i18n.js`): dicionário chave→texto para `pt`, `en`, `es`
  (`SUPPORTED_LANGUAGES`). EN/ES partem de uma cópia do PT (`...I18N.pt`), então chave
  sem tradução mostra português em silêncio — `test-i18n.js` barra isso (com allowlist de
  nomes próprios/cognatos), além de chaves órfãs e placeholders `{x}` divergentes.
- O texto PT dentro dos elementos `data-i18n` do HTML é só fallback; a fonte é o `I18N`.
- `translate(key, language)` / `formatMessage` para interpolação; `applyLanguage()`
  varre elementos com `data-i18n` no HTML e aplica a tradução ativa.
- Cobre toda a interface estática, telas de jogo, multi-device e notificações.
- Conteúdo narrativo (prompts/twists/packs) **não** é traduzido automaticamente — depende
  do idioma do material carregado/importado.

## 8. Áudio, temas e acessibilidade

- 6 temas visuais (`AVAILABLE_THEMES`), 3 com trilha sonora dedicada
  (`THEMES_WITH_MUSIC`/`THEME_MUSIC_PREFIX`): cosmic, liquid-glass (outono), material3
  (primavera). Faixas separadas para tela de espera (`gameroom`) e jogo (`gameplay`).
- Desbloqueio de áudio por gesto do usuário (`ensureAudio`), fade entre faixas
  (`fadeAudioVolume`), volume persistido em settings.
- `reducedMotion()` respeita `prefers-reduced-motion` (desliga confete/estrelas animadas).
- `haptic()` dispara vibração (mobile) em ações-chave (voto, revelação).
- Confete (`launchConfetti`) e estrelas de fundo (`createStars`) como microinteração.

## 9. Multi-device (P2P via PeerJS)

Fluxo opcional, sem servidor próprio — usa a rede pública de sinalização do PeerJS:

1. **Host** (`createMultideviceHost`): cria `Peer` com id `crazystory-<código>`, gera
   QR/link (`renderMultideviceQr`, `getMultideviceLink`).
2. **Convidado** (`joinMultideviceSession`): conecta via `Peer.connect`, escolhe seu
   jogador (`assignMultidevicePlayer`).
3. Host envia estado público (`createMultidevicePayload` — nunca vaza segredo) e o papel
   privado individual (`createMultideviceRolePayload`/`sendMultideviceRole`) por conexão.
4. Convidado pode enviar remotamente: frase da história (`submitMultideviceStory`), voto
   (`submitMultideviceVote`), palpite de tema na defesa do impostor
   (`submitMultideviceGuess`).
5. Host recebe via `conn.on('data', ...)` e aplica com as mesmas funções usadas
   localmente (`submitRemoteVote`, `submitRemoteStoryBeat`, `submitRemoteImpostorGuess`),
   apurando voto remoto + local juntos.
6. Passa-e-revela local continua funcionando como fallback quando não há convidados
   conectados.

**Escolha de jogador travada**: `assignRemotePlayer` valida cada pedido com
`validateMultideviceAssignment`. Fora das fases `setup`/`final` não é possível trocar nem
escolher jogador novo; um aparelho só pode reassumir (reconexão) o jogador cujo token
(`crazystory_guest_token_v1`) já o reivindicou. Dois aparelhos abertos nunca pegam o mesmo
jogador. Pedido recusado volta como `crazystory-assign-rejected`.

**Cuidado de segurança de design**: o payload público (`createMultidevicePayload`)
é deliberadamente filtrado para nunca incluir a palavra-chave secreta nem o papel de
outro jogador — só o payload de papel individual (enviado por conexão privada) carrega
o segredo. Textos de interface nesse payload vão como **chaves** (`roleTitleKey`,
`hintKey`, `messageKey`) e são traduzidos no idioma do convidado, não do host.

## 10. PWA / offline

- `service-worker.js`: `cache-first` para assets estáticos locais (css/js/png/svg/mp3/json),
  `network-first` para navegação (HTML), com fallback pro shell cacheado se offline.
- App shell pré-cacheado no `install` (lista `APP_SHELL`, ~3 MB): HTML/CSS/JS, ícones e
  todas as imagens de fundo (WebP) por tema/dispositivo.
- Músicas **não** são pré-cacheadas: cada faixa é cacheada inteira na primeira vez que toca
  (o SW busca o arquivo sem `Range`, pois respostas 206 não podem ir para o Cache API).
  Música de um tema funciona offline depois de ter sido ouvida uma vez.
- `test-hygiene.js` garante que todo asset do `APP_SHELL` e todo `url()` do CSS existe.
- Sem fontes externas (Google Fonts removido) — usa pilha de fontes do sistema para
  garantir offline real.
- `CACHE_VERSION` deve ser incrementado a cada mudança de assets do shell para invalidar
  cache antigo (`activate` limpa caches com prefixo diferente).

## 11. Testes

`scripts/test-*.js` — scripts Node isolados (sem framework/test runner), cada um cobre
uma área:

- `test-scoring.js` — regras de pontuação e apuração de voto.
- `test-hygiene.js` — checagens de higiene de código/HTML (telas mortas, referências órfãs).
- `test-i18n.js` — cobertura de tradução EN/ES, chaves órfãs e placeholders.
- `test-story-recap.js` — captura e formatação da história final.
- `test-content.js` — integridade de categorias/prompts/twists/packs.
- `test-audio.js` — configuração de áudio/temas musicais.
- `test-multidevice.js` — payloads e fluxo P2P (mockado).
- `test-visual.js` — screenshots headless (Chrome) em 4 viewports.

Rodar todos com `./scripts/test-all.sh` (ou um só com `node scripts/test-<nome>.js`, a
partir da raiz do repo). O workflow `.github/workflows/static.yml` roda `test-all.sh` em
push e PR; o deploy do GitHub Pages só acontece em push para `main` com testes verdes.
`test-visual.js` pula localmente se não houver Chrome (`CHROME_BIN`); no CI o Chrome é
instalado (`browser-actions/setup-chrome`) e `VISUAL_TESTS_REQUIRED=1` faz o pulo virar falha.

## 12. Débito técnico conhecido

Ver [ROADMAP.md](./ROADMAP.md) seção 2 e Fase 0 para o detalhe — resumo:

- `script.js` segue como arquivo único de ~2400 linhas sem módulos (o dicionário i18n já
  saiu para `i18n.js`) — qualquer alteração de fluxo de jogo tende a tocar várias funções
  nesse arquivo. Próximo passo de baixo risco, se fizer falta: tirar o conteúdo narrativo
  (`STORY_CATEGORIES`, twists) para um `content.js` no mesmo padrão do `i18n.js`.
- A tela de papel/voto (`renderRoleReveal`, `renderVote`) ainda é montada por template,
  porque depende do jogador da vez e do segredo.
