import { twJoin } from 'tailwind-merge'
import { Layout } from '../Layout'

type Props = {
  title: string
  className?: string
}

export const Breakout = ({ title, className }: Props) => {
  return (
    <Layout>
      <div className={twJoin('text-center px-10 py-20 my-20', className)}>
        <h2>{title}</h2>
      </div>
    </Layout>
  )
}
