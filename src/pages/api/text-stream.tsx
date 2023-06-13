export const config = {
    runtime: 'edge'
  }
  
  export default async function handler(req: any) {
    const { prompt } = await req.json();
  
    const completion = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        stream: true,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI}`,
      }
    });
  
    return new Response(completion.body, {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  }