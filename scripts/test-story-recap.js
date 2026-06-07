#!/usr/bin/env node

const assert = require('node:assert/strict');
const { formatStoryRecap } = require('../src/src/script.js');

const recap = formatStoryRecap([
  { round: 1, player: 'Ana', text: 'Achou uma chave falante.' },
  { round: 2, player: 'Bia', text: '   ' },
  { round: '3', player: 'Caio', text: '<script>alert(1)</script>' },
  { round: 4, text: 'sem jogador' },
  null
]);

assert.deepEqual(recap, [
  { round: 1, player: 'Ana', text: 'Achou uma chave falante.' },
  { round: 2, player: 'Bia', text: 'Frase contada sem registro.' },
  { round: 3, player: 'Caio', text: '<script>alert(1)</script>' }
]);

console.log('story recap tests passed');
