"use strict";

const test = require('node:test');
const assert = require('node:assert');
const jsonest = require('./');

test('encapsulate the target object', (t) => {
  const data = {
    "a" : 1
  };
  const datan = jsonest(data);
  assert.strictEqual(datan.a, 1);
});

test('find key values in nested object', (t) => {
  const data = {
    "a" : 1,
    "c" : {
      "d": 1
    }
  };
  const datan = jsonest(data);
  assert.strictEqual(datan.a, 1)
  assert.strictEqual(datan.b, undefined)
  assert.deepEqual(datan.c, {d: 1})
  assert.strictEqual(datan.d, 1)
});

test('find all key values in nested object', (t) => {
  const data = {
    "a" : 1,
    "b" : {
      "a": 2
    },
    "c": {
      "e": {
        "a": 3
      }
    }
  };
  const datan = jsonest(data);
  assert.deepEqual(datan.a, [1,2,3])
});