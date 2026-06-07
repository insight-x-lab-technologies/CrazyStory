#!/usr/bin/env node

const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');

const html = readFileSync('src/src/index.html', 'utf8');
const redirect = readFileSync('src/index.html', 'utf8');
const script = readFileSync('src/src/script.js', 'utf8');
const style = readFileSync('src/src/style.css', 'utf8');

assert.match(html, /peerjs@1\.5\.5/);
assert.match(html, /qrcodejs\/1\.0\.0/);
assert.equal(/fonts\.googleapis|fonts\.gstatic|Fredoka|Manrope|Outfit|Nunito/.test(html + style), false);
assert.equal(/buymeacoffee|bmc-embed-host/i.test(html), false);
assert.equal(/resultOverlay|result-next-turn-btn/.test(html), false);
assert.equal(/screen-score-manager|score-manager/.test(html + script + style), false);
assert.equal(/pack-file|installed-packs|user-id|add-word|add-challenge/.test(html + style), false);
assert.equal(/Riram|Ninguém riu|Sortear Piada|Vez de fazer a mímica|Dois Times|Time A|Time B|add-team|step-ffa|leaderboard-filter|wordbank-sidebar|wordbank-list|wordbank-challenge|wordbank-install|wordbank-add/.test(html + style), false);
assert.match(redirect, /window\.location\.replace\('src\/index\.html'\)/);
assert.match(html, /Conte uma história, esconda o impostor e vote no final/);
assert.match(html, /<select class="inp" id="language-select">/);
assert.doesNotMatch(script, /function resetHomeCopy|function configureStaticScreens/);
assert.match(script, /const I18N =/);
assert.match(script, /new window\.Peer/);
assert.match(script, /new window\.QRCode/);
assert.match(style, /\.game-actions-grid:has\(\.vote-option\)/);

console.log('hygiene tests passed');
