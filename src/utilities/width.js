const utilities = ({ matchUtilities, theme }) => {
  matchUtilities(
    {
      'border-image-width': (value) => ({
        '--tw-border-image-width-t': value,
        '--tw-border-image-width-r': value,
        '--tw-border-image-width-b': value,
        '--tw-border-image-width-l': value,
      }),
    },
    {
      values: theme('width'),
    },
  )

  matchUtilities(
    {
      'border-image-width-x': (value) => ({
        '--tw-border-image-width-r': value,
        '--tw-border-image-width-l': value,
      }),
    },
    {
      values: theme('width'),
    },
  )

  matchUtilities(
    {
      'border-image-width-y': (value) => ({
        '--tw-border-image-width-t': value,
        '--tw-border-image-width-b': value,
      }),
    },
    {
      values: theme('height'),
    },
  )

  matchUtilities(
    {
      'border-image-width-t': (value) => ({
        '--tw-border-image-width-t': value,
      }),
    },
    {
      values: theme('height'),
    },
  )

  matchUtilities(
    {
      'border-image-width-r': (value) => ({
        '--tw-border-image-width-r': value,
      }),
    },
    {
      values: theme('width'),
    },
  )

  matchUtilities(
    {
      'border-image-width-b': (value) => ({
        '--tw-border-image-width-b': value,
      }),
    },
    {
      values: theme('height'),
    },
  )

  matchUtilities(
    {
      'border-image-width-l': (value) => ({
        '--tw-border-image-width-l': value,
      }),
    },
    {
      values: theme('width'),
    },
  )
}

module.exports = { utilities }
