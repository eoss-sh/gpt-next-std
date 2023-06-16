import AnswerStream from "@/components/answer-stream"
import {Header, HeaderType} from "@/components/header"
import {supabase} from '../../supabaseClient'
import Image from 'next/image'
import logo from '/public/eoss_logo.png'
import { Button } from "@/components/button"

export default function MyPage(props: any) {
  console.log("props", props.prompt)

  return (
    <>
      <div className=' grid grid-rows-2 grid-cols-none gap-8 h-full lg:h-3/4 lg:grid-cols-2 grid-rows-none'>
      <section className='pl-16 pt-28 flex flex-col items-start justify-start w-3/4'> 
        <Image src={logo} alt="" height={40}  />
        <Header type={HeaderType.h1} style={HeaderType.h1}>Unsere KI beantwortet Ihre Fragen.</Header>
        <p className="mb-4">Haben Sie Fragen zu den Themen Online-Marketing, Web-Design und Web-Entwicklung, welche unsere KI nicht ausreichend beantworten konnte?</p>
       <a className="text-yellow no-underline hover:underline duration-300 h-[3px]" href="https://eoss.ch/kontakt/">Jetzt Frage stellen</a>
      </section>
      <section className="pr-16 pl-16 lg:mt-0 mt-24 lg:pr-0 lg:pl-0 w-full flex items-center h-full bg-lightyellow rounded-t-3xl">
        <div className='bg-grey rounded-3xl drop-shadow-md mt-7 w-full lg:min-w-[500px] min-h-[75%] relative bottom-32 lg:bottom-0 lg:-ml-16 p-8 2xl:w-5/6'>
        <div className="bg-yellow h-[20px] m-[-2rem] p-[2.5rem] mb-4 rounded-t-3xl gap-12 flex items-center">

      <div className="bg-white h-[50px] w-[50px] rounded-full m-[-1.5rem]"></div><p>Sie sprechen mit dem eoss chat</p>

       </div>
        <p>Stelle mir eine Frage</p>
          <AnswerStream />
        </div>
      </section>
      </div>
      <section className="hidden h-1/5 mt-8 ml-16 mr-16 lg:block">
        <Header type={HeaderType.h2} style={HeaderType.h2}>Andere User haben sich dafür interessiert.</Header>
        <div className="grid grid-cols-5 gap-16 h-4/5">
          <div className="bg-lightyellow rounded-2xl backdrop-filter backdrop-blur-sm"></div>
          <div className="bg-lightyellow rounded-2xl backdrop-filter backdrop-blur-sm"></div>
          <div className="bg-lightyellow rounded-2xl backdrop-filter backdrop-blur-sm"></div>
          <div className="bg-lightyellow rounded-2xl backdrop-filter backdrop-blur-sm"></div>
          <div className="bg-lightyellow rounded-2xl backdrop-filter backdrop-blur-sm"></div>
        </div>
    </section>
  </>
  )
}

export async function getServerSideProps() {
  let {data: prompt, error} = await supabase.from('prompt').select('*')
  console.log(error, prompt)  

  return {
      props: {
          prompt
      }
}
}
