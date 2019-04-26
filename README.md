## @magic-modules/youtube

youtube embedding for [@magic](https://magic.github.io/core)

[html docs and demo](https://magic-modules.github.io/youtube)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-modules/youtube.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/youtube
[travis-image]: https://api.travis-ci.org/magic-modules/youtube.svg?branch=master
[travis-url]: https://travis-ci.org/magic-modules/youtube
[appveyor-image]: https://img.shields.io/appveyor/ci/jaeh/youtube/master.svg
[appveyor-url]: https://ci.appveyor.com/project/jaeh/core/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/youtube/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/youtube
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/youtube.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/youtube.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/youtube/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/youtube

#### install:
```bash
npm install --save-exact @magic-modules/youtube
```

#### usage:

##### import:
```javascript
// assets/index.js:

module.exports = {
  //... other entries
  Youtube: require('@magic-modules/youtube'),
}
```

##### use tag
```javascript
// in any component view
const component = {
  View: () => [
    Youtube('8QYWGCEm2Dc'),
    // or
    Youtube({ ytid: '8QYWGCEm2Dc', width: 200 }),
  ],
}
```
