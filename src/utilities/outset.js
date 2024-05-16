const outsetUtilities = ({ matchUtilities, theme }) => {
  matchUtilities(
    {
      'border-outset': (value) => ({
        '--tw-border-image-outset-t': value,
        '--tw-border-image-outset-r': value,
        '--tw-border-image-outset-b': value,
        '--tw-border-image-outset-l': value,
      }),
    },
    {
      values: theme('width'),
    },
  )

  matchUtilities(
    {
      'border-outset-x': (value) => ({
        '--tw-border-image-outset-l': value,
        '--tw-border-image-outset-r': value,
      }),
    },
    {
      values: theme('width'),
    },
  )

  matchUtilities(
    {
      'border-outset-y': (value) => ({
        '--tw-border-image-outset-t': value,
        '--tw-border-image-outset-b': value,
      }),
    },
    {
      values: theme('height'),
    },
  )

  matchUtilities(
    {
      'border-outset-t': (value) => ({
        '--tw-border-image-outset-t': value,
      }),
    },
    {
      values: theme('height'),
    },
  )

  matchUtilities(
    {
      'border-outset-r': (value) => ({
        '--tw-border-image-outset-r': value,
      }),
    },
    {
      values: theme('width'),
    },
  )

  matchUtilities(
    {
      'border-outset-b': (value) => ({
        '--tw-border-image-outset-b': value,
      }),
    },
    {
      values: theme('height'),
    },
  )

  matchUtilities(
    {
      'border-outset-l': (value) => ({
        '--tw-border-image-outset-l': value,
      }),
    },
    {
      values: theme('width'),
    },
  )
}

module.exports = { outsetUtilities }
