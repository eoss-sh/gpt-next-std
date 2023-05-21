import { FC, ReactElement } from 'react'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: ['500', '600', '700'],
  style: ['normal'],
  subsets: ['latin']
})

type LayoutProps = {
  children: ReactElement
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main className={`${poppins.className} max-w-3xl mx-auto pt-12`}>
        {children}
      </main>
    </>
  )
}