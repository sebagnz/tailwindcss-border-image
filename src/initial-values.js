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

module.exports = { getInitialValues }
