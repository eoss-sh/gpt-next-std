import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration({
  apiKey: process.env.OPENAI
})
const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {
  if (typeof req.body.prompt === "string") {
    const response = await openai.createImage({
      prompt: `Erstelle ein Avatrbild für einen User, welcher einen Kommentar für einen Blog schreibt und sich selber als ${req.body.prompt} beschreibt. Das Bild soll im Styl eines Roboters sein und eher lustig wirken.`,
      n: 1,
      size: "50x50"
    })

    res.status(200).json({ text: response.data.data[0].url })
  } else {
    res.status(200).json({ text: "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_1722.jpg" })
  }
}