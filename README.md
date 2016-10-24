# dva-logger

[![NPM version](https://img.shields.io/npm/v/dva-logger.svg?style=flat)](https://npmjs.org/package/dva-logger)
[![NPM downloads](http://img.shields.io/npm/dm/dva-logger.svg?style=flat)](https://npmjs.org/package/dva-logger)

redux-logger plugin for dva.

---

## Install

```bash
$ npm install dva-logger --save
```

## Usage

```javascript
import createLogger from 'dva-logger';

const app = dva();
app.use(createLogger(opts));
```

### opts

[redux-logger](https://github.com/evgenyrodionov/redux-logger#options).

## License

[MIT](https://tldrlegal.com/license/mit-license)
