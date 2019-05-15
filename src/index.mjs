export const View = p => {
  if (typeof p !== 'object') {
    p = {
      src: p,
    }
  }

  CHECK_PROPS(p, propTypes, 'VideoEmbed')
  let { src, width, height, class: cl = 'VideoEmbed', style = '', host, ...props } = p
  // if there is no video url, why would we render?
  if (!src) {
    return
  }

  if (!cl.includes('VideoEmbed')) {
    cl = `VideoEmbed ${cl}`
  }

  // src is numeric, assume vimeo
  if (src === +src) {
    src = `https://player.vimeo.com/video/${src}`
  } else if (!src.startsWith('http')) {
    src = `https://www.youtube-nocookie.com/embed/${src}`
  }

  if (width) {
    style += `width:${width};`
  }
  if (height) {
    style += `height:${height};`
  }

  return div(
    {
      class: cl,
      style,
    },
    iframe({
      frameborder: 0,
      allow: 'encrypted-media',
      allowfullscreen: '',
      ...props,
      // src has been modified above.
      src,
    }),
  )
}

export const style = {
  height: 0,
  overflow: 'hidden',
  paddingBottom: '56.25%',
  paddingTop: '30px',
  position: 'relative',

  iframe: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
}

export const propTypes = [
  { key: 'src', type: ['string', 'number'], required: true },
  { key: 'width', type: ['string', 'number'] },
  { key: 'height', type: ['string', 'number'] },
  { key: 'style', type: 'string' },
  { key: 'host', type: 'string' },
]
