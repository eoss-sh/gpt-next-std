import { useState } from 'react';
import { createParser } from 'eventsource-parser';
import { Input } from './input';
import { SpinnerRoundOutlined } from 'spinners-react';

type AnswerText = string | undefined;

export default function AnswerStream() {
  const [text, setText] = useState<AnswerText>();
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleOnGenerateText(e: any) {
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
    setInput('')
    
  }

  return (
    <div className='flex flex-col justify-between h-full pb-12'>
    {
      isLoading && !text && (
        <div className='flex justify-center items-center'>Antwort wird erstellt <SpinnerRoundOutlined color='#fee200' /></div>
      )
    }
    <p>{text}</p>
    
    <form onSubmit={handleOnGenerateText} className='absolute bottom-0 mt-[30px] mr-[-33px] ml-[-33px] w-full bg-lightyellow p-[10px] rounded-b-3xl'>
    <div className="relative">
      <div
        className="absolute flex items-center right-0 inset-y-0 pr-3 cursor-pointer"
        onClick={handleOnGenerateText}
      >
          <svg className='h-8 w-8' viewBox="0 0 24 24" fill="#f1d3022e" xmlns="http://www.w3.org/2000/svg" stroke="#f1d3022e"><g id="SVGRepo_bgCarrier" strokeWidth="2"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6 12L3 21L21 12L3 3L6 12ZM6 12L12 12" stroke="#fee200" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></g></svg>
      </div>
      <Input 
          type="text" 
          id='prompt'
          name='prompt'
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder='Frage eingeben'
      />
    </div>
    </form>
    </div>
  )
}