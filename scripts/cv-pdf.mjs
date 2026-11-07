// Turns cv/cv-fr.md and cv/cv-en.md into the two PDFs served by the site.
// Paste the Markdown exported from the CV doc into those files, then run:
//   node scripts/cv-pdf.mjs
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const CHROME = process.env.CHROME ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const css = readFileSync('cv/cv.css', 'utf8');

const inline = (text) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');

function render(markdown) {
  const out = [];
  let inList = false;
  const closeList = () => {
    if (inList) out.push('</ul>');
    inList = false;
  };
  for (const raw of markdown.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith('- ')) {
      if (!inList) out.push('<ul>');
      inList = true;
      out.push(`<li>${inline(line.slice(2))}</li>`);
      continue;
    }
    closeList();
    if (line.startsWith('## ')) out.push(`<h2>${inline(line.slice(3))}</h2>`);
    else if (line.startsWith('# ')) out.push(`<h1>${inline(line.slice(2))}</h1>`);
    else out.push(`<p>${inline(line)}</p>`);
  }
  closeList();
  return out.join('\n');
}

const dir = mkdtempSync(join(tmpdir(), 'cv-'));
for (const lang of ['fr', 'en']) {
  const body = render(readFileSync(`cv/cv-${lang}.md`, 'utf8'));
  const html = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><title>CV Amar Dia</title><style>${css}</style></head><body>${body}</body></html>`;
  const htmlPath = join(dir, `cv-${lang}.html`);
  writeFileSync(htmlPath, html);
  writeFileSync(`cv/cv-${lang}.preview.html`, html);
  execFileSync(CHROME, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--user-data-dir=${join(dir, 'profile')}`,
    `--print-to-pdf=${resolve(`public/CV_Amar_Dia_${lang.toUpperCase()}.pdf`)}`,
    `file:///${htmlPath.replace(/\\/g, '/')}`,
  ], { stdio: 'ignore' });
}
