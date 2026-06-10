import puppeteer from 'puppeteer';
import { readdir, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCREENSHOT_DIR = join(__dirname, 'temporary screenshots');

const url = process.argv[2];
const label = process.argv[3];

if (!url) {
  console.error('Usage: node screenshot.mjs <url> [label]');
  process.exit(1);
}

async function getNextNumber() {
  await mkdir(SCREENSHOT_DIR, { recursive: true });
  const files = await readdir(SCREENSHOT_DIR);
  const numbers = files
    .filter((f) => f.startsWith('screenshot-') && f.endsWith('.png'))
    .map((f) => {
      const match = f.match(/^screenshot-(\d+)/);
      return match ? parseInt(match[1], 10) : 0;
    });
  return numbers.length > 0 ? Math.max(...numbers) + 1 : 1;
}

async function main() {
  const n = await getNextNumber();
  const filename = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
  const filepath = join(SCREENSHOT_DIR, filename);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: filepath, fullPage: true });
  await browser.close();

  console.log(`Screenshot saved to ${filepath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
