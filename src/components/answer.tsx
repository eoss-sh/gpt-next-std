import { useState } from "react"
import Loader from "@/components/loader"
import { Textarea } from "./textarea"
import { Button } from "./button"
import { RadioGroup } from "./radioGroup"

const Answer = () => {

const [prompt, setPrompt] = useState("")
const [answer, setAnswer] = useState("")
const [isLoading, setIsLoading] = useState(false)
const [stil, setStil] = useState("normal")

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  setIsLoading(true)

  const response = await fetch("/api/get-text", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt: prompt, stil: stil })
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
    <h1>Schreibe deinen Kommentar hier und lasse diesen durch die KI anpassen.</h1>
    <form className="our-form" onSubmit={handleSubmit}>
      <Textarea onChange={handleChange} rows={10} value={prompt} />
      <RadioGroup 
        options={[
          <h3>Normal</h3>,
          <h3>Witzig</h3>,
          <h3>Frech</h3>,
        ]} 
        labelText="Stil der Antwort" 
        onChange={(index) => {
          if (index === 0) {
            setStil("normal")
          } else if (index === 1) {
            setStil("witzig")
          } else {
            setStil("frech")
          }
        }}

      />
      <Button>Go!</Button>
    </form>

    {isLoading && <Loader />}

    <div className="answer-area">{answer}</div>
  </div>
)
}

export default Answer;