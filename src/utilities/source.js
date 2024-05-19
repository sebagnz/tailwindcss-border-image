const { getInitialValues } = require('../initial-values')

const utilities = ({ matchUtilities, theme }) => {
  matchUtilities(
    {
      'border-image': (value) => ({
        '--tw-border-image-source': value,
        ...getInitialValues(),
      }),
    },
    {
      values: theme('backgroundImage'),
    },
  )
}

module.exports = { utilities }
