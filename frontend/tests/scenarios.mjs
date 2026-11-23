import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
const base = new URL('../src/modules/ui-states/model/scenarios.ts', import.meta.url);
const source = fs.readFileSync(base, 'utf8');
const scenarioIds = ['consent-favorites','consent-publication','form-error','network-offline','server-unavailable','empty-favorites','empty-events','empty-moderation','sso-unavailable','appointment-unavailable','contact-expired','logout'];
test('all 12 scenarios are declared', () => scenarioIds.forEach(id => assert.ok(source.includes(`'${id}'`), id)));
test('official appointment link and 112 action exist', () => {
 const src = fs.readFileSync(new URL('../src/modules/ui-states/components/ScenarioScreen.tsx', import.meta.url), 'utf8');
 assert.match(src, /anketa\.spbu\.ru\/psikhologicheskaya-klinika-konsultatsiya/);
 assert.match(src, /tel:112/);
});
test('there are no other-module imports', () => {
 const src = fs.readFileSync(new URL('../src/modules/ui-states/components/UiStatesShell.tsx', import.meta.url), 'utf8') + fs.readFileSync(new URL('../src/modules/ui-states/components/ScenarioScreen.tsx', import.meta.url), 'utf8');
 assert.doesNotMatch(src, /@\/modules\/(education|crisis|practices|auth)/);
});
