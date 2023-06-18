import React, {FC} from 'react'
import {supabase} from '../../supabaseClient'

export type PromptProp = {
    promptText?: string
    id?: number
    createdAt?: string
}

const Prompt: FC<PromptProp> = (prompt)  => {
  return (
      <div className="bg-lightyellow rounded-2xl backdrop-filter backdrop-blur-sm p-8">
        <p>{`"${prompt.promptText}?"`}</p>
      </div>
    )
  }


  export default Prompt;