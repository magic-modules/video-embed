export const View = (p, children) => {
  if (typeof p !== 'object') {
    p = {
      src: p,
    }
  }

  if (!p.src && typeof children === 'string') {
    p.src = children
  }

  CHECK_PROPS(p, propTypes, 'VideoEmbed')

  let { src, width, height, class: cl = 'VideoEmbed', style, host, ...props } = p
  // if there is no video url, why would we render?
  if (!src) {
    return
  }

  if (!cl.includes('VideoEmbed')) {
    cl = `VideoEmbed ${cl}`
  }

  // // src is numeric, assume vimeo. might clash with youtube at one point.
  if (parseInt(src) === parseInt(src)) {
    src = `https://player.vimeo.com/video/${src}`
  } else if (!src.startsWith('http')) {
    src = `https://www.youtube-nocookie.com/embed/${src}`
  }

  if (height) {
    style = style || {}
    style.height = height
  }

  if (width) {
    style = style || {}
    style.width = width
  }

  const wrapperProps = {
    class: cl,
  }

  if (style) {
    wrapperProps.style = style
  }

  return div(
    wrapperProps,
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

export const propTypes = {
  VideoEmbed: [
    { key: 'src', type: ['string', 'number'], required: true },
    { key: 'width', type: ['string', 'number'] },
    { key: 'height', type: ['string', 'number'] },
    { key: 'style', type: 'object' },
    { key: 'host', type: 'string' },
  ],
}
