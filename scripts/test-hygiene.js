#!/usr/bin/env node

const assert = require('node:assert/strict');
const { existsSync, readFileSync } = require('node:fs');

const html = readFileSync('src/index.html', 'utf8');
const script = readFileSync('src/script.js', 'utf8');
const style = readFileSync('src/style.css', 'utf8');
const themes = readFileSync('src/themes.css', 'utf8');
const serviceWorker = readFileSync('src/service-worker.js', 'utf8');

assert.match(html, /peerjs@1\.5\.5/);
assert.match(html, /qrcodejs\/1\.0\.0/);
assert.equal(/fonts\.googleapis|fonts\.gstatic|Fredoka|Manrope|Outfit|Nunito/.test(html + style), false);
assert.equal(/buymeacoffee|bmc-embed-host/i.test(html), false);
assert.equal(/resultOverlay|result-next-turn-btn/.test(html), false);
assert.equal(/screen-score-manager|score-manager/.test(html + script + style), false);
assert.equal(/pack-file|installed-packs|user-id|add-word|add-challenge/.test(html + style), false);
assert.equal(/Riram|Ninguém riu|Sortear Piada|Vez de fazer a mímica|Dois Times|Time A|Time B|add-team|step-ffa|leaderboard-filter|wordbank-sidebar|wordbank-list|wordbank-challenge|wordbank-install|wordbank-add/.test(html + style), false);
assert.doesNotMatch(html, /window\.location\.replace/);
assert.match(html, /Conte uma história, esconda o impostor e vote no final/);
assert.match(html, /<select class="inp" id="language-select">/);
assert.doesNotMatch(script, /function resetHomeCopy|function configureStaticScreens/);
assert.match(script, /const I18N =/);
assert.match(script, /new window\.Peer/);
assert.match(script, /new window\.QRCode/);
assert.match(style, /\.game-actions-grid:has\(\.vote-option\)/);

// Every asset referenced by the service worker shell and the CSS must exist under src/.
const shellAssets = [...serviceWorker.matchAll(/'\.\/([^']+)'/g)].map(match => match[1]);
const cssAssets = [...(style + themes).matchAll(/url\("?\.\/([^")]+)"?\)/g)].map(match => match[1]);
assert.ok(shellAssets.length > 10, 'service worker shell list not found');
for (const asset of [...shellAssets, ...cssAssets]) {
  assert.equal(existsSync(`src/${asset}`), true, `missing asset: src/${asset}`);
}
assert.equal(shellAssets.some(asset => asset.endsWith('.mp3')), false, 'music must not be precached');

// User/pack-provided text interpolated into HTML templates must go through escapeHtml.
assert.doesNotMatch(script, /\$\{(player|entry\.name|entry\.player|player\.name|category\.(id|icon|name)|state\.(prompt|twist)|state\.category\.(icon|name))\}/);

console.log('hygiene tests passed');
