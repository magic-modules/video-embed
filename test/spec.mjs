import { is } from '@magic/test'
import * as VideoEmbed from '../src/index.mjs'

export default [
  {
    fn: () => VideoEmbed.View,
    expect: is.function,
    info: 'expect VideoEmbed.View to be a function',
  },
  {
    fn: () => VideoEmbed.View,
    expect: is.function,
    info: 'expect VideoEmbed.propTypes to be an array',
  },
  {
    fn: () => VideoEmbed.View,
    expect: is.function,
    info: 'expect VideoEmbed.View to be an object',
  },
]
