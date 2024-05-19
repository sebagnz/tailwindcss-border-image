const values = {
  0: '0',
  1: '1',
  2: '2',
  4: '4',
  6: '6',
  8: '8',
  10: '10',
  12: '12',
  14: '14',
  16: '16',
  20: '20',
  24: '24',
  28: '28',
  32: '32',
  36: '36',
  40: '40',
  44: '44',
  48: '48',
  56: '56',
  64: '64',
  80: '80',
  96: '96',
  112: '112',
  128: '128',
  144: '144',
  160: '160',
  176: '176',
  192: '192',
  208: '208',
  224: '224',
  240: '240',
  256: '256',
  288: '288',
  320: '320',
  384: '384',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
  full: '100%',
}

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
      values,
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
      values,
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
      values,
    },
  )

  matchUtilities(
    {
      'border-slice-t': (value) => ({
        '--tw-border-image-slice-t': value,
      }),
    },
    {
      values,
    },
  )

  matchUtilities(
    {
      'border-slice-r': (value) => ({
        '--tw-border-image-slice-r': value,
      }),
    },
    {
      values,
    },
  )

  matchUtilities(
    {
      'border-slice-b': (value) => ({
        '--tw-border-image-slice-b': value,
      }),
    },
    {
      values,
    },
  )

  matchUtilities(
    {
      'border-slice-l': (value) => ({
        '--tw-border-image-slice-l': value,
      }),
    },
    {
      values,
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
