const utilities = ({ matchUtilities }) => {
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
    },
  )
}

module.exports = { utilities }
