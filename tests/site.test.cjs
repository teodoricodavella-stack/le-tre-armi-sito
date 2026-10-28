const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const pages = fs.readdirSync(root).filter(file => file.endsWith('.html'));
for (const file of pages) {
  test(`${file}: document metadata, local links and assets`, () => {
    const html = fs.readFileSync(path.join(root, file), 'utf8');
    assert.match(html, /<html lang="it">/);
    assert.match(html, /name="viewport"/);
    assert.match(html, /<title>[^<]+<\/title>/);
    assert.match(html, /name="description" content="[^"]+"/);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(ids.length, new Set(ids).size, 'duplicate id');
    for (const [, value] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (/^(?:https?:|mailto:)/.test(value)) continue;
      const [target, anchor] = value.split('#');
      const dest = path.join(root, target || file);
      assert.ok(fs.existsSync(dest), `${value} missing from ${file}`);
      if (anchor) assert.match(fs.readFileSync(dest, 'utf8'), new RegExp(`id="${anchor}"`), `${value} broken anchor`);
    }
    assert.doesNotMatch(html, /FOTO HERO|FOTO EVENTO|FOTO TEODORICO|info@letrearmi/);
  });
}
