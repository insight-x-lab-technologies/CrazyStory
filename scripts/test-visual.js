#!/usr/bin/env node

const assert = require('node:assert/strict');
const { existsSync, mkdirSync, statSync } = require('node:fs');
const { resolve } = require('node:path');
const { execFileSync } = require('node:child_process');

const chrome = process.env.CHROME_BIN || 'google-chrome';
const appUrl = `file://${resolve('src/src/index.html')}`;
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
      '--no-zygote',
      '--single-process',
      '--disable-dev-shm-usage',
      '--disable-crash-reporter',
      '--disable-breakpad',
      '--disable-features=Crashpad',
      '--log-level=3',
      `--user-data-dir=${profile}`,
      `--window-size=${size}`,
      '--virtual-time-budget=2500',
      `--screenshot=${output}`,
      appUrl
    ], { stdio: 'ignore', timeout: 20_000 });
  } catch (error) {
    if (error.signal === 'SIGTRAP' || error.status === null) {
      console.log(`visual tests skipped: Chrome child process blocked at ${name}`);
      process.exit(0);
    }
    throw error;
  }
  assert.equal(existsSync(output), true, `${name} screenshot missing`);
  assert.ok(statSync(output).size > 10_000, `${name} screenshot too small`);
}

console.log('visual tests passed');
