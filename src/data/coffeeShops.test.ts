import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import { INITIAL_COFFEE_SHOPS } from './coffeeShops';

test('deployment snapshot contains the exported shops and panorama photo', () => {
  assert.equal(INITIAL_COFFEE_SHOPS.length, 10);
  assert.ok(INITIAL_COFFEE_SHOPS.some((shop) => shop.id === 'dose-dos-cafe'));

  const shopWithPanorama = INITIAL_COFFEE_SHOPS.find((shop) => shop.id === '250-cafe');
  assert.equal(shopWithPanorama?.panorama360Url, '/images/250-cafe-panorama.jpg');
  const panorama = readFileSync(new URL('../../public/images/250-cafe-panorama.jpg', import.meta.url));
  assert.ok(panorama.byteLength > 100_000);
});
