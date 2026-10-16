#!/usr/bin/env node

const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { I18N, SUPPORTED_LANGUAGES } = require('../src/script.js');

// EN/ES start as a copy of PT (`...I18N.pt`), so a missing translation silently shows Portuguese.
// A value identical to PT is only allowed for brand names, cognates and placeholders listed here.
const SAME_AS_PT = {
  en: [
    'home.title', 'settings.timerTitle', 'donate.buyMeCoffee', 'donate.koFi', 'footer.copyPrefix',
    'language.pt', 'language.en', 'language.es', 'setup.oneImpostor', 'rules.impostorRule',
    'rules.multideviceRule', 'game.impostorRole', 'score.subtitle'
  ],
  es: [
    'common.continue', 'common.restart', 'common.copy', 'home.title', 'home.multiDeviceSummary',
    'multiDevice.connecting', 'multiDevice.disconnect',
    'game.secondsLabel', 'settings.languageLabel', 'settings.themeLabel', 'donate.buyMeCoffee', 'donate.koFi',
    'footer.copyPrefix', 'language.pt', 'language.en', 'language.es', 'theme.cosmic', 'theme.material3',
    'theme.light-mode', 'theme.high-contrast', 'setup.impostorsLabel', 'setup.oneImpostor',
    'setup.twoImpostors', 'setup.themesTitle', 'rules.impostorRule', 'rules.importPack', 'rules.removePack',
    'rules.localPack', 'guest.connected', 'guest.disconnected', 'guest.storySentTitle',
    'guest.storyPlaceholder', 'guest.sendStory', 'guest.voteSentTitle', 'guest.guessSentTitle',
    'game.progressOf', 'game.impostorRole', 'game.storyTurnOf', 'game.sentenceTold', 'game.secretVoteOf',
    'game.votesOf', 'game.openBallot', 'game.voteOf', 'score.themeGuess', 'score.subtitle', 'score.viewFinal',
    'score.continue', 'score.impostorReward', 'score.votesLabel', 'leaderboard.footer', 'leaderboard.matches',
    'admin.packInstalled', 'admin.packRemoved'
  ]
};

for (const lang of SUPPORTED_LANGUAGES.filter(lang => lang !== 'pt')) {
  const untranslated = Object.keys(I18N.pt)
    .filter(key => I18N[lang][key] === I18N.pt[key] && !SAME_AS_PT[lang].includes(key));
  assert.deepEqual(untranslated, [], `${lang} keys still in Portuguese`);
  const extra = Object.keys(I18N[lang]).filter(key => !(key in I18N.pt));
  assert.deepEqual(extra, [], `${lang} keys missing from pt`);
  for (const [key, value] of Object.entries(I18N.pt)) {
    const placeholders = text => [...text.matchAll(/\{(\w+)\}/g)].map(match => match[1]).sort();
    assert.deepEqual(placeholders(I18N[lang][key]), placeholders(value), `${lang} ${key} placeholders differ`);
  }
}

// Every key must be referenced somewhere, or it is dead weight from a removed screen.
const script = readFileSync('src/script.js', 'utf8');
const html = readFileSync('src/index.html', 'utf8');
const DYNAMIC_PREFIXES = ['guest.phase.'];
const unused = Object.keys(I18N.pt).filter(key =>
  !script.includes(`'${key}'`) && !html.includes(`"${key}"`) && !DYNAMIC_PREFIXES.some(prefix => key.startsWith(prefix)));
assert.deepEqual(unused, [], 'unused i18n keys');

console.log('i18n tests passed');
