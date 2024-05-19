import { twJoin } from 'tailwind-merge'
import { Layout } from '../Layout'

type Props = {
  title: string
  className?: string
}

export const Frame = ({ title, className }: Props) => {
  return (
    <Layout>
      <div className={twJoin('text-center p-5 my-20 w-60 aspect-square mx-auto cursor-pointer', className)}>
        <p>{title}</p>
      </div>
    </Layout>
  )
}
