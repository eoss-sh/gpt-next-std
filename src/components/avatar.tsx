import {useState} from "react"
import Loader from "@/components/loader"
import {Header, HeaderProps, HeaderType} from "@/components/header"

const Avatar = () => { 
  const [prompt, setPrompt] = useState("")
  const [answer, setAnswer] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    const response = await fetch('/api/get-image', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: prompt })
    })
    const data = await response.json()
    setAnswer(data.text)
    setIsLoading(false)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPrompt(e.target.value)
  }
  return (
    <div className="container">
      <Header style={HeaderType.h3} type={HeaderType.h3}>Erstellen Sie einen Avatar für Ihren Kommentar</Header>
      <p>Der Avatar (Ihr Erkennungsbild) wird mit Hilfe der Dall-E 2 KI von Open AI erstellt.</p>
      <form className="our-form" onSubmit={handleSubmit}>
        <input className="prompt-field" type="text" onChange={handleChange} />
        <button className="prompt-button">Los!</button>
      </form>

      {isLoading && <Loader />}

      {!isLoading && <img src={answer} />}
    </div>
  )
}

export default Avatar;