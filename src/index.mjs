export const View = (p, children) => {
  if (typeof p !== 'object') {
    p = {
      id: p,
    }
  }

  if (!p.id) {
    if (typeof children === 'string') {
      p.id = children
    }
  }

  if (p.id) {
    if (parseInt(p.id) === parseInt(p.id)) {
      // id is numeric, assume vimeo. might clash with youtube at one point.
      p.id = `https://player.vimeo.com/video/${p.id}`
    } else if (!p.id.startsWith('http')) {
      p.id = `https://www.youtube-nocookie.com/embed/${p.id}`
    }
  }

  CHECK_PROPS(p, propTypes, 'VideoEmbed')

  let { id, width, height, class: cl = 'VideoEmbed', style, host, ...props } = p

  // if there is no video url, why would we render?
  if (!id) {
    return
  }

  if (!cl.includes('VideoEmbed')) {
    cl = `VideoEmbed ${cl}`
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
      // id has been modified above.
      src: id,
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
    { key: 'id', type: ['string', 'number'], required: true },
    { key: 'width', type: ['string', 'number'] },
    { key: 'height', type: ['string', 'number'] },
    { key: 'style', type: 'object' },
    { key: 'host', type: 'string' },
  ],
}
