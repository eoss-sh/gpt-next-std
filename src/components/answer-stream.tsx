import { useState } from 'react';
import { createParser } from 'eventsource-parser';
import { Input } from './input';
import { Button } from './button';

type AnswerText = string | undefined;

export default function AnswerStream() {
  const [text, setText] = useState<AnswerText>();
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleOnGenerateText(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);
    setText(undefined);

    const response = await fetch('/api/text-stream', {
      method: 'POST',
      body: JSON.stringify({
        prompt: input,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    function onParse(event: any) {
      if (event.type === 'event') {
        try {
          const data = JSON.parse(event.data);
          data.choices
            .filter(({ delta }: any) => !!delta.content)
            .forEach(({ delta }: any): any => {
              setText(prev => {
                return `${prev || ''}${delta.content}`;
              })
            });
        } catch(e) {
          console.log(e)
        }
      }
    }

    const parser = createParser(onParse)

    while (true) {
      const { value, done } = await reader?.read() as any;
      const dataString = decoder.decode(value);
      if ( done || dataString.includes('[DONE]') ) break;
      parser.feed(dataString);
    }

    setIsLoading(false);
  }

  return (
    <div className='flex flex-col justify-between h-full'>
    <p>{text}</p>
    <form onSubmit={handleOnGenerateText} className='relative'>
    <Input 
        type="text" 
        id='prompt'
        name='prompt'
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder='Frage eingeben'
    />
    <Button>Antwort erhalten</Button>
    </form>
    
    </div>
  )
}