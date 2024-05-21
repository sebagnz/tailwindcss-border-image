import { ComponentPropsWithoutRef } from 'react'
import { twJoin } from 'tailwind-merge'

export const Layout = ({ className, children, ...rest }: ComponentPropsWithoutRef<'div'>) => (
  <div className={twJoin('px-8 sm:px-24', className)} {...rest}>
    <div className="bg-stone-100 py-12 sm:py-24 px-5 sm:px-10">
      <h1 className="text-center">Tailwind CSS border-image plugin</h1>
      {children}
    </div>
  </div>
)
