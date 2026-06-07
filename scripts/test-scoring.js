#!/usr/bin/env node

const assert = require('node:assert/strict');
const {
  calculateVoteResult,
  applyRoundScore,
  applyScoreCorrection,
  normalizeImpostorCount,
  pickImpostorIndexes
} = require('../src/src/script.js');

const players = ['Ana', 'Bia', 'Caio', 'Duda'];
const impostorIndex = 2;
const scoring = { correctPoints: 6, impostorPoints: 12 };

{
  const votes = { Ana: 2, Bia: 2, Caio: 0, Duda: 1 };
  const result = calculateVoteResult(players, impostorIndex, votes);
  assert.equal(result.groupFoundImpostor, true);
  assert.equal(result.suspected, 'Caio');
  assert.deepEqual(result.correctVoters.sort(), ['Ana', 'Bia']);
  const scores = applyRoundScore({}, players, impostorIndex, result, scoring, false);
  assert.deepEqual(scores, { Ana: 6, Bia: 6 });
}

{
  const votes = { Ana: 1, Bia: 0, Caio: 0, Duda: 1 };
  const result = calculateVoteResult(players, impostorIndex, votes);
  assert.equal(result.groupFoundImpostor, false);
  assert.equal(result.tied, true);
  const scores = applyRoundScore({}, players, impostorIndex, result, scoring, false);
  assert.deepEqual(scores, { Caio: 12 });
}

{
  const votes = { Ana: 2, Bia: 2, Caio: 2, Duda: 0 };
  const result = calculateVoteResult(players, impostorIndex, votes);
  assert.equal(result.groupFoundImpostor, true);
  const scores = applyRoundScore({ Caio: 3 }, players, impostorIndex, result, scoring, true);
  assert.deepEqual(scores, { Caio: 15 });
}

{
  const votes = { Ana: 1, Bia: 1, Caio: 0, Duda: 1 };
  const result = calculateVoteResult(players, impostorIndex, votes);
  assert.equal(result.groupFoundImpostor, false);
  assert.equal(result.suspected, 'Bia');
  const scores = applyRoundScore({ Caio: 2 }, players, impostorIndex, result, scoring, false);
  assert.deepEqual(scores, { Caio: 14 });
}

{
  assert.equal(normalizeImpostorCount(2, 6), 1);
  assert.equal(normalizeImpostorCount(2, 7), 2);
  const picked = pickImpostorIndexes(8, 2);
  assert.equal(picked.length, 2);
  assert.equal(new Set(picked).size, 2);
  assert.ok(picked.every(index => index >= 0 && index < 8));
}

{
  const bigPlayers = ['Ana', 'Bia', 'Caio', 'Duda', 'Eva', 'Fê', 'Gui'];
  const votes = { Ana: 4, Bia: 4, Caio: 2, Duda: 4, Eva: 4, Fê: 2, Gui: 1 };
  const result = calculateVoteResult(bigPlayers, [2, 4], votes);
  assert.equal(result.groupFoundImpostor, true);
  assert.equal(result.caughtImpostor, 'Eva');
  assert.deepEqual(result.correctVoters.sort(), ['Ana', 'Bia', 'Caio', 'Duda', 'Eva', 'Fê']);
  const scores = applyRoundScore({}, bigPlayers, [2, 4], result, scoring, true);
  assert.deepEqual(scores, { Eva: 12 });
}

{
  const bigPlayers = ['Ana', 'Bia', 'Caio', 'Duda', 'Eva', 'Fê', 'Gui'];
  const votes = { Ana: 1, Bia: 1, Caio: 0, Duda: 1, Eva: 3, 'Fê': 3, Gui: 1 };
  const result = calculateVoteResult(bigPlayers, [2, 4], votes);
  assert.equal(result.groupFoundImpostor, false);
  const scores = applyRoundScore({}, bigPlayers, [2, 4], result, scoring, false);
  assert.deepEqual(scores, { Caio: 12, Eva: 12 });
}

{
  assert.deepEqual(applyScoreCorrection({ Ana: 6 }, 'Ana', -1), { Ana: 5 });
  assert.deepEqual(applyScoreCorrection({}, 'Bia', 1), { Bia: 1 });
}

console.log('scoring tests passed');
