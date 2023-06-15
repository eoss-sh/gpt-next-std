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
      <div className=' grid grid-cols-2 h-3/4'>
      <section className='pl-16 flex flex-col items-start justify-center w-3/4'> 
        <Image src={logo} alt="" height={40}  />
        <Header type={HeaderType.h1} style={HeaderType.h1}>Unsere KI beantwortet Ihre Fragen.</Header>
        <p className="mb-4">Haben Sie Fragen zu den Themen Online-Marketing, Web-Design und Web-Entwicklung, welche unsere KI nicht ausreichend beantworten konnte?</p>
        <Button>Jetzt Frage stellen</Button>
      </section>
      <section className="pr-16 w-full flex items-center bg-lightyellow rounded-t-3xl">
        <div className='bg-grey rounded-3xl drop-shadow-md w-5/6 h-3/4 -ml-16 p-8'>
          <AnswerStream />
        </div>
      </section>
      </div>
      <section className=" h-1/5 mt-8">
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
