# ${title}

this is the
[@magic-modules](https://github.com/magic-modules)
VideoEmbed component. It renders videos from any http url that allows iframe embedding.

<GitBadges>@magic-modules/video-embed</GitBadges>

## installation

`npm install @magic-modules/video-embed`

## usage

### #usage- youtube

in a page/component, just pass a video id to the VideoEmbed module.

#### javascript
`VideoEmbed('ecIWPzGEbFc')`

#### markdown
`<VideoEmbed src="ecIWPzGEbFc"></VideoEmbed>`

renders

<VideoEmbed src="ecIWPzGEbFc"></VideoEmbed>

### #usage- vimeo

if the video id is a number, the video is assumed to be hosted on vimeo

#### javascript
`VideoEmbed(116582567)`

#### markdown
`<VideoEmbed>116582567</VideoEmbed>`

renders

<VideoEmbed src="116582567"></VideoEmbed>

#### #usage-others other video hosts

videos from arbitrary hosts can be included as well, as long as those hosts allow iframe embeds


#### javascript
`VideoEmbed('https://videopress.com/embed/kUJmAcSf')`

#### markdown
`<VideoEmbed src="https://videopress.com/embed/kUJmAcSf"></VideoEmbed>`

renders

<VideoEmbed src="https://videopress.com/embed/kUJmAcSf"></VideoEmbed>

## props

you can pass a width and height, and any other props to the video.

#### javascript
`VideoEmbed({ src: 'tIxHmsWCd7g', width: "50%", height: 200 })`

#### markdown
`<VideoEmbed src="tIxHmsWCd7g" width="50%" height="200"></VideoEmbed>`

renders

<VideoEmbed src="tIxHmsWCd7g" width="50%" height="200px"></VideoEmbed>

### fixed-dimensions

to set a fixed video size, simply add both a height and a width value (px, em, rem, vh, pt).

#### javascript
`VideoEmbed({ src: 'E-dUveGINTg', width: "300px", height: "900px" })`

#### markdown
`<VideoEmbed src="E-dUveGINTg" width="300px" height="900px"></VideoEmbed>`

renders

<VideoEmbed src="E-dUveGINTg" width="300px" height="900px"></VideoEmbed>

## source

the source for this page is in the
[example directory](https://github.com/magic-modules/video-embed/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
