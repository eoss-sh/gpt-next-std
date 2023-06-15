import React, {FC} from 'react'
import {supabase} from '../../supabaseClient'

type PromptProps = {
    promptText: string
    id?: number
    createdAt?: string

}

const Prompt: FC<PromptProps> = (props)  => {
    console.log("props", props)
  return (
    <div>Promptconst</div>
)
  }


  export async function getServerSideProps() {
    let {data: prompt, error} = await supabase.from('prompt').select('promptText')
    console.log(error, prompt)
    return {
        props: {
            prompt
        }
  }
}

  export default Prompt;