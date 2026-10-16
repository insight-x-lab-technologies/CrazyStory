#!/usr/bin/env node

const assert = require('node:assert/strict');
const { existsSync, mkdirSync, statSync } = require('node:fs');
const { resolve } = require('node:path');
const { execFileSync } = require('node:child_process');

const chrome = process.env.CHROME_BIN || 'google-chrome';
// CI sets VISUAL_TESTS_REQUIRED=1 so a missing/blocked Chrome fails instead of silently skipping.
const required = process.env.VISUAL_TESTS_REQUIRED === '1';

function skip(reason) {
  if (required) {
    console.error(`visual tests failed: ${reason} (VISUAL_TESTS_REQUIRED=1)`);
    process.exit(1);
  }
  console.log(`visual tests skipped: ${reason}`);
  process.exit(0);
}
const appUrl = `file://${resolve('src/index.html')}`;
const outDir = '/tmp/crazystory-visual';
const viewports = [
  ['mobile-portrait', '390,844'],
  ['mobile-landscape', '844,390'],
  ['tablet-portrait', '768,1024'],
  ['desktop-wide', '1280,720']
];

mkdirSync(outDir, { recursive: true });

for (const [name, size] of viewports) {
  const output = `${outDir}/${name}.png`;
  const profile = `${outDir}/profile-${name}`;
  mkdirSync(profile, { recursive: true });
  try {
    execFileSync(chrome, [
      '--headless',
      '--disable-gpu',
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-crash-reporter',
      '--disable-breakpad',
      '--disable-features=Crashpad',
      '--log-level=3',
      '--disable-background-networking',
      '--no-first-run',
      `--user-data-dir=${profile}`,
      `--window-size=${size}`,
      '--virtual-time-budget=2500',
      `--screenshot=${output}`,
      appUrl
    ], { stdio: 'ignore', timeout: 60_000 });
  } catch (error) {
    if (error.code === 'ENOENT') skip(`${chrome} not found (set CHROME_BIN)`);
    if (error.signal === 'SIGTRAP' || error.status === null) skip(`Chrome child process blocked at ${name}`);
    throw error;
  }
  assert.equal(existsSync(output), true, `${name} screenshot missing`);
  assert.ok(statSync(output).size > 10_000, `${name} screenshot too small`);
}

console.log('visual tests passed');
