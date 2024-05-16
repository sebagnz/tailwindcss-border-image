import { twJoin } from 'tailwind-merge'
import { Layout } from '../Layout'

type Props = {
  title: string
  to: 'left' | 'right'
  className?: string
}

export const SlantBreakout = ({ title, to, className }: Props) => {
  return (
    <Layout>
      <div
        className={twJoin(
          'text-center p-20 my-40',
          ['slant', to === 'left' ? 'slant-l' : 'slant-r'],
          'border-image-conic border-outset-screen',
          className,
        )}
      >
        <h2>{title}</h2>
      </div>
    </Layout>
  )
}