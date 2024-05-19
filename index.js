"use strict";

function findValues(object, k, acc) {
  for (const [key, value] of Object.entries(object)) {
    if (key === k) {
      acc.push(value)
    }
    if (typeof value === 'object') {
      findValues(value, k, acc)
    }
  }
}

const jsonest_handler = {
  get(target, prop, receiver) {
    const values = []
    findValues(target, prop, values)
    if (values.length === 0) {
      return undefined
    } else if (values.length === 1) {
      return values[0]
    } else {
      return values
    }
  }
}

function jsonest(object) {
  return new Proxy(object, jsonest_handler)
}

module.exports = jsonest;