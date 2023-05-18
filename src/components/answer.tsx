import { useState } from "react"
import Loader from "@/components/loader"

const Answer = () => {

const [prompt, setPrompt] = useState("")
const [answer, setAnswer] = useState("")
const [isLoading, setIsLoading] = useState(false)

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  setIsLoading(true)

  const response = await fetch("/api/get-text", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt: prompt })
  })
  const data = await response.json()
  setAnswer(data.text.trim())
  setIsLoading(false)
}

function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setPrompt(e.target.value)
}

return (
  <div className="container">
    <h1>Give Any Instruction</h1>
    <form className="our-form" onSubmit={handleSubmit}>
      <input className="prompt-field" type="text" onChange={handleChange} />
      <button className="prompt-button">Go!</button>
    </form>

    {isLoading && <Loader />}

    <div className="answer-area">{answer}</div>
  </div>
)
}

export default Answer;