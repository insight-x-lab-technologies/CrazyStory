# CrazyStory — Visão de Produto

> Para detalhes técnicos, ver [ARCHITECTURE.md](./ARCHITECTURE.md).
> Para histórico de decisões, pendências e progresso por fase, ver [ROADMAP.md](./ROADMAP.md).

---

## 1. O que é

CrazyStory é um **party game local, estilo "Chameleon"**: um grupo de 3 a 10 jogadores
constrói coletivamente uma história maluca — uma frase por jogador e por rodada — enquanto
tenta descobrir quem, entre eles, é o **impostor**: o único que não recebeu a palavra-chave
secreta do tema e precisa disfarçar isso na hora de falar.

É um jogo hobby, web, **offline-first**, instalável como PWA, pensado primeiro para
**passa-e-revela** em um único dispositivo — com suporte opcional a **multi-device** via
P2P (cada jogador usa o próprio celular como tela auxiliar privada).

## 2. Para quem

- Grupos presenciais (família, amigos, festas) que querem um jogo social rápido, sem
  precisar de cartas físicas ou app com conta/servidor.
- Sessões de 3 a 10 pessoas, adaptável a família (conteúdo leve) ou festa adulta
  (conteúdo "party").
- Jogadores que não têm internet estável no momento de jogar — o jogo precisa funcionar
  100% offline depois de instalado.

## 3. Proposta de valor / o que diferencia

1. **Tensão social real**: o segredo (palavra-chave) nunca aparece na tela pública durante
   os turnos — só quem não é impostor a viu na revelação privada. O impostor precisa
   improvisar ouvindo os outros.
2. **Agência individual no final**: cada jogador vota em quem suspeita (não um voto único
   de grupo); e o impostor pego tem uma **chance de se redimir adivinhando o tema**.
3. **Recompensa memorável**: a história contada é capturada e pode ser relida (e
   compartilhada) no final — o "resultado maluco" é o que faz o grupo querer jogar de novo.
4. **Sem fricção**: sem conta, sem servidor próprio, instala como PWA, funciona offline,
   suporta 3 idiomas (PT/EN/ES) e 6 temas visuais.
5. **Rejogabilidade**: conteúdo expansível — 100+ prompts entre categorias fixas e extras,
   modo "história relâmpago", múltiplos impostores em grupos grandes, prompts/twists
   customizáveis pelo próprio grupo, packs de conteúdo importáveis.

## 4. Loop de jogo (visão de produto)

1. **Setup** — adicionar jogadores (3–10), escolher categorias, nº de rodadas, variante
   (clássica ou relâmpago), modo de conteúdo (família ou festa).
2. **Revelação de papel** (passa-e-revela ou tela privada no celular) — cada não-impostor
   vê tema público + palavra-chave secreta; o impostor só vê o tema público.
3. **História** — cada jogador fala/digita uma frase no seu turno, sob timer, sem que a
   palavra-chave apareça na tela.
4. **Votação individual** — cada jogador aponta seu suspeito; maioria decide, com
   tratamento de empate.
5. **Defesa do impostor** — se pego, chance de adivinhar a palavra-chave/tema para
   recuperar pontos.
6. **Placar da rodada** → repete até acabar as rodadas configuradas.
7. **Final** — placar consolidado, **recap da história contada** (compartilhável), e
   atualização do placar histórico entre sessões (leaderboard local).

## 5. Modos e variações

- **Clássico** vs **Relâmpago** (uma rodada rápida).
- **1 ou mais impostores**, escalando com o tamanho do grupo.
- **Família** vs **Festa** (conteúdo adulto/party), com prompts/twists separados.
- **Single-device** (passa-e-revela, sempre disponível) vs **multi-device** (P2P via
  QR/link — papel individual, voto remoto, envio remoto da frase e da defesa),
  combináveis: convidados conectados coexistem com jogadores locais na mesma partida.

## 6. Fora de escopo (por ora)

- Servidor/backend próprio, contas de usuário, matchmaking online entre estranhos.
- Multiplayer assíncrono (o jogo é uma sessão síncrona, mesmo grupo, mesmo momento).
- Tradução automática de conteúdo narrativo custom/packs — só a interface é traduzida.
- Monetização além de links de doação opcionais (Buy Me a Coffee / Ko-fi).

## 7. Métrica de sucesso (qualitativa, projeto hobby)

Não há telemetria/analytics — sucesso é medido de forma qualitativa:

- O grupo termina a partida e quer jogar de novo na mesma sessão (rejogabilidade percebida).
- Ninguém trava por falta de conteúdo repetido em sessões normais (variedade de prompts).
- A leitura da história no final gera reação positiva ("recap" like/compartilhamento).
- O jogo funciona sem fricção técnica: instala, abre offline, ninguém precisa configurar
  nada além do setup do próprio jogo.

## 8. Princípios de design a preservar

- **Sigilo real**: nunca expor a palavra-chave/segredo em tela compartilhada durante os
  turnos — qualquer feature nova deve respeitar esse contrato (ver nota de segurança de
  design em [ARCHITECTURE.md §9](./ARCHITECTURE.md#9-multi-device-p2p-via-peerjs)).
- **Offline-first**: qualquer nova dependência externa deve ser avaliada contra o
  funcionamento 100% offline pós-instalação (cache local, sem CDN obrigatória para o
  fluxo principal).
- **Sem servidor**: multiplayer é P2P efêmero; não introduzir dependência de backend
  próprio sem decisão explícita.
- **Hobby, uma pessoa**: preferir incrementos pequenos e independentes (ver fases do
  [ROADMAP.md](./ROADMAP.md)) a reescritas grandes.
