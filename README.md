## @magic-modules/video-embed

this is the [@magic-modules(https://github.com/magic-modules) VideoEmbed component.
it renders videos from any http url that allows iframe embedding.

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

### installation
```bash
npm install @magic-modules/video-embed
```

### usage

#### youtube
in a page/component, just pass a video id to the VideoEmbed module.
```javascript
VideoEmbed('ecIWPzGEbFc')
```

#### vimeo
if the video id is a number, the video is assumed to be hosted on vimeo
```javascript
VideoEmbed(153090637)
VideoEmbed('153090637')
```

#### other video hosts

videos from arbitrary hosts can be included as well, as long as those hosts allow iframe embeds',
```javascript
VideoEmbed('https://videopress.com/embed/kUJmAcSf')
```

#### props
you can pass a width and height, a style object and any other props to the video.'),
```javascript
VideoEmbed({ src: '8QYWGCEm2Dc', width: '50%', style: { margin: 1em 0 0; } })
```

#### fixed video dimensions
to set a fixed video size, simply add both a height and a width value (px, em, rem, vh, pt).
```javascript
  VideoEmbed({ src: 'SMhwddNQSWQ', width: '300px', height: '900px' }),
```

### changelog

##### 0.0.1
first release

##### 0.0.2
update docs

##### 0.0.3
* require node 13.5.0
* ready for markdown

##### 0.0.4
bump required node version to 14.2.0

##### 0.0.5 
bump required node version to 14.15.4

##### 0.0.6 - unreleased
...
