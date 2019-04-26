const { is } = require('@magic/test')
const Youtube = require('../src')

module.exports = [{ fn: () => Youtube, expect: is.function, info: 'expect Pre to be an object' }]
