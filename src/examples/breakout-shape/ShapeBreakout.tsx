import { twJoin } from 'tailwind-merge'
import { Layout } from '../Layout'

type Props = {
  title: string
  className?: string
}

export const ShapeBreakout = ({ title, className }: Props) => {
  return (
    <Layout>
      <h2 className="py-2 px-2 text-center">{title}</h2>
      <img
        src="https://picsum.photos/id/162/400/400"
        width={200}
        height={200}
        className={twJoin('rounded-full my-5 mx-auto', 'shadow-2xl shadow-indigo-800', className)}
      />
    </Layout>
  )
}
