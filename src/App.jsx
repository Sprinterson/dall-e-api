import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import './App.css'

function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: '1024x1024',
    });

    setResult(res.data.data[0].url);
  };

  return (
    <div className='app-main'>
      <h3>Generate an image usin Open AI API</h3>
      <input
        className='app-input'
        placeholder='Type something to generate an image...'
        type='text'
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage}>Generate an image</button>
      {result.length > 0 ? <img className='result-image' src={result} alt='result' /> : <></>}
    </div>)
    ;
}

export default App;
