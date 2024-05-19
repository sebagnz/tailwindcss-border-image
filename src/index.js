const plugin = require('tailwindcss/plugin')

const { utilities: sourceUtilities } = require('./utilities/source')
const { utilities: sliceUtilities, values: sliceValues } = require('./utilities/slice')
const { utilities: widthUtilities } = require('./utilities/width')
const { utilities: outsetUtilities } = require('./utilities/outset')
const { utilities: repeatUtilities } = require('./utilities/repeat')

module.exports = plugin(
  (helpers) => {
    sourceUtilities(helpers)
    sliceUtilities(helpers)
    widthUtilities(helpers)
    outsetUtilities(helpers)
    repeatUtilities(helpers)
  },
  {
    theme: {
      borderSlice: sliceValues,
    },
  },
)
