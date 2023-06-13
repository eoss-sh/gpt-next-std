import { FC, ReactElement } from 'react'
import Image from 'next/image'
import logo from '/public/eoss_logo.png'
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
    <main className={`${poppins.className} h-screen bg-grey relative`}>
    <nav className='bg-darkgrey rounded-bl-full'>
      <div className="flex flew-row justify-between items-center max-w-[70rem] mx-auto py-4">
        <Image src={logo} alt="" height={40}  />
      </div>
    </nav>
        <div className="w-4/6 mx-auto absolute bottom-0 h-3/4 p-16 bg-lightyellow rounded-t-3xl">
          {children}
        </div>
      </main>
  )
}