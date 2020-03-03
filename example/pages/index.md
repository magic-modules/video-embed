# ${state.title},

this is the
[@magic-modules](https://github.com/magic-modules)
VideoEmbed component. It renders videos from any http url that allows iframe embedding.

<GitBadges>magic-modules/video-embed</GitBadges>

## installation

<Pre>npm install @magic-modules/video-embed</Pre>

## usage

### #usage- youtube

in a page/component, just pass a video src to the VideoEmbed module.

<Pre>
&lt;VideoEmbed src="ecIWPzGEbFc">&lt;/VideoEmbed>
</Pre>

renders

<VideoEmbed src="ecIWPzGEbFc"></VideoEmbed>

### #usage- vimeo

if the video src is a number, the video is assumed to be hosted on vimeo

<Pre>
&lt;VideoEmbed>116582567&lt;/VideoEmbed>
</Pre>

renders

<VideoEmbed>116582567</VideoEmbed>

#### #usage-others other video hosts

videos from arbitrary hosts can be included as well, as long as those hosts allow iframe embeds

<Pre>
&lt;VideoEmbed src="https://videopress.com/embed/kUJmAcSf">&lt;/VideoEmbed>
</Pre>

renders

<VideoEmbed src="https://videopress.com/embed/kUJmAcSf"></VideoEmbed>

## props

you can pass a width and height, and any other props to the video.

<Pre>
&lt;VideoEmbed
  src="8QYWGCEm2Dc"
  width="50%"
  height="200"
>&lt;VideoEmbed>
</Pre>

renders

<VideoEmbed
  src="8QYWGCEm2Dc"
  width="50%"
  height="200"
></VideoEmbed>

### fixed-dimensions

to set a fixed video size, simply add both a height and a width value (px, em, rem, vh, pt).

<Pre>
&lt;VideoEmbed src="E-dUveGINTg" width="300px" height="900px">&lt;VideoEmbed>
</Pre>

<VideoEmbed src="E-dUveGINTg" width="300px" height="900px"><VideoEmbed>

## source

the source for this page is in the
[example directory](https://github.com/magic-modules/video-embed/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
