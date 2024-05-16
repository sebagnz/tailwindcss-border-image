const sliceUtilities = ({ addUtilities, matchUtilities, theme }) => {
  matchUtilities(
    {
      'border-slice': (value) => ({
        '--tw-border-image-slice-t': value,
        '--tw-border-image-slice-r': value,
        '--tw-border-image-slice-b': value,
        '--tw-border-image-slice-l': value,
      }),
    },
    {
      values: theme('width'),
    },
  )

  matchUtilities(
    {
      'border-slice-x': (value) => ({
        '--tw-border-image-slice-r': value,
        '--tw-border-image-slice-l': value,
      }),
    },
    {
      values: theme('width'),
    },
  )

  matchUtilities(
    {
      'border-slice-y': (value) => ({
        '--tw-border-image-slice-t': value,
        '--tw-border-image-slice-b': value,
      }),
    },
    {
      values: theme('height'),
    },
  )

  matchUtilities(
    {
      'border-slice-t': (value) => ({
        '--tw-border-image-slice-t': value,
      }),
    },
    {
      values: theme('height'),
    },
  )

  matchUtilities(
    {
      'border-slice-r': (value) => ({
        '--tw-border-image-slice-r': value,
      }),
    },
    {
      values: theme('width'),
    },
  )

  matchUtilities(
    {
      'border-slice-b': (value) => ({
        '--tw-border-image-slice-b': value,
      }),
    },
    {
      values: theme('height'),
    },
  )

  matchUtilities(
    {
      'border-slice-l': (value) => ({
        '--tw-border-image-slice-l': value,
      }),
    },
    {
      values: theme('width'),
    },
  )

  addUtilities({
    '.border-slice-no-fill': {
      '--tw-border-image-slice': 'var(--tw-border-image-slice-regions)',
    },
    '.border-slice-fill': {
      '--tw-border-image-slice': 'var(--tw-border-image-slice-regions) fill',
    },
  })
}

module.exports = { sliceUtilities }
