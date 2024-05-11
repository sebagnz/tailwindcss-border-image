const plugin = require('tailwindcss/plugin')

const setupValues = {
  '--tw-border-image-slice-fill': 'fill',
  '--tw-border-image-slice-regions': '0 0 0 0',

  '--tw-border-image-slice': 'var(--tw-border-image-slice-regions) var(--tw-border-image-slice-fill)',
  '--tw-border-image-width': '0 0 0 0',
  '--tw-border-image-outset': '0 0 0 0',
  '--tw-border-image-repeat': 'stretch',

  'border-image-source': 'var(--tw-border-image-source)',
  'border-image-slice': 'var(--tw-border-image-slice)',
  'border-image-width': 'var(--tw-border-image-width)',
  'border-image-outset': 'var(--tw-border-image-outset)',
  'border-image-repeat': 'var(--tw-border-image-repeat)',
}

const sourceUtilities = ({ addUtilities }) => {
  addUtilities({
    '.border-image-fill': {
      '--tw-border-image-source': 'conic-gradient(var(--tw-gradient-stops) 0 0)',
      ...setupValues,
    },
  })
}

const sliceUtilities = ({ addUtilities }) => {
  addUtilities({
    '.border-slice-empty': {
      '--tw-border-image-slice': 'var(--tw-border-image-slice-regions)',
    },
    '.border-slice-fill': {
      '--tw-border-image-slice-fill': 'fill',
      '--tw-border-image-slice': 'var(--tw-border-image-slice-regions) var(--tw-border-image-slice-fill)',
    },
  })
}

const outsetUtilities = ({ addUtilities }) => {
  addUtilities({
    '.border-outset-x-screen': {
      '--tw-border-image-outset': '0 100vw',
    },
    '.border-outset-screen': {
      '--tw-border-image-outset': '100vh 100vw',
    },
  })
}

module.exports = plugin((helpers) => {
  sourceUtilities(helpers)
  sliceUtilities(helpers)
  outsetUtilities(helpers)
})
