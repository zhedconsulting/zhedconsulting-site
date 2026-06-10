import puppeteer from 'puppeteer';
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

const sections = ['hero','problem','system','proof','about','pricing','faq','book','footer'];
for (const id of sections) {
  const selector = id === 'footer' ? 'footer' : `#${id}`;
  const el = await page.$(selector);
  if (!el) { console.log('missing', id); continue; }
  const box = await el.boundingBox();
  await page.screenshot({
    path: `./temporary screenshots/sec-${id}.png`,
    clip: { x: 0, y: box.y, width: 390, height: Math.min(box.height, 2600) }
  });
  console.log('captured', id, Math.round(box.height) + 'px');
}
await browser.close();
