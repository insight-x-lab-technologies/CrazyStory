# CrazyStory — Análise e Roadmap

> Documento de análise técnica e de design + proposta de evolução.
> Escopo: projeto hobby, web, offline-first, PWA, single-device (passa-e-revela).
> Versão analisada: v0.1 (junho/2026).

---

## 1. O que é o jogo (estado atual)

CrazyStory é um party game local onde 3 a 10 jogadores, num único dispositivo,
montam uma história coletiva (uma frase por jogador) tendo **um impostor escondido**
que não conhece o tema. No final, o grupo vota em quem parece perdido.

Fluxo implementado (`script.js`):

1. **Setup** — adicionar jogadores, escolher nº de rodadas (1–7) e temas.
2. **Revelação de papéis** — cada jogador olha em segredo: não-impostores veem
   `categoria + abertura + dica secreta (twist)`; o impostor vê apenas uma dica genérica.
3. **História** — cada jogador "conta" sua frase (apenas o nome é registrado), com timer.
4. **Votação** — um único toque decide o suspeito do grupo.
5. **Placar** — pontua o grupo (acertou) ou o impostor (escapou).
6. **Final + Placar Histórico** (localStorage).

Temas: 6 categorias com 5 aberturas cada (30 prompts) + 8 twists + 4 dicas de impostor.

---

## 2. Arquitetura e estrutura

- **Stack:** HTML + CSS + JS vanilla, sem build.
- **PWA:** manifest + service worker (cache-first para assets locais, network-first para navegação).
- **Persistência:** localStorage (`crazystory_settings_v1`, `_leaderboard_v1`, `_quick_game_v1`, packs e conteúdo customizado).
- **Temas:** 6 (cosmic, outono, primavera, claro, escuro, alto contraste); 3 com trilha sonora.
- **Servidor local:** `scripts/run.sh` / `stop.sh` (python http.server na porta 8080).
- Há um redirecionador em `src/index.html` apontando para `src/src/index.html`.

### Dívida estrutural: HTML ≠ JS

O `index.html` já teve os principais blocos legados do jogo anterior removidos ou alinhados
ao CrazyStory. Ainda há telas renderizadas dinamicamente pelo `script.js`, mas sem o remendo
central de textos (`resetHomeCopy`, `configureStaticScreens`). Consequências restantes:

- Dívida residual: parte do setup/regras/multi-device ainda é montada em runtime.
- PeerJS + QRCode seguem via CDN por serem necessários ao P2P; Google Fonts e BMC embed foram
  removidos do shell ativo.

---

## 3. Jornada do jogador e gameplay — coerência

### Funciona
- Loop completo jogável: setup → papéis → história → voto → placar → final.
- Passa-e-revela com tela de privacidade ("🙈 toque para revelar") é claro.
- Persistência de config rápida e placar histórico acumulado.
- Validações de jogadores (3–10, nomes duplicados) e CTA desabilitado corretamente.

### Problemas de design / coerência
1. **A abertura (prompt) é exibida publicamente durante a história** (`renderStoryTurn`),
   mas foi entregue como "segredo" só aos não-impostores na revelação. Resultado: o impostor
   **lê o tema na tela** e o sigilo perde força. O único segredo real que resta é o nome da
   categoria (ex.: "Família") e o twist — muito fácil de fingir.
2. **Twist (dica secreta) não tem função mecânica**: é o mesmo para todos os não-impostores
   e nunca é cobrado nem pontuado. É decorativo.
3. **Votação é um único toque** representando "o grupo". Não há voto individual, nem
   contagem, nem desempate, nem o impostor tentando adivinhar o tema para se redimir.
   Pouca tensão e nenhuma agência individual.
4. **Pontuação rasa e possivelmente desequilibrada**: acerto = +10 a cada não-impostor;
   impostor escapa = +15 só pra ele. Com 1 partida o impostor quase nunca alcança o grupo
   no placar acumulado (vários ganham por rodada). Não há pontos por qualidade narrativa,
   nem penalidades, nem bônus por "impostor adivinhou o tema".
5. **Conteúdo enxuto**: 30 aberturas + 8 twists. Repete rápido em poucas sessões.
6. **A história não é capturada** (só nomes em `storyLog`). Perde-se a recompensa de "reler
   a história maluca no final" — um dos maiores atrativos do gênero.
7. **`prepareDur` (tempo de revelação) está nas configurações mas nunca é usado.**
8. **60s por frase** é longo para uma única frase; sem ajuste fino por fase.
9. Sem regras na tela durante o jogo para quem nunca jogou (só na tela "Regras e Temas").

---

## 4. Interface gráfica e responsividade

CSS tem breakpoints em 768px (desktop), 1180px (wide), e media queries de
landscape/portrait e `max-height` para landscape baixo — base responsiva real e cuidada.

### Pontos fortes
- Layout multi-coluna no setup em desktop; grids fluidas; timer SVG circular animado.
- 6 temas com fundos dedicados desktop/mobile e trilhas por estação.
- Tema de alto contraste (acessibilidade).

### Riscos / a validar
- **Votação com até 10 botões** recebeu layout próprio via `:has(.vote-option)`, fluido
  para mobile/desktop e compatível com a jornada de passar o dispositivo.
- `.score-mini-item` é referenciado pelo JS mas **não tem estilo** (`score-mini-item` = 0
  ocorrências no CSS) → mini-placar pode aparecer sem formatação.
- Telas mortas ainda têm CSS pesado, inflando o bundle e o risco de regressões.
- Sem fontes locais → se Google Fonts não carregar (offline), tipografia degrada.
- Não verifiquei renderização real em dispositivos; recomenda-se passada visual
  (mobile/tablet/desktop × portrait/landscape) após a limpeza do HTML.

---

## 5. Roadmap proposto

Faseado para um hobby de uma pessoa: cada fase entrega valor e é independente.

### Fase 0 — Higiene (fundação) — *prioridade máxima, baixo esforço*
- [ ] Reescrever `index.html` para refletir SÓ o jogo atual; remover telas mortas
      (guest, score-manager, banco de piadas, overlay, filtros do placar, user_id, packs).
      Progresso: banco legado de piadas e `user_id` removidos; packs e ajuste de pontos foram
      reimplementados no modelo CrazyStory; filtros legados do placar e setup antigo de times
      foram removidos; `guest` deixou de ser morto e sustenta o multi-device.
- [x] Remover JS de "remendo" de texto (`resetHomeCopy`/`configureStaticScreens`) movendo
      os textos corretos para o HTML.
- [x] Remover PeerJS/QRCode/BMC-embed enquanto não usados; ou cacheá-los/baixá-los local.
      PeerJS/QRCode voltaram a ser usados no fluxo P2P de tela auxiliar; BMC embed segue removido.
- [x] Remover dependência de Google Fonts e usar pilhas locais do sistema para offline real.
- [x] Esconder o seletor de idiomas até existir i18n, OU implementar i18n mínimo (ver Fase 3).
- [x] Consolidar entrada `src/index.html` vs `src/src/`.
- [ ] Limpar CSS órfão.
      Progresso: removidos seletores de banco de palavras legado, filtros antigos do placar,
      times e embed de doação.

### Fase 1 — Coerência de gameplay — *alto impacto, médio esforço*
- [x] Definir e documentar o modelo de segredo. Sugestão (estilo "Chameleon"):
      todos veem um **tema/cenário público**; não-impostores recebem uma **palavra-chave
      secreta**; o impostor não. Não exibir a palavra-chave durante os turnos.
- [x] Dar função ao impostor: ao ser pego, **chance de adivinhar a palavra/tema** para
      roubar pontos (tensão final clássica do gênero).
- [x] Votação individual: cada jogador aponta um suspeito (passa-e-revela ou contagem
      simultânea); maioria decide; tratar empate.
- [x] Rebalancear pontuação e expor o esquema na tela de placar.
- [x] Usar o `prepareDur` (contagem antes de revelar o papel) e ajustar timer padrão.

### Fase 2 — Conteúdo e rejogabilidade — *alto impacto, esforço incremental*
- [x] Expandir aberturas/temas (meta: 100+ prompts) e twists; permitir conteúdo do usuário.
- [x] **Capturar a história**: input opcional de texto por turno e "reler a história" no
      final (compartilhável). Mesmo só palavras-chave já agrega muito.
- [x] Modos de variação: "história relâmpago" (1 rodada rápida) e nº de impostores >1 em
      grupos grandes.
- [x] Modo só-adultos / família.
- [x] Tela de regras inline (primeiro acesso) e dicas contextuais.

### Fase 3 — Polimento e alcance — *contínuo*
- [ ] i18n de verdade (dicionário + `data-i18n`) — já há a marcação pronta no HTML.
      Progresso: interface PT/EN/ES aplicada nas telas estáticas, setup, regras/packs,
      multi-device, convidado remoto, fluxo de papel/história/voto, defesa, placar, final
      e notificações administrativas. Conteúdo narrativo/packs permanece dependente do idioma
      do material instalado.
- [x] Acessibilidade: foco visível, navegação por teclado, `aria-live` nas transições,
      respeitar `prefers-reduced-motion` (estrelas/animações).
- [x] Áudio: desbloqueio confiável (gesto do usuário), fade entre faixas, controle de volume.
- [x] Microinterações: animações de revelação/voto, confete no final, haptics (vibração).
- [x] Validar e refinar UI em mobile/tablet/desktop × portrait/landscape (pós-Fase 0).

### Fase 4 — Multiplayer real (opcional, ambicioso) — *se houver fôlego*
- [x] Reaproveitar a base PeerJS/QR para multi-device P2P: primeira entrega com host, QR/link
      e tela auxiliar pública sem vazamento de segredo.
- [x] Evoluir multi-device para papel individual por celular: convidado escolhe jogador e
      recebe só o próprio papel; passa-e-revela continua como fallback local.
- [x] Permitir voto remoto por jogador conectado, com host apurando junto dos votos locais.
- [x] Permitir envio remoto da frase da história pelo jogador conectado durante seu turno.
- [x] Permitir defesa remota do impostor conectado, com palpite de tema enviado ao host.

---

## 6. Top 5 ações de maior retorno

1. **Limpar o HTML** (Fase 0): destrava manutenção, reduz peso e bugs invisíveis.
2. **Corrigir o sigilo do impostor** (não exibir o segredo nos turnos) (Fase 1).
3. **Votação individual + impostor adivinha o tema** (Fase 1): cria a tensão do gênero.
4. **Capturar e reler a história no final** (Fase 2): recompensa memorável e compartilhável.
5. **Mais conteúdo + offline 100% (fontes locais)** (Fases 0/2): rejogabilidade e robustez.
