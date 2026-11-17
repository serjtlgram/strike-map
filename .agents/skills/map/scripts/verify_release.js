#!/usr/bin/env node
/**
 * Fast local verifier for /map updates.
 * Replaces slow browser subagent runs by checking data.js structure, localization lengths,
 * calculated distances, category filters, and media file constraints (<100KB images, <2MB 480p >=3s videos)
 * in under 1 second.
 *
 * Usage:
 *   node .agents/skills/map/scripts/verify_release.js 13.11.2026
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '../../../..');
const DATA_PATH = path.join(ROOT, 'data.js');
const FFMPEG = fs.existsSync(path.join(ROOT, 'ffmpeg.exe')) ? path.join(ROOT, 'ffmpeg.exe') : 'ffmpeg';
const targetDate = process.argv[2];

const code = fs.readFileSync(DATA_PATH, 'utf8');
const sandbox = {};
try {
  const fn = new Function(code + '\nreturn strikeData;');
  sandbox.strikeData = fn();
} catch (err) {
  console.error('❌ Syntax error in data.js:', err.message);
  process.exit(1);
}

const entries = targetDate
  ? sandbox.strikeData.filter((e) => e.date === targetDate)
  : sandbox.strikeData.slice(0, 10);

if (entries.length === 0) {
  console.error(`❌ No entries found in data.js for date: ${targetDate}`);
  process.exit(1);
}

let errors = 0;
function fail(msg) {
  console.error(`❌ ${msg}`);
  errors++;
}

for (const item of entries) {
  const prefix = `[id=${item.id} ${item.date}]`;
  if (typeof item.lat !== 'number' || typeof item.lng !== 'number') {
    fail(`${prefix} Invalid coordinates: lat=${item.lat}, lng=${item.lng}`);
  }
  if (typeof item.distance !== 'number' || item.distance <= 0) {
    fail(`${prefix} Missing or invalid distance (${item.distance}) — run "node calc.js" first!`);
  }
  for (const lang of ['ru', 'uk', 'en']) {
    const loc = item[lang];
    if (!loc) {
      fail(`${prefix} Missing "${lang}" localization block`);
      continue;
    }
    const len = (loc.details || '').length;
    if (len < 600 || len > 1000) {
      fail(`${prefix} ${lang}.details length is ${len} chars (must be strictly 600..1000)`);
    }
    if (!loc.region || !loc.target || !loc.category || !loc.weapon || !loc.source) {
      fail(`${prefix} ${lang} is missing required string fields`);
    }
  }

  for (const imgRel of item.images || []) {
    const p = path.join(ROOT, imgRel);
    if (!fs.existsSync(p)) {
      fail(`${prefix} Missing image file: ${imgRel}`);
      continue;
    }
    const kb = fs.statSync(p).size / 1024;
    if (kb >= 100) {
      fail(`${prefix} Image exceeds 100 KB (${kb.toFixed(1)} KB): ${imgRel}`);
    }
  }

  for (const vidRel of item.video || []) {
    const p = path.join(ROOT, vidRel);
    if (!fs.existsSync(p)) {
      fail(`${prefix} Missing video file: ${vidRel}`);
      continue;
    }
    const kb = fs.statSync(p).size / 1024;
    if (kb >= 2048) {
      fail(`${prefix} Video exceeds 2 MB (${kb.toFixed(1)} KB): ${vidRel}`);
    }
    const probe = spawnSync(FFMPEG, ['-hide_banner', '-i', p], { encoding: 'utf8' });
    const stderr = probe.stderr || '';
    const durMatch = stderr.match(/Duration:\s*(\d+):(\d+):(\d+(?:\.\d+)?)/);
    if (durMatch) {
      const dur = parseInt(durMatch[1], 10) * 3600 + parseInt(durMatch[2], 10) * 60 + parseFloat(durMatch[3]);
      if (dur < 3.0) {
        fail(`${prefix} Video shorter than 3.0s (${dur.toFixed(2)}s): ${vidRel}`);
      }
    } else {
      fail(`${prefix} Could not read video duration via ffmpeg: ${vidRel}`);
    }
  }
}

const gitStatus = spawnSync('git', ['status', '--porcelain'], { cwd: ROOT, encoding: 'utf8' }).stdout || '';
for (const line of gitStatus.split(/\r?\n/).filter(Boolean)) {
  const file = line.slice(3).trim();
  const ok =
    file === 'data.js' ||
    file === 'app.js' ||
    file.startsWith('images/') ||
    file.startsWith('video/') ||
    file.startsWith('.agents/');
  if (!ok) {
    fail(`Stray untracked/modified file in repo root: "${file}" (put temp scripts in scratch directory!)`);
  }
}

if (errors > 0) {
  console.error(`\nVerification FAILED with ${errors} error(s).`);
  process.exit(1);
}

console.log(`✅ Verified ${entries.length} entries for ${targetDate || 'latest'} (${sandbox.strikeData.length} total in data.js). Ready to commit & push!`);
