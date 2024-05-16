const { getInitialValues } = require('../initial-values')

const sourceUtilities = ({ matchUtilities, theme }) => {
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

module.exports = { sourceUtilities }
