const SETTINGS_KEY = 'crazystory_settings_v1';
const LEADERBOARD_KEY = 'crazystory_leaderboard_v1';
const QUICK_GAME_KEY = 'crazystory_quick_game_v1';
const CUSTOM_CONTENT_KEY = 'crazystory_custom_content_v1';
const EXTENSION_PACKS_KEY = 'crazystory_extension_packs_v1';
const SEEN_RULES_KEY = 'crazystory_seen_rules_v1';
const AVAILABLE_THEMES = ['cosmic', 'liquid-glass', 'material3', 'light-mode', 'dark-mode', 'high-contrast'];
const THEMES_WITH_MUSIC = ['cosmic', 'liquid-glass', 'material3'];
const THEME_MUSIC_PREFIX = {
  cosmic: 'cosmic',
  'liquid-glass': 'autumn',
  material3: 'spring'
};
const MUSIC_ASSET_BASE = './assets/songs';
const APP_PUBLIC_URL = 'https://insight-x-lab-technologies.github.io/CrazyStory/';
const DONATION_LINKS = {
  buyMeCoffee: 'https://buymeacoffee.com/insight.x.lab.game.studio',
  koFi: 'https://ko-fi.com/insightxlabgamestudio'
};
const SUPPORTED_LANGUAGES = ['pt', 'en', 'es'];
const I18N = {
  pt: {
    'common.back': '← Voltar',
    'common.continue': '▶️ Continuar',
    'common.restart': '🔄 Reiniciar',
    'common.home': '🏠 Início',
    'common.copy': 'Copiar',
    'common.add': '+ Adicionar',
    'home.title': 'CrazyStory',
    'home.subtitle': 'Conte uma história, esconda o impostor e vote no final',
    'home.newGame': '🎮 Nova Partida',
    'home.quickGame': '⚡ Jogo Rápido',
    'home.multiDeviceGame': '📡 Modo Multi-device',
    'home.wordBank': '📖 Regras e Temas',
    'home.donate': '❤️ Doar',
    'home.leaderboard': '🏅 Placar Histórico',
    'home.settings': '⚙️ Configurações',
    'home.installOnDevice': '📲 Instalar no dispositivo',
    'leaderboard.title': 'Placar Histórico',
    'leaderboard.subtitle': 'Quem mais enganou o grupo ou encontrou impostores.',
    'leaderboard.summaryLabel': 'Resultados salvos',
    'leaderboard.resetButton': 'Apagar resultados',
    'multiDevice.title': 'Partida Multi Device',
    'multiDevice.chooseTitle': 'O que você quer fazer?',
    'multiDevice.chooseDesc': 'Abra uma sessão para controlar a partida ou conecte outro celular ao jogador.',
    'multiDevice.chooseHost': '📡 Abrir uma sessão',
    'multiDevice.chooseJoin': '🔗 Conectar em uma sessão',
    'multiDevice.hostTitle': '📡 Abrir sessão',
    'multiDevice.hostDesc': 'Este dispositivo controla a partida. Celulares conectados recebem apenas o que cada jogador pode ver.',
    'multiDevice.openSession': 'Abrir sessão',
    'multiDevice.joinTitle': '🔗 Conectar',
    'multiDevice.joinDesc': 'Conecte este celular para receber papel, turno e voto de um jogador.',
    'multiDevice.joinCodeLabel': 'Código ou link da sessão',
    'multiDevice.joinCodePlaceholder': 'Cole o código ou link',
    'multiDevice.joinSession': 'Conectar na sessão',
    'multiDevice.joinHelp': 'Você também pode escanear o QR Code exibido no host.',
    'multiDevice.guestLabel': 'Celular do jogador',
    'multiDevice.waitingTitle': 'Aguardando dados da partida',
    'multiDevice.connecting': 'Conectando...',
    'multiDevice.reconnect': 'Reconectar',
    'multiDevice.disconnect': 'Desconectar',
    'multiDevice.guestWaiting': 'Aguardando o host iniciar a partida.',
    'multiDevice.liveDrawing': '📜 História no celular',
    'game.secondsLabel': 'SEGUNDOS',
    'game.currentPlayerLabel': 'Turno de história:',
    'game.readyTitle': 'Prontos para ver o papel?',
    'game.readySub': 'Só o jogador da vez deve olhar. Depois passe o dispositivo.',
    'game.revealWord': '🎭 Revelar papel',
    'game.memorizeTitle': '⚡ Prepare-se!',
    'game.startsIn': 'O papel aparece em...',
    'game.challengePrefix': '🎯 Dica:',
    'game.correct': 'Salvar frase',
    'game.wrong': 'Pular registro',
    'score.title': '🏆 Placar',
    'score.nextRoundTitle': '🎊 Próxima Rodada',
    'final.winnerLabel': 'VENCEDOR!',
    'final.resultTitle': '📊 Resultado Final',
    'final.playAgain': '🎮 Jogar de Novo',
    'settings.title': 'Configurações',
    'settings.languageLabel': 'Idioma',
    'settings.languageSub': 'Altera textos fixos da interface neste dispositivo',
    'settings.timerTitle': '⏱️ Timer',
    'settings.roundTimeLabel': 'Tempo por turno',
    'settings.roundTimeSub': 'Segundos para cada jogador continuar a história',
    'settings.prepareTimeLabel': 'Tempo de revelação',
    'settings.prepareTimeSub': 'Segundos antes de mostrar cada papel secreto',
    'settings.correctPointsLabel': 'Pontos por voto correto',
    'settings.correctPointsSub': 'Pontos para cada jogador que votar no impostor, se ele não adivinhar o tema',
    'settings.wrongPenaltyPointsLabel': 'Bônus do impostor',
    'settings.wrongPenaltyPointsSub': 'Pontos quando o impostor escapa, empata a votação ou acerta o tema',
    'settings.roundFlowLabel': 'Fluxo da rodada',
    'settings.roundFlowSub': 'Papel secreto, história coletiva, voto individual e defesa do impostor',
    'settings.generalTitle': '⚙️ Configurações Gerais',
    'settings.alertSoundLabel': 'Som de Alerta',
    'settings.alertSoundSub': 'Beep nos últimos 10 segundos',
    'settings.navigationSoundLabel': 'Som de Navegação',
    'settings.navigationSoundSub': 'Som ao clicar nos botões da interface',
    'settings.gameroomMusicLabel': 'Música dos menus',
    'settings.gameroomMusicSub': 'Toca na página inicial, setup e configurações',
    'settings.gameplayMusicLabel': 'Música do gameplay',
    'settings.gameplayMusicSub': 'Toca durante preparação, timer e placares',
    'settings.wordsTitle': '🎲 Conteúdo',
    'settings.shuffleWordsLabel': 'Embaralhar jogadores',
    'settings.shuffleWordsSub': 'Altera a ordem de fala em cada rodada',
    'settings.appearanceTitle': '🎨 Aparência',
    'settings.themeLabel': 'Tema visual',
    'settings.themeSub': 'Troque cores, transparências e tipografia da interface',
    'settings.resetAllTitle': '🧹 Restaurar aplicação',
    'settings.resetAllSub': 'Remove configurações, jogadores salvos e packs instalados neste dispositivo.',
    'settings.resetAllButton': 'Restaurar tudo',
    'donate.title': 'Apoie CrazyStory',
    'donate.chooseTitle': '❤️ Escolha como apoiar',
    'donate.subtitle': 'Ajude a financiar novos temas, idiomas e modos de jogo.',
    'donate.buyMeCoffee': 'Buy Me a Coffee',
    'donate.buyMeCoffeeSub': 'Apoio rápido e pontual pelo Buy Me a Coffee.',
    'donate.koFi': 'Ko-fi',
    'donate.koFiSub': 'Doe com Ko-fi e mantenha o projeto evoluindo.',
    'donate.whyTitle': '✨ Por que doar?',
    'donate.whyLanguages': 'Seu apoio ajuda a criar novos baralhos de histórias e traduções.',
    'donate.whyUpdates': 'Também ajuda a manter CrazyStory polido, offline e divertido em grupo.',
    'footer.copyPrefix': '© 2026 CrazyStory v0.1 · Insight X Lab Technologies',
    'language.pt': 'Português',
    'language.en': 'English',
    'language.es': 'Español',
    'theme.cosmic': 'Cósmico',
    'theme.liquid-glass': 'Outono',
    'theme.material3': 'Primavera',
    'theme.light-mode': 'Modo Claro',
    'theme.dark-mode': 'Modo Escuro',
    'theme.high-contrast': 'Alto Contraste',
    'share.footerAriaLabel': 'Compartilhar CrazyStory',
    'setup.title': 'Nova Partida',
    'setup.beforeTitle': '⚡ Antes de começar',
    'setup.beforeSecret': 'Não leia sua carta em voz alta.',
    'setup.beforeImpostor': 'O impostor tenta parecer natural e pode se salvar adivinhando o tema.',
    'setup.beforeStory': 'Registrar a frase é opcional, mas deixa o final mais divertido.',
    'setup.dismissRules': 'Entendi',
    'setup.playersTitle': '1️⃣ Jogadores',
    'setup.playerPlaceholder': 'Nome do jogador...',
    'setup.playerHelper': '💡 3 a 10 jogadores. Todos usam o mesmo dispositivo para ver o papel em segredo.',
    'setup.roundsTitle': '2️⃣ Rodadas',
    'setup.classicName': 'Clássico',
    'setup.classicDesc': 'Rodadas configuráveis',
    'setup.lightningName': 'Relâmpago',
    'setup.lightningDesc': '1 rodada, timer curto',
    'setup.roundsLabel': 'Número de rodadas',
    'setup.roundsClassicSub': 'Cada rodada tem impostor(es), uma história e uma votação.',
    'setup.roundsLightningSub': 'Relâmpago sempre usa 1 rodada.',
    'setup.impostorsLabel': 'Impostores',
    'setup.impostorsSub': 'Use 2 impostores em grupos com 7+ jogadores.',
    'setup.oneImpostor': '1 impostor',
    'setup.twoImpostors': '2 impostores',
    'setup.contentModeLabel': 'Modo do conteúdo',
    'setup.contentModeSub': 'Família é seguro para todas as idades; Noite de amigos usa situações adultas leves.',
    'setup.familyMode': 'Família',
    'setup.partyMode': 'Festa adulta',
    'setup.themesTitle': '3️⃣ Temas',
    'setup.howTitle': '4️⃣ Como funciona',
    'setup.howRole': 'Cada jogador vê seu papel em segredo.',
    'setup.howStory': 'Todos continuam a mesma história, uma frase por vez.',
    'setup.howVote': 'No final, o grupo vota em quem parece não saber o tema.',
    'setup.howVariant': 'Relâmpago usa uma rodada rápida; 2 impostores funciona melhor com 7+ pessoas.',
    'setup.startStory': '🎭 Começar História',
    'setup.startNeedsPlayers': 'Adicione 3 jogadores',
    'setup.selectedThemes': '{count} tema(s) selecionado(s)',
    'rules.title': 'Regras e Temas',
    'rules.availableThemes': '🧩 Temas disponíveis',
    'rules.customContent': '✍️ Conteúdo customizado',
    'rules.packTitle': '📦 Packs de extensão',
    'rules.step1': 'O app sorteia um tema, uma abertura e um impostor.',
    'rules.step2': 'Jogadores veem o papel em segredo e passam o dispositivo.',
    'rules.step3': 'Cada pessoa adiciona uma frase à história.',
    'rules.step4': 'Todos votam. O grupo pontua se achar o impostor; o impostor pontua se escapar.',
    'rules.scoreRule': 'Pontuação:',
    'rules.scoreRuleText': 'cada voto correto ganha pontos se o impostor não acertar o tema.',
    'rules.impostorRule': 'Impostor:',
    'rules.impostorRuleText': 'pontua quando escapa, empata a votação ou acerta o tema na defesa.',
    'rules.multideviceRule': 'Multi-device:',
    'rules.multideviceRuleText': 'a regra usa votos por jogador e pode ser migrada para celulares individuais sem mudar a jornada.',
    'rules.promptPlaceholder': 'Nova abertura de história',
    'rules.addPrompt': 'Adicionar abertura',
    'rules.twistPlaceholder': 'Nova dica secreta / twist',
    'rules.addTwist': 'Adicionar twist',
    'rules.customSummary': 'Conteúdo salvo neste dispositivo: {prompts} abertura(s), {twists} twist(s). Em multi-device, estes dados ficam no host.',
    'rules.clearCustom': 'Limpar conteúdo customizado',
    'rules.packSummary': 'Instalados neste dispositivo: {packs} pack(s), {prompts} abertura(s), {twists} twist(s). Formato JSON com name, description, prompts por categoria e twists.',
    'rules.importPack': 'Importar pack JSON',
    'rules.removePack': 'Remover',
    'rules.noPacks': 'Nenhum pack instalado.',
    'rules.localPack': 'Pack local',
    'rules.openingsCount': '{count} aberturas',
    'multiDevice.connectedCount': '{count} device(s) conectado(s)',
    'multiDevice.sessionOpen': 'Sessão aberta',
    'multiDevice.readyToOpen': 'Pronto para abrir sessão',
    'multiDevice.choiceSubtitle': 'Use outro celular como tela auxiliar com timer, jogador atual e progresso público. Papéis, abertura e dica secreta continuam protegidos no host.',
    'multiDevice.joinAsGuestTitle': '🔗 Conectar como tela auxiliar',
    'guest.connected': 'Conectado',
    'guest.disconnected': 'Desconectado',
    'guest.roundOf': 'Rodada {round} de {rounds}',
    'guest.waitingStory': 'Aguardando história',
    'guest.choosePlayer': 'Escolha seu jogador',
    'guest.connectionNotOpen': 'Conexão ainda não abriu.',
    'guest.waitingRole': 'Aguardando papel do host',
    'guest.yourRole': 'Seu papel: {player}',
    'guest.waitingGame': 'Aguardando partida',
    'guest.openingAndHint': 'Abertura: {prompt}. Dica: {twist}',
    'guest.storySentTitle': 'Frase enviada',
    'guest.waitNextTurn': 'Aguarde o próximo turno.',
    'guest.yourStoryTurn': 'Sua vez na história',
    'guest.storyHelp': 'Conte uma frase curta. O texto é opcional, mas aparece no resumo final.',
    'guest.storyPlaceholder': 'Frase contada',
    'guest.sendStory': 'Enviar frase',
    'guest.waitHostAdvance': 'Aguarde o host avançar.',
    'guest.voteSentTitle': 'Voto enviado',
    'guest.waitVotes': 'Aguarde os outros jogadores terminarem.',
    'guest.secretVoteTitle': 'Vote em segredo',
    'guest.secretVoteHelp': 'Quem parecia não conhecer a abertura secreta?',
    'guest.waitTally': 'Aguarde a apuração no host.',
    'guest.lastChanceTitle': 'Última chance',
    'guest.guessThemeHelp': 'Adivinhe o tema para roubar os pontos.',
    'guest.guessSentTitle': 'Palpite enviado',
    'guest.waitScore': 'Aguarde o placar no host.',
    'guest.joinConnected': 'Conectado. Aguardando dados da partida...',
    'guest.sessionCodeRequired': 'Informe o código da sessão.',
    'guest.phase.roles': 'Revelação secreta no host',
    'guest.phase.story': 'História em andamento',
    'guest.phase.vote': 'Votação secreta no host',
    'guest.phase.impostor-guess': 'Defesa do impostor no host',
    'guest.phase.score': 'Placar da rodada',
    'guest.phase.waiting': 'Aguardando partida',
    'game.roundOf': 'Rodada {round} de {rounds}',
    'game.roleOwner': 'Papel secreto de:',
    'game.passDevice': 'Passe o dispositivo para:',
    'game.preparingReveal': 'Preparando revelação secreta...',
    'game.revealInstruction': 'Quando estiver sozinho olhando para a tela, toque para revelar seu papel.',
    'game.progressOf': '{current} de {total}',
    'game.showMyRole': 'Mostrar meu papel',
    'game.impostorRole': 'IMPOSTOR',
    'game.openingPrefix': 'Abertura:',
    'game.secretHintPrefix': '🎯 Dica secreta:',
    'game.beginStory': 'Começar história',
    'game.hideAndPass': 'Ocultar e passar',
    'game.storyTurnOf': 'Turno {current} de {total}:',
    'game.storyKicker': '{icon} História em andamento',
    'game.continueSecret': 'Continue a história sem entregar demais o segredo.',
    'game.firstSentence': 'Primeira frase: comece usando sua abertura secreta.',
    'game.alreadySpoke': 'Já falaram: {players}',
    'game.firstRoundSentence': 'Primeira frase da rodada',
    'game.storyInputPlaceholder': 'Opcional: escreva a frase contada para reler no final',
    'game.storyInstruction': 'Continue com uma frase curta. Depois passe para o próximo jogador.',
    'game.sentenceTold': '✓ Frase contada',
    'game.skipWithoutText': 'Pular sem texto',
    'game.voteRound': 'Votação da rodada {round}',
    'game.voteFallback': 'Votação',
    'game.secretVoteOf': 'Voto secreto de:',
    'game.voteKicker': '🗳️ Votação secreta',
    'game.votePromptHidden': '{player}, toque para votar sem mostrar aos outros.',
    'game.votesOf': '{current} de {total} votos',
    'game.openBallot': 'Abrir cédula',
    'game.voteOf': '🗳️ Voto de {player}',
    'game.voteQuestion': 'Quem parecia não conhecer a abertura secreta?',
    'game.roundOrder': 'Ordem da rodada: {players}',
    'game.impostorDefense': 'Defesa do impostor',
    'game.lastChanceLabel': 'Última chance:',
    'game.impostorFoundKicker': '🕶️ Impostor descoberto',
    'game.stealPointsPrompt': 'Se adivinhar o tema, ainda rouba pontos.',
    'game.mostVotedSuspect': 'Suspeito mais votado: {player}',
    'score.impostorStole': '🕶️ Impostor roubou pontos!',
    'score.impostorCaught': '🎯 Impostor descoberto!',
    'score.impostorEscaped': '🕶️ O impostor escapou!',
    'score.mostVoted': 'Mais votado: {player}.',
    'score.voteTied': 'A votação empatou.',
    'score.themeGuess': 'Tema: {theme}. {result}',
    'score.guessRight': 'O impostor acertou.',
    'score.guessWrong': 'O impostor errou.',
    'score.subtitle': 'Impostor: {impostor}. {detail}{guess}',
    'score.finalRoundTitle': '🏁 Fim da partida',
    'score.nextRoundTitleDynamic': '🎊 Próxima rodada',
    'score.finalInfo': 'Veja o resultado final.',
    'score.nextRoundInfo': 'Preparem a rodada {round}.',
    'score.viewFinal': 'Ver resultado final',
    'score.continue': 'Continuar',
    'score.noVoters': 'ninguém',
    'score.correctReward': '+{points} para voto correto: {voters}.',
    'score.impostorReward': '+{points} para {player}.',
    'score.ruleLabel': 'Regra:',
    'score.ruleText': 'voto correto pontua só se o impostor não acertar o tema; empate favorece o impostor.',
    'score.roundLabel': 'Rodada:',
    'score.votesLabel': 'Votos:',
    'score.noVotes': 'sem votos',
    'score.quickCorrection': 'Correção rápida:',
    'score.quickCorrectionHelp': 'ajuste pontos se alguém tocou na opção errada.',
    'final.winner': 'VENCEU!',
    'final.ended': 'PARTIDA ENCERRADA',
    'final.storyTitle': '📖 História da partida',
    'final.emptyStory': 'Nenhuma frase foi registrada nesta partida.',
    'final.unregisteredBeat': 'Frase contada sem registro.',
    'leaderboard.summary': '{players} jogadores · {matches} partidas',
    'leaderboard.footer': 'Mostrando {shown} de {total}',
    'leaderboard.empty': 'Nenhuma partida registrada ainda.',
    'leaderboard.matches': '{count} partida(s)',
    'admin.playerDuplicate': 'Jogador já adicionado.',
    'admin.playerLimit': 'Limite de 10 jogadores.',
    'admin.keepOneTheme': 'Mantenha pelo menos um tema.',
    'admin.needPlayers': 'Adicione pelo menos 3 jogadores.',
    'admin.leaderboardConfirm': 'Apagar todo o placar histórico?',
    'admin.leaderboardCleared': 'Placar apagado.',
    'admin.promptRequired': 'Escreva uma abertura.',
    'admin.promptAdded': 'Abertura adicionada.',
    'admin.twistRequired': 'Escreva um twist.',
    'admin.twistAdded': 'Twist adicionado.',
    'admin.clearCustomConfirm': 'Limpar aberturas e twists customizados deste dispositivo?',
    'admin.customCleared': 'Conteúdo customizado limpo.',
    'admin.packInvalid': 'Pack sem conteúdo válido.',
    'admin.packInstalled': 'Pack instalado.',
    'admin.packImportFailed': 'Não foi possível importar o JSON.',
    'admin.packRemoved': 'Pack removido.',
    'admin.restartConfirm': 'Reiniciar a partida atual?',
    'admin.resetConfirm': 'Restaurar configurações e placar local?',
    'admin.linkCopied': 'Link copiado.',
    'admin.installPwa': 'Use a opção instalar do navegador.',
    'admin.peerUnavailable': 'PeerJS indisponível offline.',
    'admin.peerOpenFailed': 'Falha ao abrir sessão P2P.',
    'admin.connectionFailed': 'Falha na conexão.'
  },
  en: {},
  es: {}
};
Object.assign(I18N.en, {
  ...I18N.pt,
  'common.back': '← Back',
  'common.continue': '▶️ Continue',
  'common.restart': '🔄 Restart',
  'common.home': '🏠 Home',
  'common.copy': 'Copy',
  'common.add': '+ Add',
  'home.subtitle': 'Tell a story, hide the impostor, then vote',
  'home.newGame': '🎮 New Game',
  'home.quickGame': '⚡ Quick Game',
  'home.multiDeviceGame': '📡 Multi-device Mode',
  'home.wordBank': '📖 Rules and Themes',
  'home.donate': '❤️ Donate',
  'home.leaderboard': '🏅 Hall of Fame',
  'home.settings': '⚙️ Settings',
  'leaderboard.title': 'Hall of Fame',
  'leaderboard.subtitle': 'Who fooled the group or found impostors the most.',
  'leaderboard.summaryLabel': 'Saved results',
  'leaderboard.resetButton': 'Delete results',
  'multiDevice.title': 'Multi-device Game',
  'multiDevice.chooseTitle': 'What do you want to do?',
  'multiDevice.chooseDesc': 'Open a session to run the game or connect another phone to a player.',
  'multiDevice.hostDesc': 'This device runs the game. Connected phones receive only what each player may see.',
  'multiDevice.joinDesc': 'Connect this phone to receive a player role, turn and vote.',
  'multiDevice.joinCodeLabel': 'Session code or link',
  'multiDevice.joinCodePlaceholder': 'Paste code or link',
  'multiDevice.joinSession': 'Join session',
  'multiDevice.joinHelp': 'You can also scan the QR Code shown by the host.',
  'multiDevice.guestLabel': 'Player phone',
  'multiDevice.waitingTitle': 'Waiting for game data',
  'multiDevice.connecting': 'Connecting...',
  'multiDevice.guestWaiting': 'Waiting for the host to start.',
  'multiDevice.liveDrawing': '📜 Story on phone',
  'game.currentPlayerLabel': 'Story turn:',
  'game.readyTitle': 'Ready to see the role?',
  'game.readySub': 'Only the current player should look. Then pass the device.',
  'game.revealWord': '🎭 Reveal role',
  'game.startsIn': 'Role appears in...',
  'game.challengePrefix': '🎯 Hint:',
  'game.correct': 'Save sentence',
  'game.wrong': 'Skip note',
  'score.nextRoundTitle': '🎊 Next Round',
  'final.winnerLabel': 'WINNER!',
  'final.resultTitle': '📊 Final Result',
  'final.playAgain': '🎮 Play Again',
  'settings.title': 'Settings',
  'settings.languageLabel': 'Language',
  'settings.languageSub': 'Changes fixed interface text on this device',
  'settings.timerTitle': '⏱️ Timer',
  'settings.roundTimeLabel': 'Turn time',
  'settings.roundTimeSub': 'Seconds for each player to continue the story',
  'settings.prepareTimeLabel': 'Reveal time',
  'settings.prepareTimeSub': 'Seconds before showing each secret role',
  'settings.correctPointsLabel': 'Points per correct vote',
  'settings.correctPointsSub': 'Points for each player voting for the impostor if they miss the theme',
  'settings.wrongPenaltyPointsLabel': 'Impostor bonus',
  'settings.wrongPenaltyPointsSub': 'Points when the impostor escapes, ties the vote or guesses the theme',
  'settings.roundFlowLabel': 'Round flow',
  'settings.roundFlowSub': 'Secret role, shared story, individual vote and impostor defense',
  'settings.generalTitle': '⚙️ General Settings',
  'settings.alertSoundLabel': 'Alert sound',
  'settings.alertSoundSub': 'Beep in the last 10 seconds',
  'settings.navigationSoundLabel': 'Navigation sound',
  'settings.navigationSoundSub': 'Sound when tapping interface buttons',
  'settings.gameroomMusicLabel': 'Menu music',
  'settings.gameroomMusicSub': 'Plays on home, setup and settings',
  'settings.gameplayMusicLabel': 'Gameplay music',
  'settings.gameplayMusicSub': 'Plays during prep, timer and scores',
  'settings.wordsTitle': '🎲 Content',
  'settings.shuffleWordsLabel': 'Shuffle players',
  'settings.shuffleWordsSub': 'Changes speaking order each round',
  'settings.appearanceTitle': '🎨 Appearance',
  'settings.themeLabel': 'Visual theme',
  'settings.themeSub': 'Change colors, transparency and typography',
  'settings.resetAllTitle': '🧹 Reset app',
  'settings.resetAllSub': 'Removes settings, saved players and packs on this device.',
  'settings.resetAllButton': 'Reset everything',
  'donate.title': 'Support CrazyStory',
  'donate.chooseTitle': '❤️ Choose how to support',
  'donate.subtitle': 'Help fund new themes, languages and game modes.',
  'donate.buyMeCoffeeSub': 'Quick one-time support through Buy Me a Coffee.',
  'donate.koFiSub': 'Donate with Ko-fi and keep the project evolving.',
  'donate.whyTitle': '✨ Why donate?',
  'donate.whyLanguages': 'Your support helps create new story packs and translations.',
  'donate.whyUpdates': 'It also keeps CrazyStory polished, offline and fun for groups.',
  'share.footerAriaLabel': 'Share CrazyStory'
});
Object.assign(I18N.es, {
  ...I18N.pt,
  'common.back': '← Volver',
  'common.continue': '▶️ Continuar',
  'common.restart': '🔄 Reiniciar',
  'common.home': '🏠 Inicio',
  'common.copy': 'Copiar',
  'common.add': '+ Agregar',
  'home.subtitle': 'Cuenta una historia, oculta al impostor y vota al final',
  'home.newGame': '🎮 Nueva partida',
  'home.quickGame': '⚡ Partida rápida',
  'home.multiDeviceGame': '📡 Modo multidispositivo',
  'home.wordBank': '📖 Reglas y temas',
  'home.donate': '❤️ Donar',
  'home.leaderboard': '🏅 Marcador histórico',
  'home.settings': '⚙️ Configuración',
  'leaderboard.title': 'Marcador histórico',
  'leaderboard.subtitle': 'Quien más engañó al grupo o encontró impostores.',
  'leaderboard.summaryLabel': 'Resultados guardados',
  'leaderboard.resetButton': 'Borrar resultados',
  'multiDevice.title': 'Partida multidispositivo',
  'multiDevice.chooseTitle': '¿Qué quieres hacer?',
  'multiDevice.chooseDesc': 'Abre una sesión para controlar la partida o conecta otro celular a un jugador.',
  'multiDevice.hostDesc': 'Este dispositivo controla la partida. Los celulares conectados reciben solo lo que cada jugador puede ver.',
  'multiDevice.joinDesc': 'Conecta este celular para recibir rol, turno y voto de un jugador.',
  'multiDevice.joinCodeLabel': 'Código o enlace de sesión',
  'multiDevice.joinCodePlaceholder': 'Pega el código o enlace',
  'multiDevice.joinSession': 'Conectar a la sesión',
  'multiDevice.joinHelp': 'También puedes escanear el código QR mostrado por el host.',
  'multiDevice.guestLabel': 'Celular del jugador',
  'multiDevice.waitingTitle': 'Esperando datos de la partida',
  'multiDevice.connecting': 'Conectando...',
  'multiDevice.guestWaiting': 'Esperando que el host inicie.',
  'multiDevice.liveDrawing': '📜 Historia en el celular',
  'game.currentPlayerLabel': 'Turno de historia:',
  'game.readyTitle': '¿Listos para ver el rol?',
  'game.readySub': 'Solo el jugador actual debe mirar. Luego pasa el dispositivo.',
  'game.revealWord': '🎭 Revelar rol',
  'game.startsIn': 'El rol aparece en...',
  'game.challengePrefix': '🎯 Pista:',
  'game.correct': 'Guardar frase',
  'game.wrong': 'Saltar registro',
  'score.nextRoundTitle': '🎊 Próxima ronda',
  'final.winnerLabel': '¡GANADOR!',
  'final.resultTitle': '📊 Resultado final',
  'final.playAgain': '🎮 Jugar otra vez',
  'settings.title': 'Configuración',
  'settings.languageLabel': 'Idioma',
  'settings.languageSub': 'Cambia textos fijos de la interfaz en este dispositivo',
  'settings.timerTitle': '⏱️ Temporizador',
  'settings.roundTimeLabel': 'Tiempo por turno',
  'settings.roundTimeSub': 'Segundos para que cada jugador continúe la historia',
  'settings.prepareTimeLabel': 'Tiempo de revelación',
  'settings.prepareTimeSub': 'Segundos antes de mostrar cada rol secreto',
  'settings.correctPointsLabel': 'Puntos por voto correcto',
  'settings.correctPointsSub': 'Puntos para cada jugador que vote al impostor si no adivina el tema',
  'settings.wrongPenaltyPointsLabel': 'Bono del impostor',
  'settings.wrongPenaltyPointsSub': 'Puntos cuando el impostor escapa, empata o adivina el tema',
  'settings.roundFlowLabel': 'Flujo de ronda',
  'settings.roundFlowSub': 'Rol secreto, historia compartida, voto individual y defensa del impostor',
  'settings.generalTitle': '⚙️ Configuración general',
  'settings.alertSoundLabel': 'Sonido de alerta',
  'settings.alertSoundSub': 'Beep en los últimos 10 segundos',
  'settings.navigationSoundLabel': 'Sonido de navegación',
  'settings.navigationSoundSub': 'Sonido al tocar botones de la interfaz',
  'settings.gameroomMusicLabel': 'Música de menús',
  'settings.gameroomMusicSub': 'Suena en inicio, setup y configuración',
  'settings.gameplayMusicLabel': 'Música de juego',
  'settings.gameplayMusicSub': 'Suena durante preparación, timer y placares',
  'settings.wordsTitle': '🎲 Contenido',
  'settings.shuffleWordsLabel': 'Mezclar jugadores',
  'settings.shuffleWordsSub': 'Cambia el orden de habla en cada ronda',
  'settings.appearanceTitle': '🎨 Apariencia',
  'settings.themeLabel': 'Tema visual',
  'settings.themeSub': 'Cambia colores, transparencias y tipografía',
  'settings.resetAllTitle': '🧹 Restaurar app',
  'settings.resetAllSub': 'Elimina configuración, jugadores guardados y packs en este dispositivo.',
  'settings.resetAllButton': 'Restaurar todo',
  'donate.title': 'Apoya CrazyStory',
  'donate.chooseTitle': '❤️ Elige cómo apoyar',
  'donate.subtitle': 'Ayuda a financiar nuevos temas, idiomas y modos de juego.',
  'donate.buyMeCoffeeSub': 'Apoyo rápido y puntual por Buy Me a Coffee.',
  'donate.koFiSub': 'Dona con Ko-fi y mantén el proyecto evolucionando.',
  'donate.whyTitle': '✨ ¿Por qué donar?',
  'donate.whyLanguages': 'Tu apoyo ayuda a crear nuevos packs de historias y traducciones.',
  'donate.whyUpdates': 'También mantiene CrazyStory pulido, offline y divertido en grupo.',
  'share.footerAriaLabel': 'Compartir CrazyStory'
});
Object.assign(I18N.en, {
  'setup.title': 'New Game',
  'setup.beforeTitle': '⚡ Before you start',
  'setup.beforeSecret': 'Do not read your card out loud.',
  'setup.beforeImpostor': 'The impostor tries to sound natural and can save themselves by guessing the theme.',
  'setup.beforeStory': 'Writing the sentence is optional, but makes the finale better.',
  'setup.dismissRules': 'Got it',
  'setup.playersTitle': '1️⃣ Players',
  'setup.playerPlaceholder': 'Player name...',
  'setup.playerHelper': '💡 3 to 10 players. Everyone uses this device to see roles in secret.',
  'setup.roundsTitle': '2️⃣ Rounds',
  'setup.classicName': 'Classic',
  'setup.classicDesc': 'Configurable rounds',
  'setup.lightningName': 'Lightning',
  'setup.lightningDesc': '1 round, short timer',
  'setup.roundsLabel': 'Number of rounds',
  'setup.roundsClassicSub': 'Each round has impostor(s), a story and a vote.',
  'setup.roundsLightningSub': 'Lightning always uses 1 round.',
  'setup.impostorsLabel': 'Impostors',
  'setup.impostorsSub': 'Use 2 impostors with 7+ players.',
  'setup.oneImpostor': '1 impostor',
  'setup.twoImpostors': '2 impostors',
  'setup.contentModeLabel': 'Content mode',
  'setup.contentModeSub': 'Family is safe for all ages; Party night uses light adult situations.',
  'setup.familyMode': 'Family',
  'setup.partyMode': 'Party night',
  'setup.themesTitle': '3️⃣ Themes',
  'setup.howTitle': '4️⃣ How it works',
  'setup.howRole': 'Each player sees their role in secret.',
  'setup.howStory': 'Everyone continues the same story, one sentence at a time.',
  'setup.howVote': 'At the end, the group votes for whoever seems not to know the theme.',
  'setup.howVariant': 'Lightning uses a fast round; 2 impostors works best with 7+ people.',
  'setup.startStory': '🎭 Start Story',
  'setup.startNeedsPlayers': 'Add 3 players',
  'setup.selectedThemes': '{count} theme(s) selected',
  'rules.title': 'Rules and Themes',
  'rules.availableThemes': '🧩 Available themes',
  'rules.customContent': '✍️ Custom content',
  'rules.packTitle': '📦 Extension packs',
  'rules.step1': 'The app draws a theme, an opening and an impostor.',
  'rules.step2': 'Players see their role in secret and pass the device.',
  'rules.step3': 'Each person adds one sentence to the story.',
  'rules.step4': 'Everyone votes. The group scores by finding the impostor; the impostor scores by escaping.',
  'rules.scoreRule': 'Scoring:',
  'rules.scoreRuleText': 'each correct vote scores if the impostor misses the theme.',
  'rules.impostorRule': 'Impostor:',
  'rules.impostorRuleText': 'scores by escaping, tying the vote or guessing the theme in defense.',
  'rules.multideviceRule': 'Multi-device:',
  'rules.multideviceRuleText': 'the rule uses votes per player and supports individual phones without changing the journey.',
  'rules.promptPlaceholder': 'New story opening',
  'rules.addPrompt': 'Add opening',
  'rules.twistPlaceholder': 'New secret hint / twist',
  'rules.addTwist': 'Add twist',
  'rules.customSummary': 'Content saved on this device: {prompts} opening(s), {twists} twist(s). In multi-device, these stay on the host.',
  'rules.clearCustom': 'Clear custom content',
  'rules.packSummary': 'Installed on this device: {packs} pack(s), {prompts} opening(s), {twists} twist(s). JSON format with name, description, prompts by category and twists.',
  'rules.importPack': 'Import JSON pack',
  'rules.removePack': 'Remove',
  'rules.noPacks': 'No packs installed.',
  'rules.localPack': 'Local pack',
  'rules.openingsCount': '{count} openings',
  'multiDevice.connectedCount': '{count} connected device(s)',
  'multiDevice.sessionOpen': 'Session open',
  'multiDevice.readyToOpen': 'Ready to open session',
  'multiDevice.choiceSubtitle': 'Use another phone as an auxiliary screen with timer, current player and public progress. Roles, opening and secret hint stay protected on the host.',
  'multiDevice.joinAsGuestTitle': '🔗 Connect as auxiliary screen'
});
Object.assign(I18N.es, {
  'setup.title': 'Nueva partida',
  'setup.beforeTitle': '⚡ Antes de empezar',
  'setup.beforeSecret': 'No leas tu carta en voz alta.',
  'setup.beforeImpostor': 'El impostor intenta sonar natural y puede salvarse adivinando el tema.',
  'setup.beforeStory': 'Registrar la frase es opcional, pero hace mejor el final.',
  'setup.dismissRules': 'Entendido',
  'setup.playersTitle': '1️⃣ Jugadores',
  'setup.playerPlaceholder': 'Nombre del jugador...',
  'setup.playerHelper': '💡 3 a 10 jugadores. Todos usan este dispositivo para ver el rol en secreto.',
  'setup.roundsTitle': '2️⃣ Rondas',
  'setup.classicName': 'Clásico',
  'setup.classicDesc': 'Rondas configurables',
  'setup.lightningName': 'Relámpago',
  'setup.lightningDesc': '1 ronda, timer corto',
  'setup.roundsLabel': 'Número de rondas',
  'setup.roundsClassicSub': 'Cada ronda tiene impostor(es), una historia y una votación.',
  'setup.roundsLightningSub': 'Relámpago siempre usa 1 ronda.',
  'setup.impostorsLabel': 'Impostores',
  'setup.impostorsSub': 'Usa 2 impostores con 7+ jugadores.',
  'setup.oneImpostor': '1 impostor',
  'setup.twoImpostors': '2 impostores',
  'setup.contentModeLabel': 'Modo de contenido',
  'setup.contentModeSub': 'Familia es seguro para todas las edades; Noche de fiesta usa situaciones adultas leves.',
  'setup.familyMode': 'Familia',
  'setup.partyMode': 'Noche de fiesta',
  'setup.themesTitle': '3️⃣ Temas',
  'setup.howTitle': '4️⃣ Cómo funciona',
  'setup.howRole': 'Cada jugador ve su rol en secreto.',
  'setup.howStory': 'Todos continúan la misma historia, una frase por vez.',
  'setup.howVote': 'Al final, el grupo vota por quien parece no saber el tema.',
  'setup.howVariant': 'Relámpago usa una ronda rápida; 2 impostores funciona mejor con 7+ personas.',
  'setup.startStory': '🎭 Empezar historia',
  'setup.startNeedsPlayers': 'Agrega 3 jugadores',
  'setup.selectedThemes': '{count} tema(s) seleccionado(s)',
  'rules.title': 'Reglas y temas',
  'rules.availableThemes': '🧩 Temas disponibles',
  'rules.customContent': '✍️ Contenido personalizado',
  'rules.packTitle': '📦 Packs de extensión',
  'rules.step1': 'La app sortea un tema, una apertura y un impostor.',
  'rules.step2': 'Los jugadores ven su rol en secreto y pasan el dispositivo.',
  'rules.step3': 'Cada persona agrega una frase a la historia.',
  'rules.step4': 'Todos votan. El grupo puntúa si encuentra al impostor; el impostor puntúa si escapa.',
  'rules.scoreRule': 'Puntuación:',
  'rules.scoreRuleText': 'cada voto correcto puntúa si el impostor no acierta el tema.',
  'rules.impostorRule': 'Impostor:',
  'rules.impostorRuleText': 'puntúa cuando escapa, empata la votación o acierta el tema en la defensa.',
  'rules.multideviceRule': 'Multidispositivo:',
  'rules.multideviceRuleText': 'la regla usa votos por jugador y soporta celulares individuales sin cambiar la jornada.',
  'rules.promptPlaceholder': 'Nueva apertura de historia',
  'rules.addPrompt': 'Agregar apertura',
  'rules.twistPlaceholder': 'Nueva pista secreta / twist',
  'rules.addTwist': 'Agregar twist',
  'rules.customSummary': 'Contenido guardado en este dispositivo: {prompts} apertura(s), {twists} twist(s). En multi-device, estos datos quedan en el host.',
  'rules.clearCustom': 'Limpiar contenido personalizado',
  'rules.packSummary': 'Instalados en este dispositivo: {packs} pack(s), {prompts} apertura(s), {twists} twist(s). Formato JSON con name, description, prompts por categoría y twists.',
  'rules.importPack': 'Importar pack JSON',
  'rules.removePack': 'Remover',
  'rules.noPacks': 'Ningún pack instalado.',
  'rules.localPack': 'Pack local',
  'rules.openingsCount': '{count} aperturas',
  'multiDevice.connectedCount': '{count} dispositivo(s) conectado(s)',
  'multiDevice.sessionOpen': 'Sesión abierta',
  'multiDevice.readyToOpen': 'Listo para abrir sesión',
  'multiDevice.choiceSubtitle': 'Usa otro celular como pantalla auxiliar con timer, jugador actual y progreso público. Roles, apertura y pista secreta siguen protegidos en el host.',
  'multiDevice.joinAsGuestTitle': '🔗 Conectar como pantalla auxiliar'
});
Object.assign(I18N.en, {
  'guest.connected': 'Connected',
  'guest.disconnected': 'Disconnected',
  'guest.roundOf': 'Round {round} of {rounds}',
  'guest.waitingStory': 'Waiting for story',
  'guest.choosePlayer': 'Choose your player',
  'guest.connectionNotOpen': 'Connection is not open yet.',
  'guest.waitingRole': 'Waiting for role from host',
  'guest.yourRole': 'Your role: {player}',
  'guest.waitingGame': 'Waiting for game',
  'guest.openingAndHint': 'Opening: {prompt}. Hint: {twist}',
  'guest.storySentTitle': 'Sentence sent',
  'guest.waitNextTurn': 'Wait for the next turn.',
  'guest.yourStoryTurn': 'Your story turn',
  'guest.storyHelp': 'Tell a short sentence. Text is optional, but appears in the final recap.',
  'guest.storyPlaceholder': 'Sentence told',
  'guest.sendStory': 'Send sentence',
  'guest.waitHostAdvance': 'Wait for the host to advance.',
  'guest.voteSentTitle': 'Vote sent',
  'guest.waitVotes': 'Wait for the other players to finish.',
  'guest.secretVoteTitle': 'Vote in secret',
  'guest.secretVoteHelp': 'Who seemed not to know the secret opening?',
  'guest.waitTally': 'Wait for the host to tally.',
  'guest.lastChanceTitle': 'Last chance',
  'guest.guessThemeHelp': 'Guess the theme to steal the points.',
  'guest.guessSentTitle': 'Guess sent',
  'guest.waitScore': 'Wait for the score on the host.',
  'guest.joinConnected': 'Connected. Waiting for game data...',
  'guest.sessionCodeRequired': 'Enter the session code.',
  'guest.phase.roles': 'Secret reveal on host',
  'guest.phase.story': 'Story in progress',
  'guest.phase.vote': 'Secret vote on host',
  'guest.phase.impostor-guess': 'Impostor defense on host',
  'guest.phase.score': 'Round score',
  'guest.phase.waiting': 'Waiting for game',
  'game.roundOf': 'Round {round} of {rounds}',
  'game.roleOwner': 'Secret role for:',
  'game.passDevice': 'Pass the device to:',
  'game.preparingReveal': 'Preparing secret reveal...',
  'game.revealInstruction': 'When you are the only one looking at the screen, tap to reveal your role.',
  'game.progressOf': '{current} of {total}',
  'game.showMyRole': 'Show my role',
  'game.impostorRole': 'IMPOSTOR',
  'game.openingPrefix': 'Opening:',
  'game.secretHintPrefix': '🎯 Secret hint:',
  'game.beginStory': 'Start story',
  'game.hideAndPass': 'Hide and pass',
  'game.storyTurnOf': 'Turn {current} of {total}:',
  'game.storyKicker': '{icon} Story in progress',
  'game.continueSecret': 'Continue the story without giving away too much.',
  'game.firstSentence': 'First sentence: start from your secret opening.',
  'game.alreadySpoke': 'Already spoke: {players}',
  'game.firstRoundSentence': 'First sentence of the round',
  'game.storyInputPlaceholder': 'Optional: write the sentence to reread at the end',
  'game.storyInstruction': 'Continue with a short sentence. Then pass to the next player.',
  'game.sentenceTold': '✓ Sentence told',
  'game.skipWithoutText': 'Skip without text',
  'game.voteRound': 'Round {round} vote',
  'game.voteFallback': 'Vote',
  'game.secretVoteOf': 'Secret vote for:',
  'game.voteKicker': '🗳️ Secret vote',
  'game.votePromptHidden': '{player}, tap to vote without showing others.',
  'game.votesOf': '{current} of {total} votes',
  'game.openBallot': 'Open ballot',
  'game.voteOf': '🗳️ Vote by {player}',
  'game.voteQuestion': 'Who seemed not to know the secret opening?',
  'game.roundOrder': 'Round order: {players}',
  'game.impostorDefense': 'Impostor defense',
  'game.lastChanceLabel': 'Last chance:',
  'game.impostorFoundKicker': '🕶️ Impostor found',
  'game.stealPointsPrompt': 'Guess the theme to still steal points.',
  'game.mostVotedSuspect': 'Most voted suspect: {player}',
  'score.impostorStole': '🕶️ Impostor stole points!',
  'score.impostorCaught': '🎯 Impostor found!',
  'score.impostorEscaped': '🕶️ The impostor escaped!',
  'score.mostVoted': 'Most voted: {player}.',
  'score.voteTied': 'The vote tied.',
  'score.themeGuess': 'Theme: {theme}. {result}',
  'score.guessRight': 'The impostor guessed it.',
  'score.guessWrong': 'The impostor missed.',
  'score.subtitle': 'Impostor: {impostor}. {detail}{guess}',
  'score.finalRoundTitle': '🏁 End of match',
  'score.nextRoundTitleDynamic': '🎊 Next round',
  'score.finalInfo': 'See the final result.',
  'score.nextRoundInfo': 'Prepare round {round}.',
  'score.viewFinal': 'See final result',
  'score.continue': 'Continue',
  'score.noVoters': 'nobody',
  'score.correctReward': '+{points} for correct vote: {voters}.',
  'score.impostorReward': '+{points} for {player}.',
  'score.ruleLabel': 'Rule:',
  'score.ruleText': 'correct votes score only if the impostor misses the theme; ties favor the impostor.',
  'score.roundLabel': 'Round:',
  'score.votesLabel': 'Votes:',
  'score.noVotes': 'no votes',
  'score.quickCorrection': 'Quick correction:',
  'score.quickCorrectionHelp': 'adjust points if someone tapped the wrong option.',
  'final.winner': 'WON!',
  'final.ended': 'MATCH ENDED',
  'final.storyTitle': '📖 Match story',
  'final.emptyStory': 'No sentence was recorded in this match.',
  'final.unregisteredBeat': 'Sentence told without record.',
  'leaderboard.summary': '{players} players · {matches} matches',
  'leaderboard.footer': 'Showing {shown} of {total}',
  'leaderboard.empty': 'No matches recorded yet.',
  'leaderboard.matches': '{count} match(es)',
  'admin.playerDuplicate': 'Player already added.',
  'admin.playerLimit': 'Limit of 10 players.',
  'admin.keepOneTheme': 'Keep at least one theme.',
  'admin.needPlayers': 'Add at least 3 players.',
  'admin.leaderboardConfirm': 'Delete the whole historical score?',
  'admin.leaderboardCleared': 'Score cleared.',
  'admin.promptRequired': 'Write an opening.',
  'admin.promptAdded': 'Opening added.',
  'admin.twistRequired': 'Write a twist.',
  'admin.twistAdded': 'Twist added.',
  'admin.clearCustomConfirm': 'Clear custom openings and twists from this device?',
  'admin.customCleared': 'Custom content cleared.',
  'admin.packInvalid': 'Pack has no valid content.',
  'admin.packInstalled': 'Pack installed.',
  'admin.packImportFailed': 'Could not import the JSON.',
  'admin.packRemoved': 'Pack removed.',
  'admin.restartConfirm': 'Restart the current match?',
  'admin.resetConfirm': 'Restore local settings and score?',
  'admin.linkCopied': 'Link copied.',
  'admin.installPwa': 'Use the browser install option.',
  'admin.peerUnavailable': 'PeerJS unavailable offline.',
  'admin.peerOpenFailed': 'Failed to open P2P session.',
  'admin.connectionFailed': 'Connection failed.'
});
Object.assign(I18N.es, {
  'guest.connected': 'Conectado',
  'guest.disconnected': 'Desconectado',
  'guest.roundOf': 'Ronda {round} de {rounds}',
  'guest.waitingStory': 'Esperando historia',
  'guest.choosePlayer': 'Elige tu jugador',
  'guest.connectionNotOpen': 'La conexión aún no abrió.',
  'guest.waitingRole': 'Esperando rol del host',
  'guest.yourRole': 'Tu rol: {player}',
  'guest.waitingGame': 'Esperando partida',
  'guest.openingAndHint': 'Apertura: {prompt}. Pista: {twist}',
  'guest.storySentTitle': 'Frase enviada',
  'guest.waitNextTurn': 'Espera el próximo turno.',
  'guest.yourStoryTurn': 'Tu turno en la historia',
  'guest.storyHelp': 'Cuenta una frase corta. El texto es opcional, pero aparece en el resumen final.',
  'guest.storyPlaceholder': 'Frase contada',
  'guest.sendStory': 'Enviar frase',
  'guest.waitHostAdvance': 'Espera que el host avance.',
  'guest.voteSentTitle': 'Voto enviado',
  'guest.waitVotes': 'Espera que los otros jugadores terminen.',
  'guest.secretVoteTitle': 'Vota en secreto',
  'guest.secretVoteHelp': '¿Quién parecía no conocer la apertura secreta?',
  'guest.waitTally': 'Espera el conteo del host.',
  'guest.lastChanceTitle': 'Última oportunidad',
  'guest.guessThemeHelp': 'Adivina el tema para robar los puntos.',
  'guest.guessSentTitle': 'Palpite enviado',
  'guest.waitScore': 'Espera el marcador en el host.',
  'guest.joinConnected': 'Conectado. Esperando datos de la partida...',
  'guest.sessionCodeRequired': 'Ingresa el código de la sesión.',
  'guest.phase.roles': 'Revelación secreta en el host',
  'guest.phase.story': 'Historia en curso',
  'guest.phase.vote': 'Votación secreta en el host',
  'guest.phase.impostor-guess': 'Defensa del impostor en el host',
  'guest.phase.score': 'Marcador de la ronda',
  'guest.phase.waiting': 'Esperando partida',
  'game.roundOf': 'Ronda {round} de {rounds}',
  'game.roleOwner': 'Rol secreto de:',
  'game.passDevice': 'Pasa el dispositivo a:',
  'game.preparingReveal': 'Preparando revelación secreta...',
  'game.revealInstruction': 'Cuando solo tú estés mirando la pantalla, toca para revelar tu rol.',
  'game.progressOf': '{current} de {total}',
  'game.showMyRole': 'Mostrar mi rol',
  'game.impostorRole': 'IMPOSTOR',
  'game.openingPrefix': 'Apertura:',
  'game.secretHintPrefix': '🎯 Pista secreta:',
  'game.beginStory': 'Empezar historia',
  'game.hideAndPass': 'Ocultar y pasar',
  'game.storyTurnOf': 'Turno {current} de {total}:',
  'game.storyKicker': '{icon} Historia en curso',
  'game.continueSecret': 'Continúa la historia sin revelar demasiado.',
  'game.firstSentence': 'Primera frase: empieza usando tu apertura secreta.',
  'game.alreadySpoke': 'Ya hablaron: {players}',
  'game.firstRoundSentence': 'Primera frase de la ronda',
  'game.storyInputPlaceholder': 'Opcional: escribe la frase para releer al final',
  'game.storyInstruction': 'Continúa con una frase corta. Luego pasa al siguiente jugador.',
  'game.sentenceTold': '✓ Frase contada',
  'game.skipWithoutText': 'Saltar sin texto',
  'game.voteRound': 'Votación de la ronda {round}',
  'game.voteFallback': 'Votación',
  'game.secretVoteOf': 'Voto secreto de:',
  'game.voteKicker': '🗳️ Votación secreta',
  'game.votePromptHidden': '{player}, toca para votar sin mostrar a los demás.',
  'game.votesOf': '{current} de {total} votos',
  'game.openBallot': 'Abrir cédula',
  'game.voteOf': '🗳️ Voto de {player}',
  'game.voteQuestion': '¿Quién parecía no conocer la apertura secreta?',
  'game.roundOrder': 'Orden de la ronda: {players}',
  'game.impostorDefense': 'Defensa del impostor',
  'game.lastChanceLabel': 'Última oportunidad:',
  'game.impostorFoundKicker': '🕶️ Impostor descubierto',
  'game.stealPointsPrompt': 'Si adivina el tema, todavía roba puntos.',
  'game.mostVotedSuspect': 'Sospechoso más votado: {player}',
  'score.impostorStole': '🕶️ ¡El impostor robó puntos!',
  'score.impostorCaught': '🎯 ¡Impostor descubierto!',
  'score.impostorEscaped': '🕶️ ¡El impostor escapó!',
  'score.mostVoted': 'Más votado: {player}.',
  'score.voteTied': 'La votación empató.',
  'score.themeGuess': 'Tema: {theme}. {result}',
  'score.guessRight': 'El impostor acertó.',
  'score.guessWrong': 'El impostor falló.',
  'score.subtitle': 'Impostor: {impostor}. {detail}{guess}',
  'score.finalRoundTitle': '🏁 Fin de la partida',
  'score.nextRoundTitleDynamic': '🎊 Próxima ronda',
  'score.finalInfo': 'Mira el resultado final.',
  'score.nextRoundInfo': 'Preparen la ronda {round}.',
  'score.viewFinal': 'Ver resultado final',
  'score.continue': 'Continuar',
  'score.noVoters': 'nadie',
  'score.correctReward': '+{points} por voto correcto: {voters}.',
  'score.impostorReward': '+{points} para {player}.',
  'score.ruleLabel': 'Regla:',
  'score.ruleText': 'el voto correcto puntúa solo si el impostor no acierta el tema; el empate favorece al impostor.',
  'score.roundLabel': 'Ronda:',
  'score.votesLabel': 'Votos:',
  'score.noVotes': 'sin votos',
  'score.quickCorrection': 'Corrección rápida:',
  'score.quickCorrectionHelp': 'ajusta puntos si alguien tocó la opción equivocada.',
  'final.winner': '¡GANÓ!',
  'final.ended': 'PARTIDA FINALIZADA',
  'final.storyTitle': '📖 Historia de la partida',
  'final.emptyStory': 'No se registró ninguna frase en esta partida.',
  'final.unregisteredBeat': 'Frase contada sin registro.',
  'leaderboard.summary': '{players} jugadores · {matches} partidas',
  'leaderboard.footer': 'Mostrando {shown} de {total}',
  'leaderboard.empty': 'Ninguna partida registrada todavía.',
  'leaderboard.matches': '{count} partida(s)',
  'admin.playerDuplicate': 'Jugador ya agregado.',
  'admin.playerLimit': 'Límite de 10 jugadores.',
  'admin.keepOneTheme': 'Mantén al menos un tema.',
  'admin.needPlayers': 'Agrega al menos 3 jugadores.',
  'admin.leaderboardConfirm': '¿Borrar todo el marcador histórico?',
  'admin.leaderboardCleared': 'Marcador borrado.',
  'admin.promptRequired': 'Escribe una apertura.',
  'admin.promptAdded': 'Apertura agregada.',
  'admin.twistRequired': 'Escribe un twist.',
  'admin.twistAdded': 'Twist agregado.',
  'admin.clearCustomConfirm': '¿Limpiar aperturas y twists personalizados de este dispositivo?',
  'admin.customCleared': 'Contenido personalizado limpiado.',
  'admin.packInvalid': 'Pack sin contenido válido.',
  'admin.packInstalled': 'Pack instalado.',
  'admin.packImportFailed': 'No se pudo importar el JSON.',
  'admin.packRemoved': 'Pack removido.',
  'admin.restartConfirm': '¿Reiniciar la partida actual?',
  'admin.resetConfirm': '¿Restaurar configuración y marcador local?',
  'admin.linkCopied': 'Enlace copiado.',
  'admin.installPwa': 'Usa la opción instalar del navegador.',
  'admin.peerUnavailable': 'PeerJS no disponible offline.',
  'admin.peerOpenFailed': 'Error al abrir sesión P2P.',
  'admin.connectionFailed': 'Error de conexión.'
});

const STORY_CATEGORIES = [
  {
    id: 'aventura',
    icon: '🗺️',
    name: 'Aventura',
    prompts: [
      'Um mapa aparece dentro de uma caixa de cereal.',
      'O grupo encontra uma porta secreta no quintal.',
      'Uma viagem de férias vira uma missão urgente.',
      'Alguém recebe uma mochila que não é sua.',
      'Uma ponte some exatamente quando todos precisam atravessar.'
    ]
  },
  {
    id: 'misterio',
    icon: '🕵️',
    name: 'Mistério',
    prompts: [
      'Todas as luzes apagam e um objeto desaparece.',
      'Uma mensagem anônima surge no espelho do banheiro.',
      'O cachorro da família volta para casa usando uma gravata.',
      'Uma mala trancada aparece na sala sem explicação.',
      'Todo mundo lembra da festa, menos da pessoa mais importante.'
    ]
  },
  {
    id: 'familia',
    icon: '🏠',
    name: 'Família',
    prompts: [
      'O almoço de domingo recebe um convidado inesperado.',
      'A avó revela que já foi agente secreta.',
      'Uma competição boba divide a casa inteira.',
      'Um aniversário surpresa dá errado logo no começo.',
      'O grupo precisa esconder uma confusão antes dos pais chegarem.'
    ]
  },
  {
    id: 'absurdo',
    icon: '🤪',
    name: 'Absurdo',
    prompts: [
      'A geladeira começa a dar conselhos de vida.',
      'Um elevador para em um andar que não existe.',
      'Todos acordam falando em rima.',
      'Uma pizza gigante pede ajuda para não ser comida.',
      'O controle remoto passa a controlar pessoas.'
    ]
  },
  {
    id: 'escola',
    icon: '📚',
    name: 'Escola & Trabalho',
    prompts: [
      'Uma reunião comum vira uma investigação.',
      'A prova tem perguntas sobre coisas que ainda não aconteceram.',
      'O chefe pede uma tarefa impossível em cinco minutos.',
      'A sala de aula troca de lugar com uma nave espacial.',
      'Um e-mail enviado sem querer muda o dia de todo mundo.'
    ]
  },
  {
    id: 'fantasia',
    icon: '✨',
    name: 'Fantasia',
    prompts: [
      'Um feitiço transforma um objeto comum em narrador.',
      'Uma criatura mágica se esconde no mercado do bairro.',
      'O grupo herda uma loja que vende desejos usados.',
      'Uma coroa escolhe o pior rei possível.',
      'Um portal abre toda vez que alguém espirra.'
    ]
  }
];

const EXTRA_STORY_PROMPTS = {
  aventura: [
    'Uma bússola aponta para uma pessoa da mesa.',
    'O grupo encontra um bilhete dentro de uma garrafa brilhante.',
    'Um passeio no shopping vira uma caça ao tesouro.',
    'Alguém descobre que o ônibus está indo para outro século.',
    'Um drone entrega uma missão com o nome de todos.',
    'A praia começa a recuar e revela uma cidade escondida.',
    'Uma barraca de feira vende passagens para lugares impossíveis.',
    'O grupo precisa devolver uma estrela antes do amanhecer.',
    'Uma chave antiga abre qualquer porta, menos a própria casa.',
    'Um guia turístico parece saber coisas demais sobre o futuro.',
    'A mala de viagem só abre quando alguém canta.',
    'Um jogo de tabuleiro transporta todos para a próxima casa.'
  ],
  misterio: [
    'O relógio da sala começa a contar para trás.',
    'Todos recebem a mesma foto, mas ninguém lembra de ter posado.',
    'Uma sombra aparece sempre antes de alguém falar.',
    'O elevador toca uma música que revela pistas.',
    'Um livro da estante escreve sozinho o próximo capítulo.',
    'A campainha toca, mas a câmera mostra a própria sala.',
    'Um objeto perdido volta com uma etiqueta de outro planeta.',
    'A senha do Wi-Fi muda para uma charada urgente.',
    'Um quadro da parede pisca quando alguém mente.',
    'A caixa de correio entrega cartas de amanhã.',
    'Um vizinho jura que a casa sumiu por três minutos.',
    'A última mensagem apagada do grupo reaparece na televisão.'
  ],
  familia: [
    'A família descobre um troféu secreto escondido no sofá.',
    'O jantar só fica pronto se todos resolverem uma charada.',
    'Um primo distante chega dizendo conhecer o final da história.',
    'A foto antiga da família muda toda vez que alguém olha.',
    'O cachorro escolhe quem vai comandar a casa por um dia.',
    'Uma receita de família contém instruções para uma missão.',
    'A televisão transmite uma reunião familiar do futuro.',
    'Um presente esquecido começa a fazer exigências.',
    'A garagem revela um veículo que ninguém comprou.',
    'Todos precisam fingir normalidade durante uma visita importante.',
    'Um campeonato de tarefas domésticas sai completamente do controle.',
    'A campainha anuncia um parente que ninguém consegue identificar.'
  ],
  absurdo: [
    'A segunda-feira pede desculpas e tenta virar sábado.',
    'Um guarda-chuva se recusa a abrir sem elogios.',
    'As cadeiras começam a trocar fofocas sobre quem sentou nelas.',
    'Um sanduíche exige ser tratado como celebridade.',
    'A rua inteira acorda andando para trás.',
    'O espelho começa a dar notas para as expressões das pessoas.',
    'Um botão vermelho aparece com a etiqueta "não aperte".',
    'O chão decide virar lava, mas só quando alguém reclama.',
    'Uma nuvem entra pela janela procurando emprego.',
    'O Wi-Fi ganha personalidade e escolhe seus usuários favoritos.',
    'As palavras começam a sair em balões de quadrinhos.',
    'Um dinossauro minúsculo vira síndico do prédio.'
  ],
  escola: [
    'A reunião começa normal até a pauta ganhar vida própria.',
    'Uma impressora só imprime previsões constrangedoras.',
    'O crachá de alguém troca de nome a cada minuto.',
    'A lousa escreve respostas antes das perguntas.',
    'O café da firma concede superpoderes muito específicos.',
    'Uma tarefa simples abre uma sala secreta no escritório.',
    'O trabalho em grupo precisa salvar o recreio.',
    'Uma planilha passa a julgar as decisões de todos.',
    'O alarme toca anunciando uma prova surpresa de coragem.',
    'Um professor substituto parece conhecer todos os segredos.',
    'O elevador do prédio só sobe para quem contar uma verdade.',
    'Uma apresentação trava exatamente no slide mais suspeito.'
  ],
  fantasia: [
    'Uma varinha quebrada escolhe o pior momento para funcionar.',
    'Um dragão aparece pedindo ajuda para escrever uma desculpa.',
    'A lua cai no quintal do grupo em tamanho de bola.',
    'Um armário passa a vender mapas de sonhos.',
    'Uma fada madrinha erra o endereço e se recusa a ir embora.',
    'O tapete da sala revela ser um transporte aposentado.',
    'Uma poção troca talentos entre todos por uma hora.',
    'A biblioteca empresta um livro que lê o leitor em voz alta.',
    'Um espelho mágico só responde com conselhos ruins.',
    'Uma espada lendária fica presa em um pão francês.',
    'O mercado do bairro aceita moedas de reinos esquecidos.',
    'Um fantasma educado pede autorização para assombrar a casa.'
  ]
};

const PARTY_STORY_PROMPTS = {
  aventura: [
    'Uma despedida de solteiro vira uma operação de resgate de dignidade.',
    'O grupo acorda com pulseiras VIP de um evento que ninguém lembra.'
  ],
  misterio: [
    'Uma mensagem enviada de madrugada compromete a versão oficial da noite.',
    'Todos juram que foram embora cedo, mas uma foto prova o contrário.'
  ],
  familia: [
    'Um churrasco entre adultos vira uma disputa política por causa da playlist.',
    'A noite de jogos revela alianças secretas entre casais e amigos.'
  ],
  absurdo: [
    'O boleto do mês começa a cobrar satisfações em voz alta.',
    'Um aplicativo de paquera passa a recomendar missões absurdas.'
  ],
  escola: [
    'O happy hour da firma vira uma auditoria emocional improvisada.',
    'Uma apresentação corporativa revela acidentalmente o grupo de fofocas.'
  ],
  fantasia: [
    'Uma fada oferece três desejos, mas cobra em parcelas.',
    'Um brinde mágico faz todos falarem a verdade por cinco minutos.'
  ]
};

const BASE_TWISTS = [
  'Inclua um segredo que só um personagem conhece.',
  'Faça parecer que alguém está mentindo.',
  'Adicione uma reviravolta engraçada.',
  'Use um objeto comum como se fosse muito importante.',
  'Termine sua frase criando um problema maior.',
  'Faça uma pergunta que deixe o próximo jogador em apuros.',
  'Mencione um lugar que não combina com a história.',
  'Transforme uma solução simples em algo complicado.'
];

const EXTRA_TWISTS = [
  'Faça sua frase parecer útil para quem sabe o segredo, mas confusa para o impostor.',
  'Inclua uma pista pequena, sem dizer a abertura diretamente.',
  'Crie uma consequência para a frase anterior.',
  'Use uma emoção exagerada de um personagem.',
  'Coloque um objeto suspeito no centro da cena.',
  'Mude o lugar da história sem explicar tudo.',
  'Faça alguém tomar uma decisão ruim por um bom motivo.',
  'Transforme um detalhe bobo em uma ameaça séria.',
  'Dê uma pista falsa para testar quem está prestando atenção.',
  'Inclua uma promessa que será difícil cumprir.',
  'Faça a próxima pessoa resolver um problema estranho.',
  'Termine com uma descoberta que muda o sentido da cena.'
];

const IMPOSTOR_HINTS = [
  'Você é o impostor. Não sabe o tema real. Finja entender e tente parecer natural.',
  'Você é o impostor. Alguém vai tentar te pegar. Conte algo plausível e observe pistas.',
  'Você é o impostor. Use detalhes genéricos sem parecer vago demais.',
  'Você é o impostor. Tente acompanhar o clima da história sem repetir demais.'
];

const state = {
  players: [],
  selectedCategories: STORY_CATEGORIES.map(category => category.id),
  rounds: 3,
  currentRound: 1,
  currentPlayerIndex: 0,
  roleRevealIndex: 0,
  roleVisible: false,
  rolePreparing: false,
  voteRevealIndex: 0,
  voteVisible: false,
  impostorIndex: -1,
  impostorIndexes: [],
  impostorCount: 1,
  gameVariant: 'classic',
  contentMode: 'family',
  prompt: '',
  category: null,
  twist: '',
  scores: {},
  votes: {},
  voteResult: null,
  pendingScore: null,
  guessOptions: [],
  customContent: { prompts: {}, twists: [] },
  extensionPacks: [],
  phase: 'setup',
  timer: null,
  timerLeft: 60,
  timerDuration: 60,
  storyLog: [],
  fullStoryLog: [],
  leaderboardRecorded: false,
  multidevice: {
    peer: null,
    connections: [],
    guestConnection: null,
    guestRolePayload: null,
    guestVoteSubmitted: false,
    guestStorySubmittedFor: '',
    guestStoryTurnKey: '',
    sessionCode: '',
    isHost: false,
    isGuest: false
  }
};

const musicState = {
  audio: null,
  unlocked: false,
  currentSrc: '',
  currentKind: '',
  fadeTimer: null
};

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function text(selector, value) {
  const el = $(selector);
  if (el) el.textContent = value;
}

function html(selector, value) {
  const el = $(selector);
  if (el) el.innerHTML = value;
}

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function safeJsonParse(value, fallback) {
  try {
    return JSON.parse(value) || fallback;
  } catch (error) {
    return fallback;
  }
}

function normalizeCustomContent(content = {}) {
  const prompts = {};
  STORY_CATEGORIES.forEach(category => {
    const values = Array.isArray(content.prompts?.[category.id]) ? content.prompts[category.id] : [];
    prompts[category.id] = values.map(item => String(item).trim()).filter(Boolean).slice(0, 50);
  });
  const twists = Array.isArray(content.twists)
    ? content.twists.map(item => String(item).trim()).filter(Boolean).slice(0, 50)
    : [];
  return { prompts, twists };
}

function normalizePackId(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64);
}

function normalizeExtensionPack(pack = {}) {
  const rawContent = pack.content && typeof pack.content === 'object' ? pack.content : pack;
  const content = normalizeCustomContent(rawContent);
  const hasContent = Object.values(content.prompts).some(items => items.length) || content.twists.length;
  if (!hasContent) return null;
  const baseId = normalizePackId(pack.id || pack.slug || pack.name) || `pack-${Date.now()}`;
  return {
    id: baseId,
    name: String(pack.name || baseId).trim().slice(0, 80),
    description: String(pack.description || '').trim().slice(0, 180),
    prompts: content.prompts,
    twists: content.twists
  };
}

function normalizeExtensionPacks(packs = []) {
  const seen = new Set();
  return (Array.isArray(packs) ? packs : [])
    .map(normalizeExtensionPack)
    .filter(Boolean)
    .filter(pack => {
      if (seen.has(pack.id)) return false;
      seen.add(pack.id);
      return true;
    })
    .slice(0, 30);
}

function loadCustomContent() {
  return normalizeCustomContent(safeJsonParse(localStorage.getItem(CUSTOM_CONTENT_KEY), {}));
}

function saveCustomContent() {
  localStorage.setItem(CUSTOM_CONTENT_KEY, JSON.stringify(normalizeCustomContent(state.customContent)));
}

function loadExtensionPacks() {
  return normalizeExtensionPacks(safeJsonParse(localStorage.getItem(EXTENSION_PACKS_KEY), []));
}

function saveExtensionPacks() {
  localStorage.setItem(EXTENSION_PACKS_KEY, JSON.stringify(normalizeExtensionPacks(state.extensionPacks)));
}

function getPackContent(packs = state.extensionPacks) {
  const content = normalizeCustomContent();
  normalizeExtensionPacks(packs).forEach(pack => {
    STORY_CATEGORIES.forEach(category => {
      content.prompts[category.id] = [
        ...(content.prompts[category.id] || []),
        ...(pack.prompts[category.id] || [])
      ].slice(-120);
    });
    content.twists = [...content.twists, ...pack.twists].slice(-120);
  });
  return content;
}

function mergeCustomContent(categories, customContent = { prompts: {}, twists: [] }, contentMode = 'family', packContent = { prompts: {}, twists: [] }) {
  const normalized = normalizeCustomContent(customContent);
  const normalizedPackContent = normalizeCustomContent(packContent);
  return categories.map(category => ({
    ...category,
    prompts: [
      ...category.prompts,
      ...(EXTRA_STORY_PROMPTS[category.id] || []),
      ...(contentMode === 'party' ? PARTY_STORY_PROMPTS[category.id] || [] : []),
      ...(normalizedPackContent.prompts[category.id] || []),
      ...(normalized.prompts[category.id] || [])
    ]
  }));
}

function getStoryCategories() {
  return mergeCustomContent(STORY_CATEGORIES, state.customContent, state.contentMode, getPackContent());
}

function getTwists() {
  return [
    ...BASE_TWISTS,
    ...EXTRA_TWISTS,
    ...getPackContent().twists,
    ...normalizeCustomContent(state.customContent).twists
  ];
}

function normalizeImpostorCount(requestedCount, playerCount) {
  if (playerCount < 7) return 1;
  return Number(requestedCount) === 2 ? 2 : 1;
}

function pickImpostorIndexes(playerCount, requestedCount) {
  const count = normalizeImpostorCount(requestedCount, playerCount);
  return shuffle(Array.from({ length: playerCount }, (_, index) => index)).slice(0, count).sort((a, b) => a - b);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function loadSettings() {
  return {
    timerDur: 60,
    prepareDur: 3,
    soundEnabled: true,
    navigationSoundEnabled: true,
    gameroomMusicEnabled: true,
    gameplayMusicEnabled: true,
    musicVolume: 32,
    correctPoints: 6,
    impostorPoints: 12,
    shuffleEnabled: true,
    theme: 'cosmic',
    language: 'pt',
    ...safeJsonParse(localStorage.getItem(SETTINGS_KEY), {})
  };
}

function collectSettings() {
  return {
    timerDur: Number($('#timer-slider')?.value) || 60,
    prepareDur: Number($('#prepare-timer-slider')?.value) || 3,
    correctPoints: Number($('#correct-points-input')?.value) || 6,
    impostorPoints: Number($('#wrong-points-input')?.value) || 12,
    soundEnabled: Boolean($('#toggle-sound')?.checked),
    navigationSoundEnabled: Boolean($('#toggle-navigation-sound')?.checked),
    gameroomMusicEnabled: Boolean($('#toggle-gameroom-music')?.checked),
    gameplayMusicEnabled: Boolean($('#toggle-gameplay-music')?.checked),
    musicVolume: Number($('#music-volume-slider')?.value) || 0,
    shuffleEnabled: Boolean($('#toggle-shuffle')?.checked),
    theme: $('#theme-select')?.value || 'cosmic',
    language: $('#language-select')?.value || 'pt'
  };
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(collectSettings()));
}

function initializeSettings() {
  const settings = loadSettings();
  $('#timer-slider').value = settings.timerDur;
  $('#prepare-timer-slider').value = settings.prepareDur;
  $('#toggle-sound').checked = settings.soundEnabled;
  $('#toggle-navigation-sound').checked = settings.navigationSoundEnabled;
  $('#toggle-gameroom-music').checked = settings.gameroomMusicEnabled;
  $('#toggle-gameplay-music').checked = settings.gameplayMusicEnabled;
  if ($('#music-volume-slider')) $('#music-volume-slider').value = settings.musicVolume;
  $('#correct-points-input').value = settings.correctPoints;
  $('#wrong-points-input').value = settings.impostorPoints;
  $('#toggle-shuffle').checked = settings.shuffleEnabled;
  $('#theme-select').value = settings.theme;
  $('#language-select').value = settings.language;
  updateTimerLabels();
  applyTheme(settings.theme);
  applyLanguage(settings.language);
}

function updateTimerLabels() {
  text('#timer-val', `${$('#timer-slider')?.value || 60}s`);
  text('#prepare-timer-val', `${$('#prepare-timer-slider')?.value || 3}s`);
  text('#music-volume-val', `${$('#music-volume-slider')?.value || loadSettings().musicVolume || 0}%`);
}

function applyTheme(theme = 'cosmic') {
  const nextTheme = AVAILABLE_THEMES.includes(theme) ? theme : 'cosmic';
  document.body.classList.remove(...AVAILABLE_THEMES.map(item => `theme-${item}`));
  document.body.classList.add(`theme-${nextTheme}`);
  updateBackgroundMusic();
}

function getLanguage(language = 'pt') {
  return SUPPORTED_LANGUAGES.includes(language) ? language : 'pt';
}

function getCurrentLanguageSetting() {
  if (typeof localStorage === 'undefined') return 'pt';
  return loadSettings().language;
}

function translate(key, language = getCurrentLanguageSetting()) {
  const lang = getLanguage(language);
  return I18N[lang]?.[key] || I18N.pt[key] || '';
}

function formatMessage(key, values = {}, language = getCurrentLanguageSetting()) {
  return translate(key, language).replace(/\{(\w+)\}/g, (_, name) => values[name] ?? '');
}

function applyLanguage(language = getCurrentLanguageSetting()) {
  const lang = getLanguage(language);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
  $$('[data-i18n]').forEach(el => {
    const value = translate(el.dataset.i18n, lang);
    if (value) el.textContent = value;
  });
  $$('[data-i18n-placeholder]').forEach(el => {
    const value = translate(el.dataset.i18nPlaceholder, lang);
    if (value) el.placeholder = value;
  });
  $$('[data-i18n-aria-label]').forEach(el => {
    const value = translate(el.dataset.i18nAriaLabel, lang);
    if (value) el.setAttribute('aria-label', value);
  });
  $('#fullscreen-toggle')?.setAttribute('title', lang === 'pt' ? 'Tela cheia' : lang === 'es' ? 'Pantalla completa' : 'Fullscreen');
}

function getCurrentTheme() {
  return AVAILABLE_THEMES.find(theme => document.body.classList.contains(`theme-${theme}`)) || 'cosmic';
}

function isGameplayScreen() {
  return ['game', 'score', 'final'].includes(document.body.dataset.activeScreen);
}

function musicEnabled(kind) {
  return kind === 'gameplay'
    ? Boolean($('#toggle-gameplay-music')?.checked)
    : Boolean($('#toggle-gameroom-music')?.checked);
}

function ensureAudio() {
  if (musicState.audio) return musicState.audio;
  musicState.audio = new Audio();
  musicState.audio.loop = true;
  musicState.audio.volume = getMusicVolume();
  return musicState.audio;
}

function normalizeVolume(value) {
  return Math.max(0, Math.min(1, Number(value) / 100 || 0));
}

function getMusicVolume() {
  return normalizeVolume($('#music-volume-slider')?.value ?? loadSettings().musicVolume);
}

function fadeAudioVolume(audio, targetVolume, duration = 360, onDone = null) {
  clearInterval(musicState.fadeTimer);
  if (!audio || reducedMotion() || duration <= 0) {
    if (audio) audio.volume = targetVolume;
    onDone?.();
    return;
  }
  const startVolume = audio.volume;
  const startedAt = performance.now();
  musicState.fadeTimer = setInterval(() => {
    const progress = Math.min(1, (performance.now() - startedAt) / duration);
    audio.volume = startVolume + (targetVolume - startVolume) * progress;
    if (progress >= 1) {
      clearInterval(musicState.fadeTimer);
      musicState.fadeTimer = null;
      onDone?.();
    }
  }, 32);
}

function updateBackgroundMusic(options = {}) {
  if (options.unlock) musicState.unlocked = true;
  const theme = getCurrentTheme();
  const kind = isGameplayScreen() ? 'gameplay' : 'gameroom';
  const prefix = THEME_MUSIC_PREFIX[theme];
  const src = THEMES_WITH_MUSIC.includes(theme) && prefix ? `${MUSIC_ASSET_BASE}/${prefix}_${kind}.mp3` : '';
  if (!src || !musicEnabled(kind)) {
    if (musicState.audio) fadeAudioVolume(musicState.audio, 0, 260, () => musicState.audio.pause());
    return;
  }
  const audio = ensureAudio();
  if (musicState.currentSrc !== src) {
    const previousVolume = audio.volume;
    audio.pause();
    audio.volume = 0;
    audio.src = src;
    musicState.currentSrc = src;
    musicState.currentKind = kind;
    if (!musicState.unlocked) audio.volume = previousVolume;
  }
  const targetVolume = getMusicVolume();
  if (musicState.unlocked) {
    audio.play()
      .then(() => fadeAudioVolume(audio, targetVolume))
      .catch(() => {});
  } else {
    audio.volume = targetVolume;
  }
}

function beep(freq = 440, duration = 0.08) {
  if (!$('#toggle-sound')?.checked) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.frequency.value = freq;
  gain.gain.value = 0.04;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + duration);
}

function showNotif(message, color = 'var(--accent3)', textColor = 'var(--notif-text)') {
  const el = $('#notif');
  if (!el) return;
  el.textContent = message;
  el.style.background = color;
  el.style.color = textColor;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2200);
}

function reducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

function haptic(pattern = 18) {
  if (!reducedMotion()) navigator.vibrate?.(pattern);
}

function launchConfetti() {
  if (reducedMotion()) return;
  const colors = ['var(--accent1)', 'var(--accent2)', 'var(--accent3)', 'var(--accent4)', 'var(--accent5)'];
  for (let i = 0; i < 34; i += 1) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = '-12px';
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty('--dur', `${Math.random() * 1.4 + 1.8}s`);
    piece.style.setProperty('--del2', `${Math.random() * 0.25}s`);
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3600);
  }
}

function goTo(screen) {
  $$('.screen').forEach(el => el.classList.remove('active'));
  $(`#screen-${screen}`)?.classList.add('active');
  document.body.dataset.activeScreen = screen;
  renderScreen(screen);
  applyLanguage();
  updateBackgroundMusic();
}

function renderSetupScreen() {
  text('#screen-setup .page-title', translate('setup.title'));
  const setup = $('#screen-setup .setup-grid');
  if (!setup) return;
  const showRulesNudge = localStorage.getItem(SEEN_RULES_KEY) !== '1';
  setup.innerHTML = `
    <div class="setup-column setup-column-left">
      ${showRulesNudge ? `
      <div class="card mb rules-nudge">
        <h2 class="card-title card-title-sm">${translate('setup.beforeTitle')}</h2>
        <div class="how-to-list">
          <div class="media-row media-row-start"><div class="emoji-lg emoji-fixed">🤫</div><div class="text-sm">${translate('setup.beforeSecret')}</div></div>
          <div class="media-row media-row-start"><div class="emoji-lg emoji-fixed">🕶️</div><div class="text-sm">${translate('setup.beforeImpostor')}</div></div>
          <div class="media-row media-row-start"><div class="emoji-lg emoji-fixed">📖</div><div class="text-sm">${translate('setup.beforeStory')}</div></div>
        </div>
        <button class="btn btn-ghost btn-block mt" data-action="dismiss-rules-nudge">${translate('setup.dismissRules')}</button>
      </div>` : ''}
      <div class="card mb">
        <h2 class="card-title">${translate('setup.playersTitle')}</h2>
        <div id="ffa-players" class="flex-col mb"></div>
        <div class="flex-row setup-player-form">
          <input class="inp" id="inp-ffa" placeholder="${translate('setup.playerPlaceholder')}" data-enter-submit="ffa">
          <button class="btn btn-secondary btn-sm btn-nowrap" data-action="add-player">${translate('common.add')}</button>
        </div>
        <div class="helper-box mt" id="player-count-helper">${translate('setup.playerHelper')}</div>
      </div>
      <div class="card mb">
        <h2 class="card-title">${translate('setup.roundsTitle')}</h2>
        <div class="mode-grid mb">
          <div class="mode-card ${state.gameVariant === 'classic' ? 'selected' : ''}" data-variant="classic">
            <div class="mode-icon">🎭</div>
            <div class="mode-name">${translate('setup.classicName')}</div>
            <div class="mode-desc">${translate('setup.classicDesc')}</div>
          </div>
          <div class="mode-card ${state.gameVariant === 'lightning' ? 'selected' : ''}" data-variant="lightning">
            <div class="mode-icon">⚡</div>
            <div class="mode-name">${translate('setup.lightningName')}</div>
            <div class="mode-desc">${translate('setup.lightningDesc')}</div>
          </div>
        </div>
        <div class="toggle-wrap toggle-wrap-last">
          <div>
            <div class="toggle-label">${translate('setup.roundsLabel')}</div>
            <div class="toggle-sub">${state.gameVariant === 'lightning' ? translate('setup.roundsLightningSub') : translate('setup.roundsClassicSub')}</div>
          </div>
          <div class="range-wrap range-wrap-fixed">
            <input type="range" class="range-inp" id="rounds-slider" min="1" max="7" value="${state.gameVariant === 'lightning' ? 1 : state.rounds}" ${state.gameVariant === 'lightning' ? 'disabled' : ''}>
            <div class="range-val" id="rounds-val">${state.gameVariant === 'lightning' ? 1 : state.rounds}</div>
          </div>
        </div>
        <div class="toggle-wrap toggle-wrap-last">
          <div>
            <div class="toggle-label">${translate('setup.impostorsLabel')}</div>
            <div class="toggle-sub">${translate('setup.impostorsSub')}</div>
          </div>
          <select class="inp points-input" id="impostor-count-select">
            <option value="1" ${state.impostorCount === 1 ? 'selected' : ''}>${translate('setup.oneImpostor')}</option>
            <option value="2" ${state.impostorCount === 2 ? 'selected' : ''}>${translate('setup.twoImpostors')}</option>
          </select>
        </div>
        <div class="toggle-wrap toggle-wrap-last">
          <div>
            <div class="toggle-label">${translate('setup.contentModeLabel')}</div>
            <div class="toggle-sub">${translate('setup.contentModeSub')}</div>
          </div>
          <select class="inp points-input" id="content-mode-select">
            <option value="family" ${state.contentMode === 'family' ? 'selected' : ''}>${translate('setup.familyMode')}</option>
            <option value="party" ${state.contentMode === 'party' ? 'selected' : ''}>${translate('setup.partyMode')}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="setup-column setup-column-right">
      <div class="card mb">
        <h2 class="card-title">${translate('setup.themesTitle')}</h2>
        <div class="category-grid" id="category-selection"></div>
        <div id="diff-word-count" class="text-meta center mt"></div>
      </div>
      <div class="card mb">
        <h2 class="card-title">${translate('setup.howTitle')}</h2>
        <div class="how-to-list">
          <div class="media-row media-row-start"><div class="emoji-lg emoji-fixed">🙈</div><div class="text-sm">${translate('setup.howRole')}</div></div>
          <div class="media-row media-row-start"><div class="emoji-lg emoji-fixed">📖</div><div class="text-sm">${translate('setup.howStory')}</div></div>
          <div class="media-row media-row-start"><div class="emoji-lg emoji-fixed">🗳️</div><div class="text-sm">${translate('setup.howVote')}</div></div>
          <div class="media-row media-row-start"><div class="emoji-lg emoji-fixed">⚡</div><div class="text-sm">${translate('setup.howVariant')}</div></div>
        </div>
      </div>
    </div>
    <button class="btn btn-primary btn-lg btn-block mb-lg setup-cta" data-action="start-game">${translate('setup.startStory')}</button>
  `;
  renderPlayers();
  renderCategories();
  updateSetupReadiness();
}

function renderRulesScreen() {
  const screen = $('#screen-wordbank .page-shell');
  if (!screen) return;
  const categories = getStoryCategories();
  const customContent = normalizeCustomContent(state.customContent);
  const packs = normalizeExtensionPacks(state.extensionPacks);
  const packContent = getPackContent(packs);
  const packPromptCount = Object.values(packContent.prompts).flat().length;
  screen.innerHTML = `
    <header class="page-header page-header-tight">
      <button class="btn btn-ghost btn-sm" data-nav="home">${translate('common.back')}</button>
      <h1 class="page-title">${translate('rules.title')}</h1>
    </header>
    <div class="wordbank-layout">
      <div class="card">
        <h2 class="card-title">🎭 CrazyStory</h2>
        <div class="how-to-list">
          <div class="media-row media-row-start"><div class="emoji-lg emoji-fixed">1️⃣</div><div class="text-sm">${translate('rules.step1')}</div></div>
          <div class="media-row media-row-start"><div class="emoji-lg emoji-fixed">2️⃣</div><div class="text-sm">${translate('rules.step2')}</div></div>
          <div class="media-row media-row-start"><div class="emoji-lg emoji-fixed">3️⃣</div><div class="text-sm">${translate('rules.step3')}</div></div>
          <div class="media-row media-row-start"><div class="emoji-lg emoji-fixed">4️⃣</div><div class="text-sm">${translate('rules.step4')}</div></div>
        </div>
        <div class="score-explanation mt">
          <div><strong>${translate('rules.scoreRule')}</strong> ${translate('rules.scoreRuleText')}</div>
          <div><strong>${translate('rules.impostorRule')}</strong> ${translate('rules.impostorRuleText')}</div>
          <div><strong>${translate('rules.multideviceRule')}</strong> ${translate('rules.multideviceRuleText')}</div>
        </div>
      </div>
      <div class="card">
        <h2 class="card-title card-title-sm">${translate('rules.availableThemes')}</h2>
        <div class="category-grid">
          ${categories.map(category => `<div class="category-card selected"><div class="category-icon">${category.icon}</div><div class="category-name">${category.name}</div><div class="category-count">${formatMessage('rules.openingsCount', { count: category.prompts.length })}</div></div>`).join('')}
        </div>
      </div>
      <div class="card">
        <h2 class="card-title card-title-sm">${translate('rules.customContent')}</h2>
        <div class="flex-col">
          <select class="inp" id="custom-prompt-category">
            ${categories.map(category => `<option value="${category.id}">${category.icon} ${category.name}</option>`).join('')}
          </select>
          <textarea class="inp custom-content-input" id="custom-prompt-text" maxlength="180" rows="3" placeholder="${translate('rules.promptPlaceholder')}"></textarea>
          <button class="btn btn-secondary btn-block" data-action="add-custom-prompt">${translate('rules.addPrompt')}</button>
          <textarea class="inp custom-content-input" id="custom-twist-text" maxlength="160" rows="2" placeholder="${translate('rules.twistPlaceholder')}"></textarea>
          <button class="btn btn-secondary btn-block" data-action="add-custom-twist">${translate('rules.addTwist')}</button>
          <div class="helper-box">${formatMessage('rules.customSummary', { prompts: Object.values(customContent.prompts).flat().length, twists: customContent.twists.length })}</div>
          <button class="btn btn-ghost btn-block" data-action="reset-custom-content">${translate('rules.clearCustom')}</button>
        </div>
      </div>
      <div class="card">
        <h2 class="card-title card-title-sm">${translate('rules.packTitle')}</h2>
        <div class="flex-col">
          <div class="helper-box">${formatMessage('rules.packSummary', { packs: packs.length, prompts: packPromptCount, twists: packContent.twists.length })}</div>
          <input type="file" id="extension-pack-input" accept="application/json,.json" hidden>
          <button class="btn btn-secondary btn-block" data-action="select-extension-pack">${translate('rules.importPack')}</button>
          <div class="extension-pack-list">
            ${packs.length
              ? packs.map(pack => `
                <div class="extension-pack-row">
                  <div>
                    <strong>${escapeHtml(pack.name)}</strong>
                    <span>${escapeHtml(pack.description || translate('rules.localPack'))}</span>
                  </div>
                  <button class="btn btn-ghost btn-sm" data-action="remove-extension-pack" data-pack-id="${escapeHtml(pack.id)}">${translate('rules.removePack')}</button>
                </div>
              `).join('')
              : `<div class="text-sm text-muted">${translate('rules.noPacks')}</div>`}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderMultiDeviceInfo() {
  const screen = $('#screen-multidevice .page-shell');
  if (!screen) return;
  if (getCodeFromLocation() && !state.multidevice.isHost) state.multidevice.isGuest = true;
  const connected = state.multidevice.connections.filter(conn => conn.open).length;
  screen.innerHTML = `
    <header class="page-header">
      <button class="btn btn-ghost btn-sm" data-nav="home">${translate('common.back')}</button>
      <h1 class="page-title">${translate('multiDevice.title')}</h1>
    </header>
    <div class="card multidevice-choice-card">
      <h2 class="card-title">${translate('multiDevice.chooseTitle')}</h2>
      <p class="text-sm mb">${translate('multiDevice.choiceSubtitle')}</p>
      <div class="multidevice-choice-actions">
        <button class="btn btn-primary btn-lg btn-block" data-action="create-multidevice-host">${translate('multiDevice.chooseHost')}</button>
        <button class="btn btn-secondary btn-lg btn-block" data-action="show-multidevice-join">${translate('multiDevice.chooseJoin')}</button>
      </div>
    </div>
    <div class="multidevice-grid">
      <div class="card multidevice-card ${state.multidevice.isHost ? '' : 'hidden'}" id="multidevice-host-panel">
        <h2 class="card-title card-title-sm">📡 Host</h2>
        <div class="text-strong text-sm-title" id="multidevice-host-status">${state.multidevice.sessionCode ? translate('multiDevice.sessionOpen') : translate('multiDevice.readyToOpen')}</div>
        <div class="qr-frame" id="multidevice-qr"></div>
        <div class="copy-row">
          <input class="inp mono-input" id="multidevice-link" readonly value="${getMultideviceLink(state.multidevice.sessionCode)}">
          <button class="btn btn-ghost btn-sm btn-nowrap" data-action="copy-multidevice-link">${translate('common.copy')}</button>
        </div>
        <div class="helper-box">${translate('multiDevice.sessionCode')} <strong id="multidevice-session-code">${state.multidevice.sessionCode || '---'}</strong></div>
        <div class="text-meta" id="multidevice-guest-count">${formatMessage('multiDevice.connectedCount', { count: connected })}</div>
        <button class="btn btn-secondary btn-block" data-nav="setup">${translate('multiDevice.continueSetup')}</button>
      </div>
      <div class="card multidevice-card ${state.multidevice.isGuest ? '' : 'hidden'}" id="multidevice-join-card">
        <h2 class="card-title card-title-sm">${translate('multiDevice.joinAsGuestTitle')}</h2>
        <label class="toggle-label" for="multidevice-join-code">${translate('multiDevice.joinCodeLabel')}</label>
        <input class="inp mt-xs mb-sm" id="multidevice-join-code" placeholder="${translate('multiDevice.joinCodePlaceholder')}" value="${getCodeFromLocation()}">
        <button class="btn btn-primary btn-lg btn-block" data-action="join-multidevice-session">${translate('multiDevice.joinSession')}</button>
        <div class="helper-box mt" id="multidevice-join-status">${translate('multiDevice.joinHelp')}</div>
      </div>
    </div>
  `;
  renderMultideviceQr();
}

function getCodeFromLocation() {
  if (typeof window === 'undefined') return '';
  return new URLSearchParams(window.location.search).get('room') || '';
}

function getMultideviceLink(code) {
  if (!code || typeof window === 'undefined') return '';
  const url = new URL(window.location.href);
  url.searchParams.set('room', code);
  return url.href;
}

function parseMultideviceCode(value = '') {
  const raw = String(value).trim();
  try {
    const url = new URL(raw);
    return (url.searchParams.get('room') || '').trim().toUpperCase();
  } catch (error) {
    return raw.replace(/^crazystory-/i, '').trim().toUpperCase();
  }
}

function generateMultideviceCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

function getPublicCurrentPlayer(gameState = state) {
  if (gameState.phase === 'roles') return gameState.players[gameState.roleRevealIndex] || '';
  if (gameState.phase === 'vote') return gameState.players[gameState.voteRevealIndex] || '';
  if (gameState.phase === 'impostor-guess') return gameState.voteResult?.caughtImpostor || gameState.voteResult?.impostor || '';
  return gameState.players[gameState.currentPlayerIndex] || '';
}

function createMultidevicePayload(gameState = state) {
  return {
    type: 'crazystory-state',
    version: 1,
    phase: gameState.phase,
    round: gameState.currentRound,
    rounds: gameState.rounds,
    currentPlayer: getPublicCurrentPlayer(gameState),
    players: [...gameState.players],
    playersDone: gameState.phase === 'vote' ? gameState.voteRevealIndex : gameState.currentPlayerIndex,
    playerTotal: gameState.players.length,
    timerLeft: gameState.timerLeft,
    timerDuration: gameState.timerDuration,
    storyOrder: [...gameState.storyLog],
    categoryIcon: gameState.category?.icon || '📖',
    guessOptions: gameState.phase === 'impostor-guess'
      ? (gameState.guessOptions || []).map(category => ({ id: category.id, name: category.name, icon: category.icon }))
      : [],
    safeMessage: getMultideviceSafeMessage(gameState)
  };
}

function createMultideviceRolePayload(gameState = state, playerIndex = -1) {
  const index = Number(playerIndex);
  const player = gameState.players[index];
  if (!player || !gameState.category) {
    return {
      type: 'crazystory-role',
      version: 1,
      playerIndex: index,
      player: player || '',
      ready: false,
      message: 'Aguardando início da partida'
    };
  }
  const isImpostor = gameState.impostorIndexes.includes(index);
  return {
    type: 'crazystory-role',
    version: 1,
    playerIndex: index,
    player,
    ready: true,
    isImpostor,
    roleTitle: isImpostor ? 'IMPOSTOR' : gameState.category.name,
    roleIcon: isImpostor ? '🕶️' : gameState.category.icon,
    prompt: isImpostor ? '' : gameState.prompt,
    twist: isImpostor ? '' : gameState.twist,
    hint: isImpostor ? IMPOSTOR_HINTS[0] : 'Use sua abertura e dica sem ler em voz alta.'
  };
}

function getMultideviceSafeMessage(gameState = state) {
  if (gameState.phase === 'roles') return 'Revelação secreta no host';
  if (gameState.phase === 'story') return 'História em andamento';
  if (gameState.phase === 'vote') return 'Votação secreta no host';
  if (gameState.phase === 'impostor-guess') return 'Defesa do impostor no host';
  if (gameState.phase === 'score') return 'Placar da rodada';
  return 'Aguardando partida';
}

function renderMultideviceQr() {
  const box = $('#multidevice-qr');
  const link = getMultideviceLink(state.multidevice.sessionCode);
  if (!box || !link) return;
  box.innerHTML = '';
  if (typeof window !== 'undefined' && window.QRCode) {
    new window.QRCode(box, { text: link, width: 180, height: 180 });
  } else {
    box.textContent = state.multidevice.sessionCode;
  }
}

function updateMultideviceHostPanel() {
  text('#multidevice-session-code', state.multidevice.sessionCode || '---');
  text('#multidevice-host-status', state.multidevice.sessionCode ? translate('multiDevice.sessionOpen') : translate('multiDevice.readyToOpen'));
  text('#multidevice-guest-count', formatMessage('multiDevice.connectedCount', {
    count: state.multidevice.connections.filter(conn => conn.open).length
  }));
  const link = $('#multidevice-link');
  if (link) link.value = getMultideviceLink(state.multidevice.sessionCode);
  renderMultideviceQr();
}

function createMultideviceHost() {
  if (typeof window === 'undefined' || !window.Peer) {
    showNotif(translate('admin.peerUnavailable'), 'var(--accent2)', 'var(--text)');
    return;
  }
  state.multidevice.isHost = true;
  state.multidevice.isGuest = false;
  state.multidevice.sessionCode = generateMultideviceCode();
  state.multidevice.connections = [];
  renderMultiDeviceInfo();
  const peerId = `crazystory-${state.multidevice.sessionCode}`;
  state.multidevice.peer?.destroy?.();
  state.multidevice.peer = new window.Peer(peerId);
  state.multidevice.peer.on('open', updateMultideviceHostPanel);
  state.multidevice.peer.on('connection', conn => {
    state.multidevice.connections.push(conn);
    conn.on('open', () => {
      conn.send(createMultidevicePayload());
      sendMultideviceRole(conn);
      updateMultideviceHostPanel();
    });
    conn.on('data', data => {
      if (data?.type === 'crazystory-assign-player') {
        conn.playerIndex = Number(data.playerIndex);
        sendMultideviceRole(conn);
      }
      if (data?.type === 'crazystory-vote') {
        submitRemoteVote(conn, Number(data.voteIndex));
      }
      if (data?.type === 'crazystory-story-beat') {
        submitRemoteStoryBeat(conn, data.text);
      }
      if (data?.type === 'crazystory-impostor-guess') {
        submitRemoteImpostorGuess(conn, data.categoryId);
      }
    });
    conn.on('close', updateMultideviceHostPanel);
    conn.on('error', updateMultideviceHostPanel);
  });
  state.multidevice.peer.on('error', () => showNotif(translate('admin.peerOpenFailed'), 'var(--accent2)', 'var(--text)'));
}

function showMultideviceJoin() {
  state.multidevice.isGuest = true;
  state.multidevice.isHost = false;
  renderMultiDeviceInfo();
}

function joinMultideviceSession() {
  if (typeof window === 'undefined' || !window.Peer) {
    showNotif(translate('admin.peerUnavailable'), 'var(--accent2)', 'var(--text)');
    return;
  }
  const code = parseMultideviceCode($('#multidevice-join-code')?.value || getCodeFromLocation());
  if (!code) return showNotif(translate('guest.sessionCodeRequired'), 'var(--accent2)', 'var(--text)');
  state.multidevice.peer?.destroy?.();
  state.multidevice.peer = new window.Peer();
  state.multidevice.peer.on('open', () => {
    const conn = state.multidevice.peer.connect(`crazystory-${code}`);
    state.multidevice.guestConnection = conn;
    conn.on('open', () => {
      text('#multidevice-join-status', translate('guest.joinConnected'));
      goTo('guest');
    });
    conn.on('data', data => {
      if (data?.type === 'crazystory-role') return renderGuestRolePayload(data);
      renderGuestPayload(data);
    });
    conn.on('close', () => text('#guest-connection-status', translate('guest.disconnected')));
    conn.on('error', () => text('#multidevice-join-status', translate('admin.connectionFailed')));
  });
}

function copyMultideviceLink() {
  const link = getMultideviceLink(state.multidevice.sessionCode);
  navigator.clipboard?.writeText(link);
  showNotif(translate('admin.linkCopied'));
}

function broadcastMultidevice() {
  if (!state.multidevice.isHost || !state.multidevice.connections.length) return;
  const payload = createMultidevicePayload();
  state.multidevice.connections
    .filter(conn => conn.open)
    .forEach(conn => {
      conn.send(payload);
      sendMultideviceRole(conn);
    });
}

function sendMultideviceRole(conn) {
  if (!conn?.open || !Number.isInteger(conn.playerIndex)) return;
  conn.send(createMultideviceRolePayload(state, conn.playerIndex));
}

function getGuestPhaseMessage(payload = {}) {
  return translate(`guest.phase.${payload.phase || 'waiting'}`) || translate('guest.phase.waiting');
}

function renderGuestPayload(payload) {
  if (!payload || payload.type !== 'crazystory-state') return;
  if (payload.phase !== 'vote') state.multidevice.guestVoteSubmitted = false;
  text('#guest-connection-status', translate('guest.connected'));
  $('#guest-connection-status')?.setAttribute('data-connection-status', 'connected');
  text('#guest-round-title', formatMessage('guest.roundOf', { round: payload.round, rounds: payload.rounds }));
  text('#guest-current-player-label', getGuestPhaseMessage(payload));
  text('#guest-current-player-name', payload.currentPlayer || '--');
  text('#guest-timer-num', payload.timerLeft ?? '--');
  const circle = $('#guest-timer-circle');
  if (circle) {
    const pct = Math.max(0, Number(payload.timerLeft) || 0) / Math.max(1, Number(payload.timerDuration) || 1);
    circle.style.strokeDashoffset = 427.3 - pct * 427.3;
  }
  const word = $('#guest-word-display');
  if (!state.multidevice.guestRolePayload && word) {
    word.textContent = payload.storyOrder?.length ? payload.storyOrder.join(' → ') : translate('guest.waitingStory');
    $('#guest-joke-card')?.classList.toggle('hidden', !payload.storyOrder?.length);
  }
  renderGuestPlayerPicker(payload.players || []);
  renderGuestStoryPanel(payload);
  renderGuestVotePanel(payload);
  renderGuestImpostorGuessPanel(payload);
}

function renderGuestPlayerPicker(players = []) {
  const shell = $('#screen-guest .guest-shell');
  if (!shell || state.multidevice.guestRolePayload || !players.length || $('#guest-player-picker')) return;
  const picker = document.createElement('div');
  picker.id = 'guest-player-picker';
  picker.className = 'card guest-player-picker';
  picker.innerHTML = `
    <h2 class="card-title card-title-sm">${translate('guest.choosePlayer')}</h2>
    <div class="game-actions-grid">
      ${players.map((player, index) => `<button class="btn btn-secondary btn-lg vote-option" data-action="assign-multidevice-player" data-index="${index}">${escapeHtml(player)}</button>`).join('')}
    </div>
  `;
  shell.appendChild(picker);
}

function assignMultidevicePlayer(index) {
  const conn = state.multidevice.guestConnection;
  if (!conn?.open) return showNotif(translate('guest.connectionNotOpen'), 'var(--accent2)', 'var(--text)');
  conn.send({ type: 'crazystory-assign-player', playerIndex: index });
  state.multidevice.guestVoteSubmitted = false;
  $('#guest-player-picker')?.remove();
  text('#guest-current-player-label', translate('guest.waitingRole'));
}

function renderGuestRolePayload(payload) {
  state.multidevice.guestRolePayload = payload;
  $('#guest-player-picker')?.remove();
  const card = $('#guest-joke-card');
  if (!card) return;
  card.classList.remove('hidden');
  const title = card.querySelector('.card-title');
  if (title) title.textContent = payload.ready ? formatMessage('guest.yourRole', { player: payload.player }) : translate('guest.waitingGame');
  const word = $('#guest-word-display');
  if (word) word.textContent = payload.ready ? `${payload.roleIcon} ${payload.roleTitle}` : translate('guest.waitingGame');
  const challenge = $('#guest-challenge-display');
  const challengeText = $('#guest-challenge-text');
  challenge?.classList.toggle('hidden', !payload.ready);
  if (challengeText) {
    challengeText.textContent = payload.isImpostor
      ? payload.hint
      : formatMessage('guest.openingAndHint', { prompt: payload.prompt, twist: payload.twist });
  }
}

function renderGuestStoryPanel(payload) {
  const shell = $('#screen-guest .guest-shell');
  $('#guest-story-panel')?.remove();
  const role = state.multidevice.guestRolePayload;
  if (!shell || payload.phase !== 'story' || !role?.ready || payload.currentPlayer !== role.player) return;
  const turnKey = `${payload.round}:${payload.currentPlayer}:${payload.playersDone}`;
  state.multidevice.guestStoryTurnKey = turnKey;
  const submitted = state.multidevice.guestStorySubmittedFor === turnKey;
  const panel = document.createElement('div');
  panel.id = 'guest-story-panel';
  panel.className = 'card guest-story-panel';
  panel.innerHTML = submitted
    ? `<h2 class="card-title card-title-sm">${translate('guest.storySentTitle')}</h2><p class="text-sm">${translate('guest.waitNextTurn')}</p>`
    : `
      <h2 class="card-title card-title-sm">${translate('guest.yourStoryTurn')}</h2>
      <p class="text-sm mb">${translate('guest.storyHelp')}</p>
      <textarea class="inp custom-content-input" id="guest-story-beat-input" maxlength="180" rows="3" placeholder="${translate('guest.storyPlaceholder')}"></textarea>
      <button class="btn btn-primary btn-lg btn-block mt" data-action="submit-multidevice-story">${translate('guest.sendStory')}</button>
    `;
  shell.appendChild(panel);
}

function submitMultideviceStory() {
  const conn = state.multidevice.guestConnection;
  if (!conn?.open) return showNotif(translate('guest.connectionNotOpen'), 'var(--accent2)', 'var(--text)');
  const textValue = $('#guest-story-beat-input')?.value.trim() || '';
  conn.send({ type: 'crazystory-story-beat', text: textValue });
  state.multidevice.guestStorySubmittedFor = state.multidevice.guestStoryTurnKey;
  $('#guest-story-panel')?.remove();
  const shell = $('#screen-guest .guest-shell');
  if (shell) {
    const panel = document.createElement('div');
    panel.id = 'guest-story-panel';
    panel.className = 'card guest-story-panel';
    panel.innerHTML = `<h2 class="card-title card-title-sm">${translate('guest.storySentTitle')}</h2><p class="text-sm">${translate('guest.waitHostAdvance')}</p>`;
    shell.appendChild(panel);
  }
}

function renderGuestVotePanel(payload) {
  const shell = $('#screen-guest .guest-shell');
  $('#guest-vote-panel')?.remove();
  if (!shell || payload.phase !== 'vote' || !state.multidevice.guestRolePayload?.ready) return;
  const panel = document.createElement('div');
  panel.id = 'guest-vote-panel';
  panel.className = 'card guest-vote-panel';
  panel.innerHTML = state.multidevice.guestVoteSubmitted
    ? `<h2 class="card-title card-title-sm">${translate('guest.voteSentTitle')}</h2><p class="text-sm">${translate('guest.waitVotes')}</p>`
    : `
      <h2 class="card-title card-title-sm">${translate('guest.secretVoteTitle')}</h2>
      <p class="text-sm mb">${translate('guest.secretVoteHelp')}</p>
      <div class="game-actions-grid">
        ${(payload.players || []).map((player, index) => `<button class="btn btn-secondary btn-lg vote-option" data-action="submit-multidevice-vote" data-index="${index}">${escapeHtml(player)}</button>`).join('')}
      </div>
    `;
  shell.appendChild(panel);
}

function submitMultideviceVote(index) {
  const conn = state.multidevice.guestConnection;
  if (!conn?.open) return showNotif(translate('guest.connectionNotOpen'), 'var(--accent2)', 'var(--text)');
  conn.send({ type: 'crazystory-vote', voteIndex: index });
  state.multidevice.guestVoteSubmitted = true;
  $('#guest-vote-panel')?.remove();
  const shell = $('#screen-guest .guest-shell');
  if (shell) {
    const panel = document.createElement('div');
    panel.id = 'guest-vote-panel';
    panel.className = 'card guest-vote-panel';
    panel.innerHTML = `<h2 class="card-title card-title-sm">${translate('guest.voteSentTitle')}</h2><p class="text-sm">${translate('guest.waitTally')}</p>`;
    shell.appendChild(panel);
  }
}

function renderGuestImpostorGuessPanel(payload) {
  const shell = $('#screen-guest .guest-shell');
  $('#guest-guess-panel')?.remove();
  const role = state.multidevice.guestRolePayload;
  if (!shell || payload.phase !== 'impostor-guess' || !role?.ready || !role.isImpostor || payload.currentPlayer !== role.player) return;
  const panel = document.createElement('div');
  panel.id = 'guest-guess-panel';
  panel.className = 'card guest-guess-panel';
  panel.innerHTML = `
    <h2 class="card-title card-title-sm">${translate('guest.lastChanceTitle')}</h2>
    <p class="text-sm mb">${translate('guest.guessThemeHelp')}</p>
    <div class="game-actions-grid">
      ${(payload.guessOptions || []).map(category => `<button class="btn btn-secondary btn-lg vote-option" data-action="submit-multidevice-guess" data-category-guess="${category.id}">${escapeHtml(category.icon)} ${escapeHtml(category.name)}</button>`).join('')}
    </div>
  `;
  shell.appendChild(panel);
}

function submitMultideviceGuess(categoryId) {
  const conn = state.multidevice.guestConnection;
  if (!conn?.open) return showNotif(translate('guest.connectionNotOpen'), 'var(--accent2)', 'var(--text)');
  conn.send({ type: 'crazystory-impostor-guess', categoryId });
  $('#guest-guess-panel')?.remove();
  const shell = $('#screen-guest .guest-shell');
  if (shell) {
    const panel = document.createElement('div');
    panel.id = 'guest-guess-panel';
    panel.className = 'card guest-guess-panel';
    panel.innerHTML = `<h2 class="card-title card-title-sm">${translate('guest.guessSentTitle')}</h2><p class="text-sm">${translate('guest.waitScore')}</p>`;
    shell.appendChild(panel);
  }
}

function renderPlayers() {
  const list = $('#ffa-players');
  if (!list) return;
  list.innerHTML = '';
  if (!state.players.length) {
    const empty = document.createElement('div');
    empty.className = 'helper-box';
    empty.textContent = 'Adicione pelo menos 3 jogadores para começar.';
    list.appendChild(empty);
    return;
  }
  state.players.forEach((player, index) => {
    const row = document.createElement('div');
    row.className = 'player-row';
    row.innerHTML = `
      <div class="player-avatar">${player.charAt(0).toUpperCase()}</div>
      <div class="player-name">${player}</div>
      <button class="btn btn-ghost btn-sm" data-action="remove-player" data-index="${index}">✕</button>
    `;
    list.appendChild(row);
  });
  updateSetupReadiness();
}

function renderCategories() {
  const grid = $('#category-selection');
  if (!grid) return;
  const categories = getStoryCategories();
  grid.innerHTML = categories.map(category => `
    <div class="category-card ${state.selectedCategories.includes(category.id) ? 'selected' : ''}" data-category="${category.id}">
      <div class="category-icon">${category.icon}</div>
      <div class="category-name">${category.name}</div>
      <div class="category-count">${formatMessage('rules.openingsCount', { count: category.prompts.length })}</div>
    </div>
  `).join('');
  text('#diff-word-count', formatMessage('setup.selectedThemes', { count: state.selectedCategories.length }));
  updateSetupReadiness();
}

function updateSetupReadiness() {
  const helper = $('#player-count-helper');
  const cta = $('[data-action="start-game"]');
  if (helper) {
    const missing = Math.max(0, 3 - state.players.length);
    helper.textContent = missing
      ? `💡 Adicione mais ${missing} jogador(es) para começar.`
      : `✅ ${state.players.length} jogadores prontos. Passe o dispositivo em segredo na revelação.`;
  }
  if (cta) {
    cta.disabled = state.players.length < 3;
    cta.textContent = state.players.length < 3 ? translate('setup.startNeedsPlayers') : translate('setup.startStory');
  }
}

function addPlayer() {
  const input = $('#inp-ffa');
  const name = input?.value.trim();
  if (!name) return;
  if (state.players.some(player => player.toLowerCase() === name.toLowerCase())) {
    showNotif(translate('admin.playerDuplicate'), 'var(--accent2)', 'var(--text)');
    return;
  }
  if (state.players.length >= 10) {
    showNotif(translate('admin.playerLimit'), 'var(--accent2)', 'var(--text)');
    return;
  }
  state.players.push(name);
  input.value = '';
  renderPlayers();
  saveQuickGameConfig();
}

function removePlayer(index) {
  state.players.splice(index, 1);
  renderPlayers();
  saveQuickGameConfig();
}

function toggleCategory(categoryId) {
  if (state.selectedCategories.includes(categoryId)) {
    if (state.selectedCategories.length === 1) {
      showNotif(translate('admin.keepOneTheme'), 'var(--accent2)', 'var(--text)');
      return;
    }
    state.selectedCategories = state.selectedCategories.filter(id => id !== categoryId);
  } else {
    state.selectedCategories.push(categoryId);
  }
  renderCategories();
}

function selectGameVariant(variant) {
  state.gameVariant = variant === 'lightning' ? 'lightning' : 'classic';
  if (state.gameVariant === 'lightning') state.rounds = 1;
  saveQuickGameConfig();
  renderSetupScreen();
}

function saveQuickGameConfig() {
  localStorage.setItem(QUICK_GAME_KEY, JSON.stringify({
    players: state.players,
    rounds: state.rounds,
    selectedCategories: state.selectedCategories,
    gameVariant: state.gameVariant,
    impostorCount: state.impostorCount,
    contentMode: state.contentMode
  }));
}

function loadQuickGameConfig() {
  const saved = safeJsonParse(localStorage.getItem(QUICK_GAME_KEY), null);
  if (!saved) return;
  state.players = Array.isArray(saved.players) ? saved.players.slice(0, 10) : state.players;
  state.rounds = Number(saved.rounds) || state.rounds;
  state.gameVariant = saved.gameVariant === 'lightning' ? 'lightning' : 'classic';
  state.impostorCount = Number(saved.impostorCount) === 2 ? 2 : 1;
  state.contentMode = saved.contentMode === 'party' ? 'party' : 'family';
  state.selectedCategories = Array.isArray(saved.selectedCategories) && saved.selectedCategories.length
    ? saved.selectedCategories
    : state.selectedCategories;
}

function startQuickGame() {
  if (state.players.length < 3) {
    state.players = ['Ana', 'Bia', 'Caio', 'Duda', 'Léo'];
  }
  state.rounds = state.gameVariant === 'lightning' ? 1 : state.rounds || 3;
  startGame();
}

function startGame() {
  const roundsSlider = $('#rounds-slider');
  if (roundsSlider) state.rounds = state.gameVariant === 'lightning' ? 1 : Number(roundsSlider.value) || 3;
  state.impostorCount = normalizeImpostorCount(Number($('#impostor-count-select')?.value) || state.impostorCount, state.players.length);
  if (state.players.length < 3) {
    showNotif(translate('admin.needPlayers'), 'var(--accent2)', 'var(--text)');
    return;
  }
  state.scores = Object.fromEntries(state.players.map(player => [player, 0]));
  state.currentRound = 1;
  state.currentPlayerIndex = 0;
  state.fullStoryLog = [];
  state.leaderboardRecorded = false;
  saveQuickGameConfig();
  prepareRound();
  goTo('game');
}

function prepareRound() {
  clearInterval(state.timer);
  const settings = loadSettings();
  state.timerDuration = state.gameVariant === 'lightning' ? Math.min(30, Number(settings.timerDur) || 60) : Number(settings.timerDur) || 60;
  state.timerLeft = state.timerDuration;
  state.roleRevealIndex = 0;
  state.roleVisible = false;
  state.rolePreparing = false;
  state.voteRevealIndex = 0;
  state.voteVisible = false;
  state.currentPlayerIndex = 0;
  state.votes = {};
  state.voteResult = null;
  state.pendingScore = null;
  state.guessOptions = [];
  state.storyLog = [];
  state.phase = 'roles';
  const categories = getStoryCategories();
  const categoryPool = categories.filter(category => state.selectedCategories.includes(category.id));
  state.category = pick(categoryPool.length ? categoryPool : categories);
  state.prompt = pick(state.category.prompts);
  state.twist = pick(getTwists());
  if (settings.shuffleEnabled) state.players = shuffle(state.players);
  state.impostorCount = normalizeImpostorCount(state.impostorCount, state.players.length);
  state.impostorIndexes = pickImpostorIndexes(state.players.length, state.impostorCount);
  state.impostorIndex = state.impostorIndexes[0] ?? -1;
}

function renderGameScreen() {
  if (state.phase === 'roles') return renderRoleReveal();
  if (state.phase === 'story') return renderStoryTurn();
  if (state.phase === 'vote') return renderVote();
  if (state.phase === 'impostor-guess') return renderImpostorGuess();
}

function renderRoleReveal() {
  const player = state.players[state.roleRevealIndex];
  const isImpostor = state.impostorIndexes.includes(state.roleRevealIndex);
  text('#round-display', formatMessage('game.roundOf', { round: state.currentRound, rounds: state.rounds }));
  renderMiniScore();
  text('#current-player-name', player || '--');
  text('#screen-game .cp-label', state.roleVisible ? translate('game.roleOwner') : translate('game.passDevice'));
  $('#memorize-state')?.classList.add('hidden');
  $('#playing-state')?.classList.add('hidden');
  const card = $('#preparing-state');
  card?.classList.remove('hidden');
  if (!card) return;
  if (state.rolePreparing) {
    card.innerHTML = `
      <div class="privacy-card">
        <div class="emoji-hero mb-sm">⏳</div>
        <h2 class="section-title section-title-light mb-xs">${player}</h2>
        <p class="text-sm mb">${translate('game.preparingReveal')}</p>
        <div class="countdown-wrap">
          <svg class="countdown-svg" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="6" />
            <circle id="role-countdown-circle" cx="40" cy="40" r="34" fill="none" stroke="#c77dff" stroke-width="6"
              stroke-linecap="round" stroke-dasharray="213.6" stroke-dashoffset="0" class="countdown-progress" />
          </svg>
          <div id="role-countdown-num" class="countdown-number">${Math.max(1, state.timerLeft)}</div>
        </div>
      </div>
    `;
    return;
  }
  if (!state.roleVisible) {
    card.innerHTML = `
      <div class="privacy-card">
        <div class="emoji-hero mb-sm">🙈</div>
        <h2 class="section-title section-title-light mb-xs">${player}</h2>
        <p class="text-sm mb">${translate('game.revealInstruction')}</p>
        <div class="role-progress">${formatMessage('game.progressOf', { current: state.roleRevealIndex + 1, total: state.players.length })}</div>
        <button class="btn btn-primary btn-lg btn-block" data-action="show-role">${translate('game.showMyRole')}</button>
      </div>
    `;
    return;
  }
  card.innerHTML = `
    <div class="secret-role-shell">
      <div class="emoji-hero mb-sm">${isImpostor ? '🕶️' : state.category.icon}</div>
      <h2 class="section-title section-title-light mb-xs">${player}</h2>
      <div class="word-card word-card-memorize my-lg secret-role-card">
        <div class="word-text word-text-memorize role-title">${isImpostor ? translate('game.impostorRole') : state.category.name}</div>
        <div class="challenge-text mt">${isImpostor ? pick(IMPOSTOR_HINTS) : `${translate('game.openingPrefix')} ${state.prompt}`}</div>
        ${!isImpostor ? `<div class="challenge-text mt">${translate('game.secretHintPrefix')} ${state.twist}</div>` : ''}
      </div>
      <div class="role-progress">${formatMessage('game.progressOf', { current: state.roleRevealIndex + 1, total: state.players.length })}</div>
      <button class="btn btn-primary btn-lg btn-block" data-action="next-role">${state.roleRevealIndex + 1 >= state.players.length ? translate('game.beginStory') : translate('game.hideAndPass')}</button>
    </div>
  `;
  broadcastMultidevice();
}

function showRole() {
  haptic(12);
  const prepareDur = Number(loadSettings().prepareDur) || 0;
  clearInterval(state.timer);
  if (prepareDur <= 0) {
    state.roleVisible = true;
    renderRoleReveal();
    return;
  }
  state.rolePreparing = true;
  state.timerLeft = prepareDur;
  renderRoleReveal();
  state.timer = setInterval(() => {
    state.timerLeft -= 1;
    const num = $('#role-countdown-num');
    const circle = $('#role-countdown-circle');
    if (num) num.textContent = Math.max(0, state.timerLeft);
    if (circle) circle.style.strokeDashoffset = 213.6 - (Math.max(0, state.timerLeft) / Math.max(1, prepareDur)) * 213.6;
    if (state.timerLeft <= 0) {
      clearInterval(state.timer);
      state.rolePreparing = false;
      state.roleVisible = true;
      renderRoleReveal();
    }
  }, 1000);
}

function nextRole() {
  state.roleRevealIndex += 1;
  state.roleVisible = false;
  state.rolePreparing = false;
  clearInterval(state.timer);
  if (state.roleRevealIndex >= state.players.length) {
    state.phase = 'story';
    state.currentPlayerIndex = 0;
    renderStoryTurn();
    return;
  }
  renderRoleReveal();
}

function renderStoryTurn() {
  clearInterval(state.timer);
  const player = state.players[state.currentPlayerIndex];
  text('#round-display', formatMessage('game.roundOf', { round: state.currentRound, rounds: state.rounds }));
  renderMiniScore();
  text('#current-player-name', player || '--');
  text('#screen-game .cp-label', formatMessage('game.storyTurnOf', { current: state.currentPlayerIndex + 1, total: state.players.length }));
  $('#preparing-state')?.classList.add('hidden');
  $('#memorize-state')?.classList.add('hidden');
  $('#playing-state')?.classList.remove('hidden');
  html('#word-display', `
    <span class="story-kicker">${formatMessage('game.storyKicker', { icon: state.category.icon })}</span>
    <span class="story-prompt">${state.storyLog.length ? translate('game.continueSecret') : translate('game.firstSentence')}</span>
    <span class="turn-strip">${state.storyLog.length ? formatMessage('game.alreadySpoke', { players: state.storyLog.join(', ') }) : translate('game.firstRoundSentence')}</span>
  `);
  const wordCard = $('#playing-state .word-card');
  let input = $('#story-beat-input');
  if (wordCard && !input) {
    input = document.createElement('textarea');
    input.id = 'story-beat-input';
    input.className = 'inp story-beat-input';
    input.maxLength = 180;
    input.rows = 3;
    input.placeholder = translate('game.storyInputPlaceholder');
    wordCard.appendChild(input);
  }
  if (input) input.value = '';
  const challenge = $('#game-challenge-display');
  challenge?.classList.remove('hidden');
  text('#game-challenge-text', translate('game.storyInstruction'));
  const actions = $('.game-actions-grid');
  if (actions) {
    actions.innerHTML = `
      <button class="btn btn-secondary btn-lg" data-action="save-story-beat">${translate('game.sentenceTold')}</button>
      <button class="btn btn-ghost btn-lg" data-action="skip-timer">${translate('game.skipWithoutText')}</button>
    `;
  }
  updateTimerDisplay(state.timerLeft, state.timerDuration);
  startTurnTimer();
  broadcastMultidevice();
}

function startTurnTimer() {
  state.timerLeft = state.timerDuration;
  updateTimerDisplay(state.timerLeft, state.timerDuration);
  state.timer = setInterval(() => {
    state.timerLeft -= 1;
    updateTimerDisplay(state.timerLeft, state.timerDuration);
    if (state.timerLeft <= 3 && state.timerLeft > 0) beep(660);
    if (state.timerLeft <= 0) {
      clearInterval(state.timer);
      saveStoryBeat();
    }
  }, 1000);
}

function updateTimerDisplay(left, total) {
  $$('[data-timer-num]').forEach(el => {
    el.textContent = left;
  });
  $$('[data-timer-circle]').forEach(circle => {
    const pct = Math.max(0, left) / Math.max(1, total);
    circle.style.strokeDashoffset = 427.3 - pct * 427.3;
    circle.style.stroke = pct > 0.5 ? 'var(--timer-color-safe)' : pct > 0.25 ? 'var(--timer-color-warning)' : 'var(--timer-color-danger)';
  });
  broadcastMultidevice();
}

function saveStoryBeat() {
  commitStoryBeat($('#story-beat-input')?.value.trim() || '');
}

function commitStoryBeat(textValue = '') {
  clearInterval(state.timer);
  const player = state.players[state.currentPlayerIndex];
  const beat = {
    round: state.currentRound,
    player,
    text: textValue
  };
  state.storyLog.push(player);
  state.fullStoryLog.push(beat);
  state.currentPlayerIndex += 1;
  if (state.currentPlayerIndex >= state.players.length) {
    state.phase = 'vote';
    renderVote();
    return;
  }
  renderStoryTurn();
}

function submitRemoteStoryBeat(conn, textValue = '') {
  if (state.phase !== 'story' || conn?.playerIndex !== state.currentPlayerIndex) return;
  commitStoryBeat(String(textValue || '').trim().slice(0, 180));
}

function renderVote() {
  clearInterval(state.timer);
  $('#story-beat-input')?.remove();
  while (state.voteRevealIndex < state.players.length && state.votes[state.players[state.voteRevealIndex]] !== undefined) {
    state.voteRevealIndex += 1;
  }
  if (state.voteRevealIndex >= state.players.length) {
    resolveVotes();
    return;
  }
  text('#round-display', formatMessage('game.voteRound', { round: state.currentRound }));
  renderMiniScore();
  const voter = state.players[state.voteRevealIndex];
  text('#current-player-name', voter || translate('game.voteFallback'));
  text('#screen-game .cp-label', state.voteVisible ? translate('game.secretVoteOf') : translate('game.passDevice'));
  $('#preparing-state')?.classList.add('hidden');
  $('#memorize-state')?.classList.add('hidden');
  $('#playing-state')?.classList.remove('hidden');
  $('#game-challenge-display')?.classList.add('hidden');
  const actions = $('.game-actions-grid');
  if (!state.voteVisible) {
    html('#word-display', `
      <span class="story-kicker">${translate('game.voteKicker')}</span>
      <span class="story-prompt">${formatMessage('game.votePromptHidden', { player: voter })}</span>
      <span class="turn-strip">${formatMessage('game.votesOf', { current: state.voteRevealIndex + 1, total: state.players.length })}</span>
    `);
    if (actions) {
      actions.innerHTML = `<button class="btn btn-primary btn-lg vote-wide" data-action="show-vote">${translate('game.openBallot')}</button>`;
    }
    broadcastMultidevice();
    return;
  }
  html('#word-display', `
    <span class="story-kicker">${formatMessage('game.voteOf', { player: voter })}</span>
    <span class="story-prompt">${translate('game.voteQuestion')}</span>
    <span class="turn-strip">${formatMessage('game.roundOrder', { players: state.storyLog.join(' → ') })}</span>
  `);
  if (actions) {
    actions.innerHTML = state.players.map((player, index) => `
      <button class="btn btn-secondary btn-lg vote-option" data-action="vote" data-index="${index}">${player}</button>
    `).join('');
  }
  broadcastMultidevice();
}

function showVote() {
  state.voteVisible = true;
  renderVote();
}

function calculateVoteResult(players, impostorIndex, votes) {
  const impostorIndexes = Array.isArray(impostorIndex) ? impostorIndex : [impostorIndex];
  const impostors = impostorIndexes.map(index => players[index]).filter(Boolean);
  const counts = players.map((player, index) => ({
    player,
    index,
    votes: Object.values(votes).filter(voteIndex => voteIndex === index).length
  })).sort((a, b) => b.votes - a.votes || a.player.localeCompare(b.player));
  const topVotes = counts[0]?.votes || 0;
  const tied = counts.filter(entry => entry.votes === topVotes);
  const suspected = tied.length === 1 ? tied[0] : null;
  const correctVoters = Object.entries(votes)
    .filter(([, voteIndex]) => impostorIndexes.includes(voteIndex))
    .map(([player]) => player);
  const groupFoundImpostor = Boolean(suspected && impostorIndexes.includes(suspected.index));
  return {
    impostor: impostors.join(', '),
    impostors,
    suspected: suspected?.player || 'Empate',
    suspectedIndex: suspected?.index ?? -1,
    caughtImpostorIndex: groupFoundImpostor ? suspected.index : -1,
    caughtImpostor: groupFoundImpostor ? suspected.player : '',
    groupFoundImpostor,
    tied: tied.length > 1,
    correctVoters,
    counts
  };
}

function applyRoundScore(scores, players, impostorIndex, voteResult, scoring, guessedTheme = false) {
  const nextScores = { ...scores };
  const impostorIndexes = Array.isArray(impostorIndex) ? impostorIndex : [impostorIndex];
  if (!voteResult.groupFoundImpostor || guessedTheme) {
    const winners = guessedTheme && voteResult.caughtImpostorIndex >= 0 ? [voteResult.caughtImpostorIndex] : impostorIndexes;
    winners.forEach(index => {
      const impostor = players[index];
      if (impostor) nextScores[impostor] = (nextScores[impostor] || 0) + scoring.impostorPoints;
    });
    return nextScores;
  }
  voteResult.correctVoters.forEach(player => {
    nextScores[player] = (nextScores[player] || 0) + scoring.correctPoints;
  });
  return nextScores;
}

function submitVote(index) {
  haptic(10);
  const voter = state.players[state.voteRevealIndex];
  if (!voter) return;
  state.votes[voter] = index;
  state.voteRevealIndex += 1;
  state.voteVisible = false;
  if (state.voteRevealIndex < state.players.length) {
    renderVote();
    return;
  }
  resolveVotes();
}

function submitRemoteVote(conn, voteIndex) {
  const voter = state.players[conn?.playerIndex];
  if (state.phase !== 'vote' || !voter || !Number.isInteger(voteIndex) || !state.players[voteIndex]) return;
  if (state.votes[voter] !== undefined) return;
  state.votes[voter] = voteIndex;
  state.voteVisible = false;
  if (Object.keys(state.votes).length >= state.players.length) {
    resolveVotes();
    return;
  }
  renderVote();
}

function resolveVotes() {
  const settings = collectSettings();
  const correctPoints = Number(settings.correctPoints) || 6;
  const impostorPoints = Number(settings.impostorPoints) || 12;
  state.voteResult = calculateVoteResult(state.players, state.impostorIndexes, state.votes);
  state.pendingScore = { correctPoints, impostorPoints, correctVoters: state.voteResult.correctVoters };
  if (!state.voteResult.groupFoundImpostor) {
    state.scores = applyRoundScore(state.scores, state.players, state.impostorIndexes, state.voteResult, state.pendingScore);
    state.votes = state.voteResult;
    state.phase = 'score';
    goTo('score');
    return;
  }
  state.phase = 'impostor-guess';
  renderImpostorGuess();
}

function renderImpostorGuess() {
  clearInterval(state.timer);
  $('#story-beat-input')?.remove();
  text('#round-display', translate('game.impostorDefense'));
  renderMiniScore();
  text('#current-player-name', state.voteResult?.caughtImpostor || state.voteResult?.impostor || '--');
  text('#screen-game .cp-label', translate('game.lastChanceLabel'));
  $('#preparing-state')?.classList.add('hidden');
  $('#memorize-state')?.classList.add('hidden');
  $('#playing-state')?.classList.remove('hidden');
  html('#word-display', `
    <span class="story-kicker">${translate('game.impostorFoundKicker')}</span>
    <span class="story-prompt">${translate('game.stealPointsPrompt')}</span>
    <span class="turn-strip">${formatMessage('game.mostVotedSuspect', { player: state.voteResult?.suspected || '--' })}</span>
  `);
  $('#game-challenge-display')?.classList.add('hidden');
  if (!state.guessOptions.length) {
    state.guessOptions = shuffle(getStoryCategories()).slice(0, 3);
    if (!state.guessOptions.some(category => category.id === state.category.id)) {
      state.guessOptions[Math.floor(Math.random() * state.guessOptions.length)] = state.category;
    }
    state.guessOptions = shuffle(state.guessOptions);
  }
  const actions = $('.game-actions-grid');
  if (actions) {
    actions.innerHTML = state.guessOptions.map(category => `
      <button class="btn btn-secondary btn-lg vote-option" data-action="impostor-guess" data-category-guess="${category.id}">${category.icon} ${category.name}</button>
    `).join('');
  }
  broadcastMultidevice();
}

function submitImpostorGuess(categoryId) {
  const guessed = categoryId === state.category.id;
  state.scores = applyRoundScore(state.scores, state.players, state.impostorIndexes, state.voteResult, state.pendingScore, guessed);
  state.votes = {
    ...state.voteResult,
    guessedTheme: guessed,
    actualCategory: state.category.name
  };
  state.phase = 'score';
  goTo('score');
}

function submitRemoteImpostorGuess(conn, categoryId) {
  if (state.phase !== 'impostor-guess') return;
  const allowedIndex = state.voteResult?.caughtImpostorIndex;
  if (!Number.isInteger(conn?.playerIndex) || conn.playerIndex !== allowedIndex) return;
  if (!state.guessOptions.some(category => category.id === categoryId)) return;
  submitImpostorGuess(categoryId);
}

function renderScoreScreen() {
  $('#story-beat-input')?.remove();
  const title = state.votes.groupFoundImpostor
    ? state.votes.guessedTheme ? translate('score.impostorStole') : translate('score.impostorCaught')
    : translate('score.impostorEscaped');
  text('#screen-score .hero-title', title);
  const detail = state.votes.tied
    ? translate('score.voteTied')
    : formatMessage('score.mostVoted', { player: state.votes.suspected });
  const guess = typeof state.votes.guessedTheme === 'boolean'
    ? ` ${formatMessage('score.themeGuess', {
      theme: state.votes.actualCategory,
      result: state.votes.guessedTheme ? translate('score.guessRight') : translate('score.guessWrong')
    })}`
    : '';
  text('#score-subtitle', formatMessage('score.subtitle', { impostor: state.votes.impostor, detail, guess }));
  renderScoreExplanation();
  renderScoreboard('#scoreboard-list');
  renderScoreCorrection();
  text('#screen-score [data-i18n="score.nextRoundTitle"]', state.currentRound >= state.rounds ? translate('score.finalRoundTitle') : translate('score.nextRoundTitleDynamic'));
  text('#next-round-info', state.currentRound >= state.rounds
    ? translate('score.finalInfo')
    : formatMessage('score.nextRoundInfo', { round: state.currentRound + 1 }));
  text('#screen-score [data-action="continue-game"]', state.currentRound >= state.rounds ? translate('score.viewFinal') : translate('score.continue'));
}

function renderScoreExplanation() {
  const subtitle = $('#score-subtitle');
  if (!subtitle?.parentElement || !state.pendingScore) return;
  let box = $('#score-explanation');
  if (!box) {
    box = document.createElement('div');
    box.id = 'score-explanation';
    box.className = 'score-explanation';
    subtitle.insertAdjacentElement('afterend', box);
  }
  const voters = state.votes.correctVoters?.length
    ? state.votes.correctVoters.join(', ')
    : translate('score.noVoters');
  const reward = state.votes.groupFoundImpostor && !state.votes.guessedTheme
    ? formatMessage('score.correctReward', { points: state.pendingScore.correctPoints, voters })
    : formatMessage('score.impostorReward', {
      points: state.pendingScore.impostorPoints,
      player: state.votes.guessedTheme && state.votes.caughtImpostor ? state.votes.caughtImpostor : state.votes.impostor
    });
  const counts = state.votes.counts
    ?.map(entry => `${entry.player}: ${entry.votes}`)
    .join(' · ');
  box.innerHTML = `
    <div><strong>${translate('score.ruleLabel')}</strong> ${translate('score.ruleText')}</div>
    <div><strong>${translate('score.roundLabel')}</strong> ${reward}</div>
    <div><strong>${translate('score.votesLabel')}</strong> ${counts || translate('score.noVotes')}</div>
  `;
}

function applyScoreCorrection(scores, player, delta) {
  const nextScores = { ...(scores || {}) };
  const name = String(player || '').trim();
  if (!name) return nextScores;
  nextScores[name] = (Number(nextScores[name]) || 0) + (Number(delta) || 0);
  return nextScores;
}

function renderScoreCorrection() {
  const scoreboard = $('#scoreboard-list');
  if (!scoreboard?.parentElement || !state.players.length) return;
  let panel = $('#score-correction');
  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'score-correction';
    panel.className = 'score-explanation score-correction';
    scoreboard.insertAdjacentElement('afterend', panel);
  }
  panel.innerHTML = `
    <div><strong>${translate('score.quickCorrection')}</strong> ${translate('score.quickCorrectionHelp')}</div>
    <div class="score-correction-list">
      ${state.players.map(player => `
        <div class="score-correction-row">
          <span>${escapeHtml(player)}</span>
          <div class="score-correction-controls">
            <button class="btn btn-ghost btn-sm" data-action="score-correction" data-player="${escapeHtml(player)}" data-delta="-1">-1</button>
            <strong>${Number(state.scores[player]) || 0}</strong>
            <button class="btn btn-ghost btn-sm" data-action="score-correction" data-player="${escapeHtml(player)}" data-delta="1">+1</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function correctScore(player, delta) {
  state.scores = applyScoreCorrection(state.scores, player, delta);
  renderScoreboard('#scoreboard-list');
  renderScoreCorrection();
  renderMiniScore();
}

function continueGame() {
  if (state.currentRound >= state.rounds) {
    finishGame();
    return;
  }
  state.currentRound += 1;
  prepareRound();
  goTo('game');
}

function finishGame() {
  state.phase = 'final';
  recordLeaderboard();
  goTo('final');
  launchConfetti();
  haptic([20, 40, 20]);
}

function renderFinalScreen() {
  const ranking = getRanking();
  const top = ranking[0];
  text('#final-winner', top ? top.name : '--');
  text('#screen-final [data-i18n="final.winnerLabel"]', top ? translate('final.winner') : translate('final.ended'));
  text('#screen-final [data-i18n="final.resultTitle"]', translate('final.resultTitle'));
  renderScoreboard('#final-scoreboard');
  renderFinalStoryRecap();
}

function formatStoryRecap(beats) {
  return beats
    .filter(beat => beat && beat.player)
    .map(beat => ({
      round: Number(beat.round) || 1,
      player: beat.player,
      text: beat.text?.trim() || translate('final.unregisteredBeat')
    }));
}

function renderFinalStoryRecap() {
  const scoreboard = $('#final-scoreboard');
  if (!scoreboard?.parentElement) return;
  let recap = $('#final-story-recap');
  if (!recap) {
    recap = document.createElement('div');
    recap.id = 'final-story-recap';
    recap.className = 'story-recap';
    scoreboard.parentElement.appendChild(recap);
  }
  const beats = formatStoryRecap(state.fullStoryLog);
  recap.innerHTML = `
    <h3 class="story-recap-title">${translate('final.storyTitle')}</h3>
    ${beats.length
      ? beats.map(beat => `<div class="story-recap-item"><span>R${beat.round} · ${escapeHtml(beat.player)}</span><p>${escapeHtml(beat.text)}</p></div>`).join('')
      : `<div class="text-sm text-muted">${translate('final.emptyStory')}</div>`}
  `;
}

function getRanking() {
  return Object.entries(state.scores)
    .map(([name, pts]) => ({ name, pts }))
    .sort((a, b) => b.pts - a.pts || a.name.localeCompare(b.name));
}

function renderScoreboard(selector) {
  const container = $(selector);
  if (!container) return;
  container.innerHTML = getRanking().map((entry, index) => `
    <div class="score-row ${index === 0 ? 'first' : ''}">
      <span><strong>${index + 1}. ${entry.name}</strong></span>
      <span>${entry.pts} pts</span>
    </div>
  `).join('');
}

function renderMiniScore() {
  const container = $('#score-mini');
  if (!container) return;
  container.innerHTML = getRanking().map(entry => `
    <div class="score-mini-item"><span>${entry.name}</span><strong>${entry.pts || 0}</strong></div>
  `).join('');
}

function loadLeaderboard() {
  return safeJsonParse(localStorage.getItem(LEADERBOARD_KEY), { matches: 0, players: {} });
}

function saveLeaderboard(board) {
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(board));
}

function recordLeaderboard() {
  if (state.leaderboardRecorded) return;
  const board = loadLeaderboard();
  board.matches = (board.matches || 0) + 1;
  Object.entries(state.scores).forEach(([name, pts]) => {
    const player = board.players[name] || { name, points: 0, matches: 0 };
    player.points += pts;
    player.matches += 1;
    board.players[name] = player;
  });
  saveLeaderboard(board);
  state.leaderboardRecorded = true;
}

function renderLeaderboard() {
  const board = loadLeaderboard();
  const players = Object.values(board.players).sort((a, b) => b.points - a.points || a.name.localeCompare(b.name));
  text('#leaderboard-summary', formatMessage('leaderboard.summary', { players: players.length, matches: board.matches || 0 }));
  const list = $('#leaderboard-list');
  if (!list) return;
  list.innerHTML = players.length
    ? players.slice(0, 30).map((player, index) => `
      <div class="leaderboard-row ${index < 3 ? 'is-podium' : ''}">
        <div class="leaderboard-rank">#${index + 1}</div>
        <div class="leaderboard-identity">
          <div class="leaderboard-player-name">${player.name}</div>
          <div class="leaderboard-player-meta">${formatMessage('leaderboard.matches', { count: player.matches })}</div>
        </div>
        <div class="leaderboard-score"><span class="leaderboard-score-value">${player.points}</span><span class="leaderboard-score-label"> pts</span></div>
      </div>
    `).join('')
    : `<div class="leaderboard-empty">${translate('leaderboard.empty')}</div>`;
  text('#leaderboard-footer', players.length ? formatMessage('leaderboard.footer', { shown: Math.min(30, players.length), total: players.length }) : '');
}

function resetLeaderboard() {
  if (!confirm(translate('admin.leaderboardConfirm'))) return;
  localStorage.removeItem(LEADERBOARD_KEY);
  renderLeaderboard();
  showNotif(translate('admin.leaderboardCleared'));
}

function addCustomPrompt() {
  const categoryId = $('#custom-prompt-category')?.value;
  const prompt = $('#custom-prompt-text')?.value.trim();
  if (!categoryId || !prompt) return showNotif(translate('admin.promptRequired'), 'var(--accent2)', 'var(--text)');
  const customContent = normalizeCustomContent(state.customContent);
  customContent.prompts[categoryId] = [...(customContent.prompts[categoryId] || []), prompt].slice(-50);
  state.customContent = customContent;
  saveCustomContent();
  renderRulesScreen();
  renderCategories();
  showNotif(translate('admin.promptAdded'));
}

function addCustomTwist() {
  const twist = $('#custom-twist-text')?.value.trim();
  if (!twist) return showNotif(translate('admin.twistRequired'), 'var(--accent2)', 'var(--text)');
  const customContent = normalizeCustomContent(state.customContent);
  customContent.twists = [...customContent.twists, twist].slice(-50);
  state.customContent = customContent;
  saveCustomContent();
  renderRulesScreen();
  showNotif(translate('admin.twistAdded'));
}

function resetCustomContent() {
  if (!confirm(translate('admin.clearCustomConfirm'))) return;
  state.customContent = normalizeCustomContent();
  saveCustomContent();
  renderRulesScreen();
  renderCategories();
  showNotif(translate('admin.customCleared'));
}

function selectExtensionPackFile() {
  $('#extension-pack-input')?.click();
}

async function installExtensionPack(file) {
  if (!file) return;
  try {
    const pack = normalizeExtensionPack(JSON.parse(await file.text()));
    if (!pack) return showNotif(translate('admin.packInvalid'), 'var(--accent2)', 'var(--text)');
    state.extensionPacks = normalizeExtensionPacks([
      pack,
      ...state.extensionPacks.filter(item => item.id !== pack.id)
    ]);
    saveExtensionPacks();
    renderRulesScreen();
    renderCategories();
    showNotif(translate('admin.packInstalled'));
  } catch (error) {
    showNotif(translate('admin.packImportFailed'), 'var(--accent2)', 'var(--text)');
  }
}

function removeExtensionPack(packId) {
  state.extensionPacks = normalizeExtensionPacks(state.extensionPacks).filter(pack => pack.id !== packId);
  saveExtensionPacks();
  renderRulesScreen();
  renderCategories();
  showNotif(translate('admin.packRemoved'));
}

function dismissRulesNudge() {
  localStorage.setItem(SEEN_RULES_KEY, '1');
  renderSetupScreen();
}

function confirmRestart() {
  if (!confirm(translate('admin.restartConfirm'))) return;
  clearInterval(state.timer);
  state.phase = 'setup';
  goTo('setup');
}

function resetAppDefaults() {
  if (!confirm(translate('admin.resetConfirm'))) return;
  Object.keys(localStorage)
    .filter(key => key.startsWith('crazystory_'))
    .forEach(key => localStorage.removeItem(key));
  window.location.reload();
}

function openExternalUrl(url) {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function openDonation(platform) {
  openExternalUrl(DONATION_LINKS[platform]);
}

function getShareData() {
  return {
    title: 'CrazyStory',
    text: 'Jogue CrazyStory: uma história coletiva com um impostor escondido.',
    url: window.location.protocol.startsWith('http') ? window.location.href : APP_PUBLIC_URL
  };
}

async function share(platform) {
  const data = getShareData();
  const message = `${data.text} ${data.url}`;
  if (platform === 'whatsapp') return openExternalUrl(`https://wa.me/?text=${encodeURIComponent(message)}`);
  if (platform === 'facebook') return openExternalUrl(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(data.url)}`);
  if (platform === 'x') return openExternalUrl(`https://twitter.com/intent/tweet?text=${encodeURIComponent(data.text)}&url=${encodeURIComponent(data.url)}`);
  if (navigator.share) {
    try {
      await navigator.share(data);
      return;
    } catch (error) {}
  }
  await navigator.clipboard?.writeText(data.url);
  showNotif(translate('admin.linkCopied'));
}

function renderScreen(screen) {
  if (screen === 'setup') renderSetupScreen();
  if (screen === 'game') renderGameScreen();
  if (screen === 'score') renderScoreScreen();
  if (screen === 'final') renderFinalScreen();
  if (screen === 'leaderboard') renderLeaderboard();
  if (screen === 'wordbank') renderRulesScreen();
  if (screen === 'multidevice') renderMultiDeviceInfo();
}

function handleAction(button) {
  const { action, index, platform, packId, player, delta } = button.dataset;
  if ($('#toggle-navigation-sound')?.checked && !['vote'].includes(action)) beep(320, 0.04);
  updateBackgroundMusic({ unlock: true });
  if (action === 'quick-game') return startQuickGame();
  if (action === 'add-player' || action === 'add-ffa-player') return addPlayer();
  if (action === 'remove-player' || action === 'remove-ffa-player') return removePlayer(Number(index));
  if (action === 'start-game') return startGame();
  if (action === 'show-role') return showRole();
  if (action === 'next-role') return nextRole();
  if (action === 'save-story-beat' || action === 'skip-timer') return saveStoryBeat();
  if (action === 'show-vote') return showVote();
  if (action === 'vote') return submitVote(Number(index));
  if (action === 'impostor-guess') return submitImpostorGuess(button.dataset.categoryGuess);
  if (action === 'continue-game') return continueGame();
  if (action === 'confirm-restart') return confirmRestart();
  if (action === 'reset-leaderboard') return resetLeaderboard();
  if (action === 'score-correction') return correctScore(player, Number(delta));
  if (action === 'add-custom-prompt') return addCustomPrompt();
  if (action === 'add-custom-twist') return addCustomTwist();
  if (action === 'reset-custom-content') return resetCustomContent();
  if (action === 'select-extension-pack') return selectExtensionPackFile();
  if (action === 'remove-extension-pack') return removeExtensionPack(packId);
  if (action === 'dismiss-rules-nudge') return dismissRulesNudge();
  if (action === 'reset-app-defaults') return resetAppDefaults();
  if (action === 'create-multidevice-host') return createMultideviceHost();
  if (action === 'show-multidevice-join') return showMultideviceJoin();
  if (action === 'join-multidevice-session') return joinMultideviceSession();
  if (action === 'copy-multidevice-link') return copyMultideviceLink();
  if (action === 'assign-multidevice-player') return assignMultidevicePlayer(Number(index));
  if (action === 'submit-multidevice-story') return submitMultideviceStory();
  if (action === 'submit-multidevice-vote') return submitMultideviceVote(Number(index));
  if (action === 'submit-multidevice-guess') return submitMultideviceGuess(button.dataset.categoryGuess);
  if (action === 'donate-bmc') return openDonation('buyMeCoffee');
  if (action === 'donate-kofi') return openDonation('koFi');
  if (action === 'share-platform') return share(platform);
  if (action === 'install-pwa') return showNotif(translate('admin.installPwa'));
  if (action === 'toggle-fullscreen') return document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.();
}

function registerEvents() {
  document.addEventListener('click', event => {
    const nav = event.target.closest('[data-nav]');
    if (nav) {
      updateBackgroundMusic({ unlock: true });
      goTo(nav.dataset.nav);
      return;
    }
    const category = event.target.closest('[data-category]');
    if (category) {
      toggleCategory(category.dataset.category);
      return;
    }
    const variant = event.target.closest('[data-variant]');
    if (variant) {
      selectGameVariant(variant.dataset.variant);
      return;
    }
    const action = event.target.closest('[data-action]');
    if (action) handleAction(action);
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Enter') return;
    const submit = event.target.closest('[data-enter-submit]');
    if (submit?.dataset.enterSubmit === 'ffa') addPlayer();
  });

  document.addEventListener('input', event => {
    if (event.target.id === 'rounds-slider') {
      state.rounds = Number(event.target.value) || 3;
      text('#rounds-val', state.rounds);
      saveQuickGameConfig();
    }
    if (event.target.id === 'impostor-count-select') {
      state.impostorCount = Number(event.target.value) === 2 ? 2 : 1;
      saveQuickGameConfig();
    }
    if (event.target.id === 'content-mode-select') {
      state.contentMode = event.target.value === 'party' ? 'party' : 'family';
      saveQuickGameConfig();
      renderCategories();
    }
    if (event.target.id === 'timer-slider' || event.target.id === 'prepare-timer-slider' || event.target.id === 'music-volume-slider') {
      updateTimerLabels();
      saveSettings();
      if (event.target.id === 'music-volume-slider') updateBackgroundMusic();
    }
    if (event.target.id === 'correct-points-input' || event.target.id === 'wrong-points-input') {
      saveSettings();
    }
  });

  document.addEventListener('change', event => {
    if (event.target.id === 'extension-pack-input') {
      installExtensionPack(event.target.files?.[0]);
      event.target.value = '';
    }
  });

  ['toggle-sound', 'toggle-navigation-sound', 'toggle-gameroom-music', 'toggle-gameplay-music', 'toggle-shuffle', 'language-select', 'theme-select'].forEach(id => {
    $(`#${id}`)?.addEventListener('change', event => {
      if (id === 'theme-select') applyTheme(event.target.value);
      if (id === 'language-select') applyLanguage(event.target.value);
      saveSettings();
      updateBackgroundMusic();
    });
  });
}

function createStars() {
  const stars = $('#stars');
  if (!stars) return;
  stars.innerHTML = '';
  for (let i = 0; i < 60; i += 1) {
    const star = document.createElement('div');
    const size = Math.random() * 3 + 1;
    star.className = 'star';
    star.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${size}px;height:${size}px;--d:${Math.random() * 3 + 2}s;--del:${Math.random() * 2}s;--op:${Math.random() * 0.5 + 0.2};`;
    stars.appendChild(star);
  }
}

function boot() {
  loadQuickGameConfig();
  state.customContent = loadCustomContent();
  state.extensionPacks = loadExtensionPacks();
  initializeSettings();
  renderRulesScreen();
  renderMultiDeviceInfo();
  registerEvents();
  createStars();
  renderLeaderboard();
  goTo(getCodeFromLocation() ? 'multidevice' : 'home');
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  boot();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculateVoteResult,
    applyRoundScore,
    applyScoreCorrection,
    formatStoryRecap,
    mergeCustomContent,
    normalizeCustomContent,
    normalizeExtensionPack,
    normalizeExtensionPacks,
    getPackContent,
    translate,
    formatMessage,
    SUPPORTED_LANGUAGES,
    normalizeImpostorCount,
    pickImpostorIndexes,
    normalizeVolume,
    createMultidevicePayload,
    createMultideviceRolePayload,
    STORY_CATEGORIES
  };
}
