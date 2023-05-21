import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration({
  apiKey: process.env.OPENAI
})
const openai = new OpenAIApi(configuration)

export default async function handler(req: any, res: any) {
  if (typeof req.body.prompt === "string") {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Dies ist ein Kommentar zu einem Artikel zum Thema künstliche Intelligenz: ${req.body.prompt}. Bitte schreibe den KOmmentar um, optiere diesen und ergänze ihn mit hilfreichen Infos. Der Kommentar soll ${req.body.stil} geschrieben sein.}`,
      temperature: 0,
      max_tokens: 1000
    })

    res.status(200).json({ text: response.data.choices[0].text })
  } else {
    res.status(200).json({ text: "Invalid prompt provided." })
  }
}