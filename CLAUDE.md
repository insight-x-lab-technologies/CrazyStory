# CrazyStory — Instruções para agentes

Antes de qualquer tarefa neste repositório (feature, bug, refatoração, review),
leia primeiro os documentos abaixo em `docs/` para entender o escopo do projeto:

1. **`docs/PRODUCT_VISION.md`** — o que é o jogo, pra quem, proposta de valor, loop de
   jogo, o que está fora de escopo, e princípios de design que não podem ser quebrados
   (sigilo do impostor, offline-first, sem servidor próprio).
2. **`docs/ARCHITECTURE.md`** — stack, estrutura de arquivos, modelo de estado
   (`state` global em `src/script.js`), fluxo de telas, persistência (localStorage),
   scoring, i18n, multi-device P2P (PeerJS), PWA/service worker, e testes.
3. **`docs/ROADMAP.md`** — histórico de decisões, débito técnico conhecido e progresso
   por fase (o que já foi feito vs. o que falta).

## Regras rápidas derivadas desses docs

- **Stack**: HTML + CSS + JS vanilla, sem build, sem framework, sem npm. Não introduzir
  bundler/framework sem alinhar antes.
- **Single-file JS**: toda a lógica vive em `src/script.js` (~2400 linhas, estado global
  `state`, render imperativo); o dicionário de UI fica em `src/i18n.js` (só dados).
  Mudanças de fluxo de jogo tendem a tocar várias funções desse arquivo — ver
  ARCHITECTURE.md §3 antes de mexer.
- **Nunca vazar o segredo do impostor** em payload público ou tela compartilhada durante
  os turnos — contrato central do jogo (ARCHITECTURE.md §9, PRODUCT_VISION.md §8).
- **Offline-first**: qualquer asset/dependência nova precisa funcionar com o service
  worker (cache-first local); dependências externas via CDN só se inevitável e cientes
  do impacto offline.
- **Sem servidor próprio**: multiplayer é P2P efêmero via PeerJS; toda persistência é
  localStorage no dispositivo.
- **Testes**: `./scripts/test-all.sh` roda todos (o CI também roda antes do deploy);
  `node scripts/test-<nome>.js` roda um só (scoring, hygiene, i18n, story-recap, content,
  audio, multidevice, visual) — sem framework. Texto novo de interface entra como chave em
  `src/i18n.js` nos 3 idiomas (o `test-i18n` falha se faltar).
- **Rodar localmente**: `./scripts/run.sh` (serve `src/` na porta 8080).
- Projeto **hobby, uma pessoa** — preferir incrementos pequenos e independentes, seguindo
  as fases descritas em `docs/ROADMAP.md`, em vez de reescritas grandes.
