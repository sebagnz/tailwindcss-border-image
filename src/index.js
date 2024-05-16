const plugin = require('tailwindcss/plugin')

const { sourceUtilities } = require('./utilities/source')
const { sliceUtilities } = require('./utilities/slice')
const { widthUtilities } = require('./utilities/width')
const { outsetUtilities } = require('./utilities/outset')
const { repeatUtilities } = require('./utilities/repeat')

module.exports = plugin((helpers) => {
  sourceUtilities(helpers)
  sliceUtilities(helpers)
  widthUtilities(helpers)
  outsetUtilities(helpers)
  repeatUtilities(helpers)
})
