#!/usr/bin/env node

const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { createMultidevicePayload, createMultideviceRolePayload } = require('../src/src/script.js');
const script = readFileSync('src/src/script.js', 'utf8');

const payload = createMultidevicePayload({
  phase: 'story',
  currentRound: 2,
  rounds: 4,
  players: ['Ana', 'Bia', 'Caio'],
  currentPlayerIndex: 1,
  roleRevealIndex: 0,
  voteRevealIndex: 0,
  timerLeft: 18,
  timerDuration: 60,
  storyLog: ['Ana'],
  category: { icon: '🚀', name: 'Viagem secreta' },
  prompt: 'A nave pousou no quintal.',
  twist: 'Inclua um mapa rasgado.'
});

assert.equal(payload.type, 'crazystory-state');
assert.equal(payload.currentPlayer, 'Bia');
assert.equal(payload.safeMessage, 'História em andamento');
assert.deepEqual(payload.storyOrder, ['Ana']);
assert.equal(Object.prototype.hasOwnProperty.call(payload, 'prompt'), false);
assert.equal(Object.prototype.hasOwnProperty.call(payload, 'twist'), false);
assert.equal(JSON.stringify(payload).includes('A nave pousou'), false);
assert.equal(JSON.stringify(payload).includes('mapa rasgado'), false);
assert.deepEqual(payload.guessOptions, []);

const guessPayload = createMultidevicePayload({
  phase: 'impostor-guess',
  currentRound: 1,
  rounds: 1,
  players: ['Ana', 'Bia'],
  currentPlayerIndex: 0,
  roleRevealIndex: 0,
  voteRevealIndex: 0,
  timerLeft: 0,
  timerDuration: 60,
  storyLog: [],
  category: { icon: '🚀', name: 'Viagem secreta' },
  guessOptions: [{ id: 'space', name: 'Espaço', icon: '🚀' }],
  voteResult: { caughtImpostor: 'Bia' }
});
assert.equal(guessPayload.currentPlayer, 'Bia');
assert.deepEqual(guessPayload.guessOptions, [{ id: 'space', name: 'Espaço', icon: '🚀' }]);

const gameState = {
  players: ['Ana', 'Bia', 'Caio'],
  impostorIndexes: [1],
  category: { icon: '🚀', name: 'Viagem secreta' },
  prompt: 'A nave pousou no quintal.',
  twist: 'Inclua um mapa rasgado.'
};
const innocentRole = createMultideviceRolePayload(gameState, 0);
const impostorRole = createMultideviceRolePayload(gameState, 1);

assert.equal(innocentRole.player, 'Ana');
assert.equal(innocentRole.isImpostor, false);
assert.equal(innocentRole.prompt, 'A nave pousou no quintal.');
assert.equal(innocentRole.twist, 'Inclua um mapa rasgado.');
assert.equal(impostorRole.player, 'Bia');
assert.equal(impostorRole.isImpostor, true);
assert.equal(impostorRole.prompt, '');
assert.equal(impostorRole.twist, '');
assert.equal(JSON.stringify(impostorRole).includes('A nave pousou'), false);
assert.match(script, /type: 'crazystory-vote'/);
assert.match(script, /function submitRemoteVote/);
assert.match(script, /data-action="submit-multidevice-vote"/);
assert.match(script, /type: 'crazystory-story-beat'/);
assert.match(script, /function submitRemoteStoryBeat/);
assert.match(script, /data-action="submit-multidevice-story"/);
assert.match(script, /type: 'crazystory-impostor-guess'/);
assert.match(script, /function submitRemoteImpostorGuess/);
assert.match(script, /data-action="submit-multidevice-guess"/);

console.log('multidevice tests passed');
