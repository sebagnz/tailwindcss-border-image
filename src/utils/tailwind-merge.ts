import { extendTailwindMerge, mergeConfigs, validators, Config } from 'tailwind-merge'

export function withBorderImage(config: Config): Config {
  return mergeConfigs<'border-image.source' | 'border-image.border-slice' | 'border-image.outset'>(config, {
    extend: {
      classGroups: {
        'border-image.source': [{ 'border-image': ['fill'] }],
        'border-image.border-slice': [{ 'border-image': ['empty', 'fill'] }],
        'border-image.outset': [{ 'border-outset': ['x-screen'] }],
      },
    },
  })
}

export const twMerge = extendTailwindMerge(withBorderImage)
