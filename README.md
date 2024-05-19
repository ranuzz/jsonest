# jsonest

> Utility functions to handle deeply nested JSON

### install

```
npm install --save jsonest
```

### Usage

```
const jsonest = require('jsonest');

const data = {
  a: 1,
  b: {
    a: 2
  },
  c: {
    d: {
      a: 3
    }
  }
};

const datan = jsonest(data)

console.log(datan.a)

// [ 1, 2, 3 ]
```
