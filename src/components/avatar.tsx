import {useState} from "react"
import Loader from "@/components/loader"
import {Button} from "@/components/button"
import {Header, HeaderType} from "@/components/header"
import {Input} from "@/components/input"

const Avatar = () => { 
  const [prompt, setPrompt] = useState("")
  const [name, setName] = useState("Fremder")
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

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }

  return (
    <div className="container">
      <Header style={HeaderType.h3} type={HeaderType.h3}>Erstellen Sie einen Avatar für Ihren Kommentar</Header>
      <p className="my-4">Der Avatar (Ihr Erkennungsbild) wird mit Hilfe der Dall-E 2 KI von Open AI erstellt.</p>
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <Input type="text" onChange={handleChangeName} label="Name" id="1" value={name} name="Name" />
        <Input type="text" onChange={handleChange} label="Wie soll ich aussehen?" id="1" value={prompt} name="Avatar" />
        <Button>Los!</Button>
      </form>

      <div>
      <h3 className="mt-8">{`Hallo, ${name}`}</h3>
      {isLoading && (
        <div>
          <p>Schön, dass du da bist. Die KI erstellt gerade dein Profilbild, ein Moment bitte.</p>
          <Loader />
        </div>
      )}

      {!isLoading &&  (
        <div>
          {answer && (
          <>
            <p>Das wärs, wenn dir dein Bild nicht gefällt, kannst du gerne ein neues erstellen.</p>
            <div className="flex flex-col items-center my-10 gap-4">
             <img src={answer} className="rounded-full w-20" />
             <h3 className="text-center">{name}</h3>
            </div>
          </>
          )}
      </div>
      )}
      </div>
    </div>
  )
}

export default Avatar;