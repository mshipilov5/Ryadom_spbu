import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/app/globals.css', import.meta.url), 'utf8');
const header = readFileSync(new URL('../src/modules/navigation/components/SiteHeader.tsx', import.meta.url), 'utf8');
const compact = css.replace(/\s+/g, ' ');

test('uses the approved SPbU accent and font', () => {
  assert.match(css, /--spbu-terracotta:\s*#9f2d20/i);
  assert.match(css, /--spbu-gray:\s*#a8adb4/i);
  assert.match(css, /Open Sans/);
  assert.match(header, /spbu-logo-white\.png/);
});

test('desktop shell uses minmax(0, 1fr) and intrinsic width constraints', () => {
  assert.match(compact, /grid-template-columns:\s*244px minmax\(0, 1fr\)/);
  assert.match(compact, /\.publicMain \{[^}]*min-width:\s*0/);
  assert.match(compact, /box-sizing:\s*border-box/);
});

test('sidebar background stretches while inner menu is sticky', () => {
  assert.match(compact, /\.siteHeader \{[^}]*align-self:\s*stretch/);
  assert.match(compact, /\.siteHeaderInner \{[^}]*position:\s*sticky/);
  assert.doesNotMatch(compact, /\.siteHeader \{[^}]*height:\s*100vh/);
});

test('mobile menu collapses rather than scrolling horizontally', () => {
  assert.match(compact, /@media \(max-width:\s*700px\)/);
  assert.match(compact, /\.siteNav \{\s*display:\s*none/);
  assert.match(compact, /\.siteNav\.isOpen \{ display:\s*flex/);
  assert.doesNotMatch(compact, /white-space:\s*nowrap;\s*overflow:\s*auto hidden/);
});

test('toggle is accessible and closes on Escape and navigation', () => {
  for (const value of ['aria-controls={menuId}', 'aria-expanded={isMenuOpen}', "event.key === 'Escape'", 'onClick={closeMenu}', 'useId()', 'useState(false)']) {
    assert.ok(header.includes(value), value);
  }
});

test('mobile action buttons are in flow and crisis link always visible', () => {
  assert.match(compact, /\.siteHeaderActions \{\s*display:\s*grid/);
  assert.doesNotMatch(compact, /\.siteHeaderActions \{[^}]*position:\s*absolute/);
  assert.ok(header.includes('Нужна срочная помощь'));
  assert.match(compact, /min-height:\s*44px/);
});

test('Safari input focus does not cause automatic zoom', () => {
  assert.match(compact, /\.publicShell \.publicMain input[^}]*font-size:\s*max\(16px, 1rem\)/);
  assert.match(compact, /text-size-adjust:\s*100%/);
});

test('no unsafe HTML or untrusted dynamic markup', () => {
  assert.doesNotMatch(header, /dangerouslySetInnerHTML|innerHTML|eval\(/);
  assert.ok(header.includes('href={href}'));
  assert.ok(header.includes('const NAVIGATION: readonly NavigationItem[]'));
});
