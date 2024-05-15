import { twJoin } from 'tailwind-merge'
import { Layout } from '../Layout'

type Props = {
  title: string
  className?: string
}

export const Heading = ({ title, className }: Props) => {
  return (
    <Layout>
      <div className={twJoin('px-10 py-4 my-20', className)}>
        <h2>{title}</h2>
      </div>
    </Layout>
  )
}
