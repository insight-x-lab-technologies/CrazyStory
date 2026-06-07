#!/usr/bin/env node

const assert = require('node:assert/strict');
const { normalizeVolume } = require('../src/src/script.js');

assert.equal(normalizeVolume(0), 0);
assert.equal(normalizeVolume(32), 0.32);
assert.equal(normalizeVolume(100), 1);
assert.equal(normalizeVolume(150), 1);
assert.equal(normalizeVolume(-20), 0);
assert.equal(normalizeVolume(''), 0);

console.log('audio tests passed');
