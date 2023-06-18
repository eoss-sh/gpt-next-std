import AnswerStream from "@/components/answer-stream"
import {Header, HeaderType} from "@/components/header"
import {supabase} from '../../supabaseClient'
import Image from 'next/image'
import logo from '/public/eoss_logo.png'
import Prompt, {PromptProp} from '@/components/prompt'


export default function MyPage({prompts}: {prompts: PromptProp[]}) {

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

      <div className="bg-white h-[50px] w-[50px] rounded-full m-[-1.5rem]"> 
                                  <svg className="w-[35px] h-[35px] ml-1.5 mt-2" xmlns="http://www.w3.org/2000/svg" width="168.5" height="148.994" viewBox="0 0 168.5 148.994">
                              <g id="Gruppe_4" data-name="Gruppe 4" transform="translate(-1422 -236.335)">
                                <g id="Vereinigungsmenge_2" data-name="Vereinigungsmenge 2" transform="translate(1590.5 385.331) rotate(180)" fill="#fff">
                                  <path d="M 97.00021362304688 100.8307037353516 L 17.9999942779541 100.8307037353516 C 14.12677574157715 100.8307037353516 10.48546695709229 99.32248687744141 7.746848583221436 96.58385467529297 C 5.008230209350586 93.84523773193359 3.499993801116943 90.20392608642578 3.499993801116943 86.33070373535156 L 3.499993801116943 37.79370498657227 C 3.499993801116943 34.25434494018555 4.788630485534668 30.84650611877441 7.12850284576416 28.19794273376465 C 9.449230194091797 25.57105255126953 12.62923049926758 23.87387084960938 16.08272171020508 23.41899681091309 L 18.95541191101074 23.04061508178711 L 19.1200122833252 20.14779853820801 L 19.74523544311523 9.160087585449219 L 30.28663063049316 22.01321601867676 L 31.33683013916016 23.2937068939209 L 32.99288558959961 23.2937068939209 L 97.00021362304688 23.2937068939209 C 100.8731231689453 23.2937068939209 104.5143203735352 24.80194282531738 107.2530670166016 27.54059791564941 C 109.9918823242188 30.27932548522949 111.5002136230469 33.92061614990234 111.5002136230469 37.79370498657227 L 111.5002136230469 86.33070373535156 C 111.5002136230469 90.20379638671875 109.9918823242188 93.84508514404297 107.2530670166016 96.58381652832031 C 104.5143203735352 99.32247161865234 100.8731231689453 100.8307037353516 97.00021362304688 100.8307037353516 Z" stroke="none"/>
                                  <path d="M 97.00021362304688 97.33071136474609 C 103.0656280517578 97.33071136474609 108.0002136230469 92.3961181640625 108.0002136230469 86.33071136474609 L 108.0002136230469 37.79370880126953 C 108.0002136230469 31.72829627990723 103.0656280517578 26.79370880126953 97.00021362304688 26.79370880126953 L 29.68075561523438 26.79370880126953 L 22.72977638244629 18.3183765411377 L 22.28514671325684 26.13229560852051 L 16.5397777557373 26.88903427124023 C 11.10121154785156 27.60536003112793 6.999994277954102 32.29336166381836 6.999994277954102 37.79370880126953 L 6.999994277954102 86.33071136474609 C 6.999994277954102 92.3961181640625 11.93458080291748 97.33071136474609 17.9999942779541 97.33071136474609 L 97.00021362304688 97.33071136474609 M 97.00021362304688 104.3307113647461 L 17.9999942779541 104.3307113647461 C 8.058603286743164 104.3307113647461 -5.698826043953886e-06 96.27210235595703 -5.698826043953886e-06 86.33071136474609 L -5.698826043953886e-06 37.79370880126953 C -5.698826043953886e-06 28.65688323974609 6.806124687194824 21.11062240600586 15.6256685256958 19.9489688873291 L 16.76071166992188 0.001795614487491548 L 32.99288558959961 19.79370880126953 L 97.00021362304688 19.79370880126953 C 106.9407119750977 19.79370880126953 115.0002136230469 27.852294921875 115.0002136230469 37.79370880126953 L 115.0002136230469 86.33071136474609 C 115.0002136230469 96.27210235595703 106.9407119750977 104.3307113647461 97.00021362304688 104.3307113647461 Z" stroke="none" fill="#fee200"/>
                                </g>
                                <g id="Vereinigungsmenge_1" data-name="Vereinigungsmenge 1" transform="translate(1422 236.335)" fill="#fff">
                                  <path d="M 23.5356330871582 119.2046813964844 L 22.66271591186523 103.8325653076172 L 22.47523498535156 100.531005859375 L 19.1683406829834 100.531005859375 L 18.00000762939453 100.531005859375 C 14.12690258026123 100.531005859375 10.48561096191406 99.02267456054688 7.746902465820312 96.28385925292969 C 5.008256912231445 93.54511260986328 3.500006675720215 89.90392303466797 3.500006675720215 86.031005859375 L 3.500006675720215 18.0000057220459 C 3.500006675720215 14.12677669525146 5.008235931396484 10.4854850769043 7.746860980987549 7.746860504150391 C 10.48548603057861 5.008235454559326 14.12677764892578 3.500006198883057 18.00000762939453 3.500006198883057 L 123.0002975463867 3.500006198883057 C 126.8735275268555 3.500006198883057 130.5148162841797 5.008235454559326 133.2534484863281 7.746860504150391 C 135.9920654296875 10.4854850769043 137.5003051757812 14.12677669525146 137.5003051757812 18.0000057220459 L 137.5003051757812 86.031005859375 C 137.5003051757812 89.90392303466797 135.9920501708984 93.54511260986328 133.2534027099609 96.28385925292969 C 130.5146942138672 99.02267456054688 126.873405456543 100.531005859375 123.0002975463867 100.531005859375 L 40.45329666137695 100.531005859375 L 38.79329681396484 100.531005859375 L 37.74296569824219 101.8164825439453 L 23.5356330871582 119.2046813964844 Z" stroke="none"/>
                                  <path d="M 26.51975250244141 110.0207977294922 L 37.13327789306641 97.03099822998047 L 123.0003051757812 97.03099822998047 C 129.0657348632812 97.03099822998047 134.0003051757812 92.09642028808594 134.0003051757812 86.03099822998047 L 134.0003051757812 17.99999809265137 C 134.0003051757812 11.93457317352295 129.0657348632812 6.999997615814209 123.0003051757812 6.999997615814209 L 18.00000190734863 6.999997615814209 C 11.93457794189453 6.999997615814209 7.000002384185791 11.93457317352295 7.000002384185791 17.99999809265137 L 7.000002384185791 86.03099822998047 C 7.000002384185791 92.09642028808594 11.93457794189453 97.03099822998047 18.00000190734863 97.03099822998047 L 25.78210258483887 97.03099822998047 L 26.51975250244141 110.0207977294922 M 20.5515022277832 128.3885955810547 L 19.16832733154297 104.0309982299805 L 18.00000190734863 104.0309982299805 C 8.058602333068848 104.0309982299805 2.587890548966243e-06 95.97149658203125 2.587890548966243e-06 86.03099822998047 L 2.587890548966243e-06 17.99999809265137 C 2.587890548966243e-06 8.058597564697266 8.058602333068848 -2.209472768299747e-06 18.00000190734863 -2.209472768299747e-06 L 123.0003051757812 -2.209472768299747e-06 C 132.9416961669922 -2.209472768299747e-06 141.0003051757812 8.058597564697266 141.0003051757812 17.99999809265137 L 141.0003051757812 86.03099822998047 C 141.0003051757812 95.97149658203125 132.9416961669922 104.0309982299805 123.0003051757812 104.0309982299805 L 40.45330429077148 104.0309982299805 L 20.5515022277832 128.3885955810547 Z" stroke="none" fill="#fee200"/>
                                </g>
                                <g id="Gruppe_3" data-name="Gruppe 3" transform="translate(1 -6)">
                                  <g id="Ellipse_4" data-name="Ellipse 4" transform="translate(1457 287)" fill="#fff" stroke="#fee200" strokeWidth="7">
                                    <circle cx="10" cy="10" r="10" stroke="none"/>
                                    <circle cx="10" cy="10" r="6.5" fill="none"/>
                                  </g>
                                  <g id="Ellipse_5" data-name="Ellipse 5" transform="translate(1507 287)" fill="#fff" stroke="#fee200" strokeWidth="7">
                                    <circle cx="10" cy="10" r="10" stroke="none"/>
                                    <circle cx="10" cy="10" r="6.5" fill="none"/>
                                  </g>
                                  <g id="Ellipse_6" data-name="Ellipse 6" transform="translate(1482 287)" fill="#fff" stroke="#fee200" strokeWidth="7">
                                    <circle cx="10" cy="10" r="10" stroke="none"/>
                                    <circle cx="10" cy="10" r="6.5" fill="none"/>
                                  </g>
                                </g>
                              </g>
                            </svg>
        </div><p className="text-black">Sie sprechen mit dem eoss-Chat</p>

       </div>
          <AnswerStream />
        </div>
      </section>
      </div>
      <section className="hidden h-1/5 mt-8 ml-16 mr-16 lg:block">
        <Header type={HeaderType.h2} style={HeaderType.h2}>Andere User haben sich dafür interessiert.</Header>
        <div className="grid grid-cols-5 gap-16 h-4/5">
          {
            prompts.map((prompt) => {
              return <Prompt key={prompt.id} {...prompt}/>
            })
          }
        </div>
    </section>
  </>
  )
}

export async function getServerSideProps() {
  let {data: prompts} = await supabase.from('prompt').select('*')

  return {
      props: {
          prompts
      }
}
}
