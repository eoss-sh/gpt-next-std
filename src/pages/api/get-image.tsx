import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration({
  apiKey: process.env.OPENAI
})
const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {
  try {
  if (typeof req.body.prompt === "string") {
    const response = await openai.createImage({
      prompt: `Erstelle ein Profilbild für einen User, welcher einen Kommentar für einen Blog schreibt und sich selber als ${req.body.prompt} beschreibt. Das Bild soll im Style eines gemoetrisch abstrakten Gemäldes sein.`,
      n: 1,
      size: "256x256"
    })

    res.status(200).json({ text: response.data.data[0].url })
  } else {
    res.status(200).json({ text: "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_1722.jpg" })
  }
  } catch (error: any) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
}