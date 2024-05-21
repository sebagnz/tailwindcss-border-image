import { twJoin } from 'tailwind-merge'
import { Layout } from '../Layout'

type Props = {
  title: string
  className?: string
}

export const Overlay = ({ title, className }: Props) => {
  return (
    <Layout>
      <div
        className={twJoin(
          'my-20 p-4 w-full max-w-xl aspect-video mx-auto',
          'grid place-items-center',
          'bg-[url(https://picsum.photos/seed/picsum/900/600)] bg-cover bg-center',
          'text-center text-white hover:text-black',
          className,
        )}
      >
        <p className="text-base sm:text-lg">{title}</p>
      </div>
    </Layout>
  )
}
