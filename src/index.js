const Youtube = p => {
  if (typeof p === 'string') {
    p = {
      src: p,
    }
  }

  let { src, width, height, ...props } = p

  if (!props.class || !props.class.includes('Youtube')) {
    props.class = `Youtube${props.class ? ` ${props.class}` : ''}`
  }

  // if there is no video url, why would we render?
  if (!src) {
    return
  }

  // if the props.src string includes youtube, we just assume the url to be complete.
  src = src.includes('youtube') ? src : `https://www.youtube-nocookie.com/embed/${src}`

  props.style = props.style || ''
  if (width) {
    props.style += `width: ${width};`
  }

  if (height) {
    props.style += `height: ${height};`
  }

  return div(
    props,
    iframe({
      frameborder: 0,
      allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
      allowfullscreen: '',
      src,
    }),
  )
}

Youtube.style = {
  '.Youtube': {
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
  },
}

module.exports = Youtube
