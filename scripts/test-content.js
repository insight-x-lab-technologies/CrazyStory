#!/usr/bin/env node

const assert = require('node:assert/strict');
const {
  mergeCustomContent,
  normalizeCustomContent,
  normalizeExtensionPack,
  normalizeExtensionPacks,
  getPackContent,
  translate,
  formatMessage,
  SUPPORTED_LANGUAGES
} = require('../src/src/script.js');

const baseCategories = [
  { id: 'aventura', icon: 'A', name: 'Aventura', prompts: ['base'] },
  { id: 'misterio', icon: 'M', name: 'Mistério', prompts: ['base'] }
];

const normalized = normalizeCustomContent({
  prompts: {
    aventura: ['Uma abertura da mesa.', '   '],
    misterio: ['Mistério customizado.'],
    inexistente: ['ignorado']
  },
  twists: ['Twist customizado.', '']
});

assert.deepEqual(normalized.prompts.aventura, ['Uma abertura da mesa.']);
assert.deepEqual(normalized.prompts.misterio, ['Mistério customizado.']);
assert.deepEqual(normalized.twists, ['Twist customizado.']);

const merged = mergeCustomContent(baseCategories, normalized);
assert.ok(merged.find(category => category.id === 'aventura').prompts.includes('Uma abertura da mesa.'));
assert.ok(merged.find(category => category.id === 'misterio').prompts.includes('Mistério customizado.'));

const pack = normalizeExtensionPack({
  id: 'packs futuros',
  name: 'Packs Futuros',
  description: 'Extensão local',
  prompts: { aventura: ['Abertura vendável.'] },
  twists: ['Twist vendável.']
});
assert.equal(pack.id, 'packs-futuros');
assert.equal(pack.name, 'Packs Futuros');
const packs = normalizeExtensionPacks([pack, pack]);
assert.equal(packs.length, 1);
const packContent = getPackContent(packs);
assert.ok(packContent.prompts.aventura.includes('Abertura vendável.'));
assert.ok(packContent.twists.includes('Twist vendável.'));
const packMerged = mergeCustomContent(baseCategories, {}, 'family', packContent);
assert.ok(packMerged.find(category => category.id === 'aventura').prompts.includes('Abertura vendável.'));

const partyMerged = mergeCustomContent(baseCategories, {}, 'party');
assert.ok(partyMerged.find(category => category.id === 'aventura').prompts.length > merged.find(category => category.id === 'aventura').prompts.length);

const full = mergeCustomContent(require('../src/src/script.js').STORY_CATEGORIES || [], {});
assert.ok(full.reduce((total, category) => total + category.prompts.length, 0) >= 100);

assert.deepEqual(SUPPORTED_LANGUAGES, ['pt', 'en', 'es']);
assert.equal(translate('home.newGame', 'en'), '🎮 New Game');
assert.equal(translate('settings.languageLabel', 'es'), 'Idioma');
assert.equal(translate('home.newGame', 'fr'), '🎮 Nova Partida');
assert.equal(translate('setup.startStory', 'en'), '🎭 Start Story');
assert.equal(translate('rules.importPack', 'es'), 'Importar pack JSON');
assert.equal(formatMessage('setup.selectedThemes', { count: 3 }, 'en'), '3 theme(s) selected');
assert.equal(formatMessage('multiDevice.connectedCount', { count: 2 }, 'es'), '2 dispositivo(s) conectado(s)');
assert.equal(formatMessage('guest.roundOf', { round: 2, rounds: 5 }, 'en'), 'Round 2 of 5');
assert.equal(formatMessage('game.votePromptHidden', { player: 'Ana' }, 'es'), 'Ana, toca para votar sin mostrar a los demás.');
assert.equal(formatMessage('game.storyKicker', { icon: '🚀' }, 'en'), '🚀 Story in progress');
assert.equal(formatMessage('score.nextRoundInfo', { round: 4 }, 'en'), 'Prepare round 4.');
assert.equal(translate('final.ended', 'es'), 'PARTIDA FINALIZADA');
assert.equal(formatMessage('game.mostVotedSuspect', { player: 'Bia' }, 'en'), 'Most voted suspect: Bia');

console.log('content tests passed');
