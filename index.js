const plugin = require('tailwindcss/plugin')

const getInitialValues = () => ({
  '--tw-border-image-slice-t': '0',
  '--tw-border-image-slice-r': '0',
  '--tw-border-image-slice-b': '0',
  '--tw-border-image-slice-l': '0',
  '--tw-border-image-slice-regions':
    'var(--tw-border-image-slice-t) var(--tw-border-image-slice-r) var(--tw-border-image-slice-b) var(--tw-border-image-slice-l)',

  '--tw-border-image-slice': 'var(--tw-border-image-slice-regions) fill',

  '--tw-border-image-width-t': '0',
  '--tw-border-image-width-r': '0',
  '--tw-border-image-width-b': '0',
  '--tw-border-image-width-l': '0',
  '--tw-border-image-width':
    'var(--tw-border-image-width-t) var(--tw-border-image-width-r) var(--tw-border-image-width-b) var(--tw-border-image-width-l)',

  '--tw-border-image-outset-t': '0',
  '--tw-border-image-outset-r': '0',
  '--tw-border-image-outset-b': '0',
  '--tw-border-image-outset-l': '0',
  '--tw-border-image-outset':
    'var(--tw-border-image-outset-t) var(--tw-border-image-outset-r) var(--tw-border-image-outset-b) var(--tw-border-image-outset-l)',

  '--tw-border-image-repeat': 'stretch',

  'border-image-source': 'var(--tw-border-image-source)',
  'border-image-slice': 'var(--tw-border-image-slice)',
  'border-image-width': 'var(--tw-border-image-width)',
  'border-image-outset': 'var(--tw-border-image-outset)',
  'border-image-repeat': 'var(--tw-border-image-repeat)',
})

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
    }
  )
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
      values: theme('width'),
    }
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
    }
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
    }
  )

  matchUtilities(
    {
      'border-slice-t': (value) => ({
        '--tw-border-image-slice-t': value,
      }),
    },
    {
      values: theme('height'),
    }
  )

  matchUtilities(
    {
      'border-slice-r': (value) => ({
        '--tw-border-image-slice-r': value,
      }),
    },
    {
      values: theme('width'),
    }
  )

  matchUtilities(
    {
      'border-slice-b': (value) => ({
        '--tw-border-image-slice-b': value,
      }),
    },
    {
      values: theme('height'),
    }
  )

  matchUtilities(
    {
      'border-slice-l': (value) => ({
        '--tw-border-image-slice-l': value,
      }),
    },
    {
      values: theme('width'),
    }
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

const widthUtilities = ({ matchUtilities, theme }) => {
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
    }
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
    }
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
    }
  )

  matchUtilities(
    {
      'border-image-width-t': (value) => ({
        '--tw-border-image-width-t': value,
      }),
    },
    {
      values: theme('height'),
    }
  )

  matchUtilities(
    {
      'border-image-width-r': (value) => ({
        '--tw-border-image-width-r': value,
      }),
    },
    {
      values: theme('width'),
    }
  )

  matchUtilities(
    {
      'border-image-width-b': (value) => ({
        '--tw-border-image-width-b': value,
      }),
    },
    {
      values: theme('height'),
    }
  )

  matchUtilities(
    {
      'border-image-width-l': (value) => ({
        '--tw-border-image-width-l': value,
      }),
    },
    {
      values: theme('width'),
    }
  )
}

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
    }
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
    }
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
    }
  )

  matchUtilities(
    {
      'border-outset-t': (value) => ({
        '--tw-border-image-outset-t': value,
      }),
    },
    {
      values: theme('height'),
    }
  )

  matchUtilities(
    {
      'border-outset-r': (value) => ({
        '--tw-border-image-outset-r': value,
      }),
    },
    {
      values: theme('width'),
    }
  )

  matchUtilities(
    {
      'border-outset-b': (value) => ({
        '--tw-border-image-outset-b': value,
      }),
    },
    {
      values: theme('height'),
    }
  )

  matchUtilities(
    {
      'border-outset-l': (value) => ({
        '--tw-border-image-outset-l': value,
      }),
    },
    {
      values: theme('width'),
    }
  )
}

const repeatUtilities = ({ matchUtilities }) => {
  matchUtilities(
    {
      'border-repeat': (value) => ({
        '--tw-border-image-repeat': value,
      }),
    },
    {
      values: {
        repeat: 'repeat',
        round: 'round',
        space: 'space',
        stretch: 'stretch',
      },
    }
  )
}

module.exports = plugin((helpers) => {
  sourceUtilities(helpers)
  sliceUtilities(helpers)
  widthUtilities(helpers)
  outsetUtilities(helpers)
  repeatUtilities(helpers)
})
