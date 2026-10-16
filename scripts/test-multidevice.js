#!/usr/bin/env node

const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const {
  createMultidevicePayload,
  createMultideviceRolePayload,
  validateMultideviceAssignment
} = require('../src/script.js');
const script = readFileSync('src/script.js', 'utf8');

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

{
  const game = phase => ({ phase, players: ['Ana', 'Bia', 'Caio'], multidevice: { claims: { Ana: 'tok-ana' } } });
  const anaConn = { open: true, playerIndex: 0, guestToken: 'tok-ana' };
  const otherConn = { open: true };
  const connections = [anaConn, otherConn];

  // Setup: free choice, but not a slot held by another open device.
  assert.equal(validateMultideviceAssignment(game('setup'), connections, otherConn, 1, 'tok-x'), null);
  assert.equal(validateMultideviceAssignment(game('setup'), connections, otherConn, 0, 'tok-x'), 'taken');
  assert.equal(validateMultideviceAssignment(game('setup'), connections, otherConn, 9, 'tok-x'), 'invalid');
  assert.equal(validateMultideviceAssignment(game('setup'), connections, otherConn, 1, ''), 'invalid');
  // Setup: switching own player is allowed.
  assert.equal(validateMultideviceAssignment(game('setup'), connections, anaConn, 2, 'tok-ana'), null);

  // Mid-game: no switching (impostor cannot read another player's secret or vote twice).
  assert.equal(validateMultideviceAssignment(game('vote'), connections, anaConn, 1, 'tok-ana'), 'locked');
  assert.equal(validateMultideviceAssignment(game('story'), connections, otherConn, 1, 'tok-x'), 'locked');
  // Mid-game: cannot steal a claimed slot after its device dropped.
  const dropped = [{ open: false, playerIndex: 0, guestToken: 'tok-ana' }, otherConn];
  assert.equal(validateMultideviceAssignment(game('roles'), dropped, otherConn, 0, 'tok-x'), 'taken');
  // Mid-game: same device token may reconnect to its own player.
  const rejoin = { open: true };
  assert.equal(validateMultideviceAssignment(game('roles'), dropped, rejoin, 0, 'tok-ana'), null);
  // Final screen reopens assignment.
  assert.equal(validateMultideviceAssignment(game('final'), connections, anaConn, 1, 'tok-ana'), null);
}

assert.match(script, /assignRemotePlayer\(conn, Number\(data\.playerIndex\), data\.token\)/);
assert.doesNotMatch(script, /conn\.playerIndex = Number\(data\.playerIndex\)/);

console.log('multidevice tests passed');
