## @magic-modules/video-embed

youtube embedding for [@magic](https://magic.github.io/core)

[html docs and demo](https://magic-modules.github.io/video-embed)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-modules/video-embed.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/video-embed
[travis-image]: https://img.shields.io/travis/com/magic-modules/video-embed/master
[travis-url]: https://travis-ci.com/magic-modules/video-embed
[appveyor-image]: https://img.shields.io/appveyor/ci/magicmodules/video-embed/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicmodules/video-embed/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/video-embed/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/video-embed
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/video-embed.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/video-embed.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/video-embed/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/video-embed

#### install:
```bash
npm install --save-exact @magic-modules/video-embed
```

#### usage:
```javascript
VideoEmbed({
  src: "youtube id or vimeo id or url to video" },
  width: '300px', // any css size unit accepted. numbers get appended with px
  height: 300, // any css size unit accepted. numbers get appended with px
  style: { margin: '1em' },
  host: 'https://youtube.com/watch?v=',
}),
```
