const SETTINGS_KEY = 'crazystory_settings_v1';
const LEADERBOARD_KEY = 'crazystory_leaderboard_v1';
const QUICK_GAME_KEY = 'crazystory_quick_game_v1';
const CUSTOM_CONTENT_KEY = 'crazystory_custom_content_v1';
const EXTENSION_PACKS_KEY = 'crazystory_extension_packs_v1';
const SEEN_RULES_KEY = 'crazystory_seen_rules_v1';
const GUEST_TOKEN_KEY = 'crazystory_guest_token_v1';
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
if (typeof module !== 'undefined' && module.exports) {
  globalThis.I18N = require('./i18n.js');
}

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

const IMPOSTOR_HINT_KEYS = ['game.impostorHint1', 'game.impostorHint2', 'game.impostorHint3', 'game.impostorHint4'];

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
    claims: {},
    guestConnection: null,
    guestPlayers: [],
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
  renderMultiDeviceHomeSummary();
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
  const lightning = state.gameVariant === 'lightning';
  $('#rules-nudge')?.classList.toggle('hidden', hasSeenRules());
  $$('#screen-setup [data-variant]').forEach(card => card.classList.toggle('selected', card.dataset.variant === state.gameVariant));
  text('#rounds-sub', translate(lightning ? 'setup.roundsLightningSub' : 'setup.roundsClassicSub'));
  const roundsSlider = $('#rounds-slider');
  if (roundsSlider) {
    roundsSlider.value = lightning ? 1 : state.rounds;
    roundsSlider.disabled = lightning;
  }
  text('#rounds-val', lightning ? 1 : state.rounds);
  const impostorSelect = $('#impostor-count-select');
  if (impostorSelect) impostorSelect.value = String(state.impostorCount);
  const contentSelect = $('#content-mode-select');
  if (contentSelect) contentSelect.value = state.contentMode;
  renderPlayers();
  renderCategories();
  updateSetupReadiness();
}

function renderRulesScreen() {
  const categories = getStoryCategories();
  const customContent = normalizeCustomContent(state.customContent);
  const packs = normalizeExtensionPacks(state.extensionPacks);
  const packContent = getPackContent(packs);
  const packPromptCount = Object.values(packContent.prompts).flat().length;
  const grid = $('#rules-category-grid');
  if (grid) {
    grid.innerHTML = categories.map(category => `<div class="category-card selected"><div class="category-icon">${escapeHtml(category.icon)}</div><div class="category-name">${escapeHtml(category.name)}</div><div class="category-count">${formatMessage('rules.openingsCount', { count: category.prompts.length })}</div></div>`).join('');
  }
  const categorySelect = $('#custom-prompt-category');
  if (categorySelect) {
    const current = categorySelect.value;
    categorySelect.innerHTML = categories.map(category => `<option value="${escapeHtml(category.id)}">${escapeHtml(category.icon)} ${escapeHtml(category.name)}</option>`).join('');
    if (categories.some(category => category.id === current)) categorySelect.value = current;
  }
  text('#custom-content-summary', formatMessage('rules.customSummary', { prompts: Object.values(customContent.prompts).flat().length, twists: customContent.twists.length }));
  text('#extension-pack-summary', formatMessage('rules.packSummary', { packs: packs.length, prompts: packPromptCount, twists: packContent.twists.length }));
  const packList = $('#extension-pack-list');
  if (packList) {
    packList.innerHTML = packs.length
      ? packs.map(pack => `
        <div class="extension-pack-row">
          <div>
            <strong>${escapeHtml(pack.name)}</strong>
            <span>${escapeHtml(pack.description || translate('rules.localPack'))}</span>
          </div>
          <button class="btn btn-ghost btn-sm" data-action="remove-extension-pack" data-pack-id="${escapeHtml(pack.id)}">${translate('rules.removePack')}</button>
        </div>
      `).join('')
      : `<div class="text-sm text-muted">${translate('rules.noPacks')}</div>`;
  }
}

function renderMultiDeviceInfo() {
  if (getCodeFromLocation() && !state.multidevice.isHost) state.multidevice.isGuest = true;
  $('#multidevice-host-panel')?.classList.toggle('hidden', !state.multidevice.isHost);
  $('#multidevice-join-card')?.classList.toggle('hidden', !state.multidevice.isGuest);
  const joinCode = $('#multidevice-join-code');
  if (joinCode && !joinCode.value) joinCode.value = getCodeFromLocation();
  if (!isMultideviceGuestOnline()) text('#multidevice-join-status', translate('multiDevice.joinHelp'));
  updateMultideviceHostPanel();
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

function isMultideviceHostOnline() {
  return Boolean(state.multidevice.isHost && state.multidevice.sessionCode && state.multidevice.peer?.open);
}

function isMultideviceGuestOnline() {
  return Boolean(state.multidevice.isGuest && state.multidevice.guestConnection?.open);
}

function getMultideviceHomeConnectionCount() {
  if (isMultideviceHostOnline()) {
    return state.multidevice.connections.filter(conn => conn.open).length;
  }
  return isMultideviceGuestOnline() ? 1 : 0;
}

function renderMultiDeviceHomeSummary() {
  const summary = $('#multi-device-summary');
  if (!summary) return;
  const isOnline = isMultideviceHostOnline() || isMultideviceGuestOnline();
  const count = getMultideviceHomeConnectionCount();
  const status = translate(isOnline ? 'home.multiDeviceOnline' : 'home.multiDeviceOffline');
  const value = formatMessage('home.multiDeviceSummary', { status, count });
  const dot = document.createElement('span');
  dot.className = `connection-status-dot ${isOnline ? 'is-online' : 'is-offline'}`;
  dot.setAttribute('aria-hidden', 'true');
  summary.replaceChildren(dot, document.createTextNode(value));
  summary.title = value;
  summary.setAttribute('aria-label', value);
  const button = summary.closest('button');
  if (button) button.title = `${translate('home.multiDeviceGame')} | ${value}`;
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

// Players can only be picked/switched while no round is in progress; mid-game, a guest may
// only reclaim the player its token already owns (reconnect). Prevents an impostor from
// switching to another player's slot to read the secret, or voting more than once.
const MULTIDEVICE_ASSIGN_OPEN_PHASES = ['setup', 'final'];

function validateMultideviceAssignment(gameState, connections, conn, playerIndex, token) {
  const player = gameState.players[playerIndex];
  if (!Number.isInteger(playerIndex) || !player || typeof token !== 'string' || !token) return 'invalid';
  const heldByOther = connections.some(other => other !== conn && other.open
    && other.playerIndex === playerIndex && other.guestToken !== token);
  if (heldByOther) return 'taken';
  const assignOpen = MULTIDEVICE_ASSIGN_OPEN_PHASES.includes(gameState.phase);
  const claim = gameState.multidevice.claims[player];
  if (assignOpen) return null;
  if (Number.isInteger(conn.playerIndex) && conn.playerIndex !== playerIndex) return 'locked';
  if (claim !== token) return claim ? 'taken' : 'locked';
  return null;
}

function assignRemotePlayer(conn, playerIndex, token) {
  const error = validateMultideviceAssignment(state, state.multidevice.connections, conn, playerIndex, token);
  if (error) {
    conn.send({ type: 'crazystory-assign-rejected', reason: error });
    return;
  }
  const previous = state.players[conn.playerIndex];
  if (previous && state.multidevice.claims[previous] === token) delete state.multidevice.claims[previous];
  conn.playerIndex = playerIndex;
  conn.guestToken = token;
  state.multidevice.claims[state.players[playerIndex]] = token;
  sendMultideviceRole(conn);
}

function getGuestToken() {
  if (state.multidevice.guestToken) return state.multidevice.guestToken;
  let token = '';
  try { token = localStorage.getItem(GUEST_TOKEN_KEY) || ''; } catch { token = ''; }
  if (!token) {
    token = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 10)}`;
    try { localStorage.setItem(GUEST_TOKEN_KEY, token); } catch { /* memory-only token */ }
  }
  state.multidevice.guestToken = token;
  return token;
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
      messageKey: 'guest.waitingGame'
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
    roleTitle: isImpostor ? '' : gameState.category.name,
    roleTitleKey: isImpostor ? 'game.impostorRole' : '',
    roleIcon: isImpostor ? '🕶️' : gameState.category.icon,
    prompt: isImpostor ? '' : gameState.prompt,
    twist: isImpostor ? '' : gameState.twist,
    hintKey: isImpostor ? IMPOSTOR_HINT_KEYS[index % IMPOSTOR_HINT_KEYS.length] : ''
  };
}

function getMultideviceSafeMessage(gameState = state) {
  const known = ['roles', 'story', 'vote', 'impostor-guess', 'score'];
  return translate(`guest.phase.${known.includes(gameState.phase) ? gameState.phase : 'waiting'}`);
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
  renderMultiDeviceHomeSummary();
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
  state.multidevice.claims = {};
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
        assignRemotePlayer(conn, Number(data.playerIndex), data.token);
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
  state.multidevice.peer.on('error', () => {
    renderMultiDeviceHomeSummary();
    showNotif(translate('admin.peerOpenFailed'), 'var(--accent2)', 'var(--text)');
  });
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
      renderMultiDeviceHomeSummary();
      goTo('guest');
    });
    conn.on('data', data => {
      if (data?.type === 'crazystory-role') return renderGuestRolePayload(data);
      if (data?.type === 'crazystory-assign-rejected') return handleGuestAssignRejected(data);
      renderGuestPayload(data);
    });
    conn.on('close', () => {
      text('#guest-connection-status', translate('guest.disconnected'));
      renderMultiDeviceHomeSummary();
    });
    conn.on('error', () => {
      text('#multidevice-join-status', translate('admin.connectionFailed'));
      renderMultiDeviceHomeSummary();
    });
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
  state.multidevice.guestPlayers = payload.players || [];
  renderGuestPlayerPicker(state.multidevice.guestPlayers);
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
  conn.send({ type: 'crazystory-assign-player', playerIndex: index, token: getGuestToken() });
  state.multidevice.guestVoteSubmitted = false;
  $('#guest-player-picker')?.remove();
  text('#guest-current-player-label', translate('guest.waitingRole'));
}

function handleGuestAssignRejected(data = {}) {
  const key = { taken: 'guest.assignTaken', locked: 'guest.assignLocked' }[data.reason] || 'guest.assignInvalid';
  showNotif(translate(key), 'var(--accent2)', 'var(--text)');
  text('#guest-current-player-label', translate('guest.choosePlayer'));
  renderGuestPlayerPicker(state.multidevice.guestPlayers);
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
  const roleTitle = payload.roleTitleKey ? translate(payload.roleTitleKey) : payload.roleTitle;
  if (word) word.textContent = payload.ready ? `${payload.roleIcon} ${roleTitle}` : translate('guest.waitingGame');
  const challenge = $('#guest-challenge-display');
  const challengeText = $('#guest-challenge-text');
  challenge?.classList.toggle('hidden', !payload.ready);
  if (challengeText) {
    challengeText.textContent = payload.isImpostor
      ? translate(payload.hintKey) || translate(IMPOSTOR_HINT_KEYS[0])
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
      ${(payload.guessOptions || []).map(category => `<button class="btn btn-secondary btn-lg vote-option" data-action="submit-multidevice-guess" data-category-guess="${escapeHtml(category.id)}">${escapeHtml(category.icon)} ${escapeHtml(category.name)}</button>`).join('')}
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
      <div class="player-avatar">${escapeHtml(player.charAt(0).toUpperCase())}</div>
      <div class="player-name">${escapeHtml(player)}</div>
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
    <div class="category-card ${state.selectedCategories.includes(category.id) ? 'selected' : ''}" data-category="${escapeHtml(category.id)}">
      <div class="category-icon">${escapeHtml(category.icon)}</div>
      <div class="category-name">${escapeHtml(category.name)}</div>
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
  $('#playing-state')?.classList.add('hidden');
  const card = $('#preparing-state');
  card?.classList.remove('hidden');
  if (!card) return;
  if (state.rolePreparing) {
    card.innerHTML = `
      <div class="privacy-card">
        <div class="emoji-hero mb-sm">⏳</div>
        <h2 class="section-title section-title-light mb-xs">${escapeHtml(player)}</h2>
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
        <h2 class="section-title section-title-light mb-xs">${escapeHtml(player)}</h2>
        <p class="text-sm mb">${translate('game.revealInstruction')}</p>
        <div class="role-progress">${formatMessage('game.progressOf', { current: state.roleRevealIndex + 1, total: state.players.length })}</div>
        <button class="btn btn-primary btn-lg btn-block" data-action="show-role">${translate('game.showMyRole')}</button>
      </div>
    `;
    return;
  }
  card.innerHTML = `
    <div class="secret-role-shell">
      <div class="emoji-hero mb-sm">${isImpostor ? '🕶️' : escapeHtml(state.category.icon)}</div>
      <h2 class="section-title section-title-light mb-xs">${escapeHtml(player)}</h2>
      <div class="word-card word-card-memorize my-lg secret-role-card">
        <div class="word-text word-text-memorize role-title">${isImpostor ? translate('game.impostorRole') : escapeHtml(state.category.name)}</div>
        <div class="challenge-text mt">${isImpostor ? translate(pick(IMPOSTOR_HINT_KEYS)) : `${translate('game.openingPrefix')} ${escapeHtml(state.prompt)}`}</div>
        ${!isImpostor ? `<div class="challenge-text mt">${translate('game.secretHintPrefix')} ${escapeHtml(state.twist)}</div>` : ''}
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
  $('#playing-state')?.classList.remove('hidden');
  html('#word-display', `
    <span class="story-kicker">${formatMessage('game.storyKicker', { icon: escapeHtml(state.category.icon) })}</span>
    <span class="story-prompt">${state.storyLog.length ? translate('game.continueSecret') : translate('game.firstSentence')}</span>
    <span class="turn-strip">${state.storyLog.length ? formatMessage('game.alreadySpoke', { players: escapeHtml(state.storyLog.join(', ')) }) : translate('game.firstRoundSentence')}</span>
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
  $('#playing-state')?.classList.remove('hidden');
  $('#game-challenge-display')?.classList.add('hidden');
  const actions = $('.game-actions-grid');
  if (!state.voteVisible) {
    html('#word-display', `
      <span class="story-kicker">${translate('game.voteKicker')}</span>
      <span class="story-prompt">${formatMessage('game.votePromptHidden', { player: escapeHtml(voter) })}</span>
      <span class="turn-strip">${formatMessage('game.votesOf', { current: state.voteRevealIndex + 1, total: state.players.length })}</span>
    `);
    if (actions) {
      actions.innerHTML = `<button class="btn btn-primary btn-lg vote-wide" data-action="show-vote">${translate('game.openBallot')}</button>`;
    }
    broadcastMultidevice();
    return;
  }
  html('#word-display', `
    <span class="story-kicker">${formatMessage('game.voteOf', { player: escapeHtml(voter) })}</span>
    <span class="story-prompt">${translate('game.voteQuestion')}</span>
    <span class="turn-strip">${formatMessage('game.roundOrder', { players: escapeHtml(state.storyLog.join(' → ')) })}</span>
  `);
  if (actions) {
    actions.innerHTML = state.players.map((player, index) => `
      <button class="btn btn-secondary btn-lg vote-option" data-action="vote" data-index="${index}">${escapeHtml(player)}</button>
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
  $('#playing-state')?.classList.remove('hidden');
  html('#word-display', `
    <span class="story-kicker">${translate('game.impostorFoundKicker')}</span>
    <span class="story-prompt">${translate('game.stealPointsPrompt')}</span>
    <span class="turn-strip">${formatMessage('game.mostVotedSuspect', { player: escapeHtml(state.voteResult?.suspected || '--') })}</span>
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
      <button class="btn btn-secondary btn-lg vote-option" data-action="impostor-guess" data-category-guess="${escapeHtml(category.id)}">${escapeHtml(category.icon)} ${escapeHtml(category.name)}</button>
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
    ? escapeHtml(state.votes.correctVoters.join(', '))
    : translate('score.noVoters');
  const reward = state.votes.groupFoundImpostor && !state.votes.guessedTheme
    ? formatMessage('score.correctReward', { points: state.pendingScore.correctPoints, voters })
    : formatMessage('score.impostorReward', {
      points: state.pendingScore.impostorPoints,
      player: escapeHtml(state.votes.guessedTheme && state.votes.caughtImpostor ? state.votes.caughtImpostor : state.votes.impostor)
    });
  const counts = state.votes.counts
    ?.map(entry => `${escapeHtml(entry.player)}: ${entry.votes}`)
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
      <span><strong>${index + 1}. ${escapeHtml(entry.name)}</strong></span>
      <span>${entry.pts} pts</span>
    </div>
  `).join('');
}

function renderMiniScore() {
  const container = $('#score-mini');
  if (!container) return;
  container.innerHTML = getRanking().map(entry => `
    <div class="score-mini-item"><span>${escapeHtml(entry.name)}</span><strong>${entry.pts || 0}</strong></div>
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
          <div class="leaderboard-player-name">${escapeHtml(player.name)}</div>
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
  $('#custom-prompt-text').value = '';
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
  $('#custom-twist-text').value = '';
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

function hasSeenRules() {
  try {
    return localStorage.getItem(SEEN_RULES_KEY) === '1';
  } catch {
    return false;
  }
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
      // Save first: renderers inside applyLanguage read the language from saved settings.
      saveSettings();
      if (id === 'theme-select') applyTheme(event.target.value);
      if (id === 'language-select') applyLanguage(event.target.value);
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
    I18N,
    formatMessage,
    SUPPORTED_LANGUAGES,
    normalizeImpostorCount,
    pickImpostorIndexes,
    normalizeVolume,
    createMultidevicePayload,
    createMultideviceRolePayload,
    validateMultideviceAssignment,
    STORY_CATEGORIES
  };
}
