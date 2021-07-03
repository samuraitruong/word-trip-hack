import React, { useState } from 'react';

import './App.css';
import { useWordValidate } from './hooks/UseValidate';
import { gen3, gen4, gen5, gen6, gen7 } from './services/WordGen';

function App() {
  const [text, setText] = useState('RTIVAI');
  const [result, setResult] = useState(gen3(text));
  const validWords = useWordValidate(result);

  const onChange = (input: any) => {
    setText(input.target.value.toUpperCase());
  };

  const clickMe = (len: number) => {
    let data: string[] = [];
    switch (len) {
      case 3:
        data = gen3(text);
        break;
      case 4:
        data = gen4(text);
        break;
      case 5:
        data = gen5(text);
        break;
      case 6:
        data = gen6(text);
        break;
      case 7:
        data = gen7(text);
    }
    console.log(len, data);
    setResult(data);
  };

  return (
    <div className='App'>
      <div className='InputWrap'>
        <input
          type='text'
          className='Input'
          onChange={onChange}
          value={text}
          placeholder='INPUT'
        />
        <ul className='ButtonList'>
          {text.length >= 3 && <li onClick={() => clickMe(3)}>3</li>}
          {text.length >= 4 && <li onClick={() => clickMe(4)}>4</li>}
          {text.length >= 5 && <li onClick={() => clickMe(5)}>5</li>}
          {text.length >= 6 && <li onClick={() => clickMe(6)}>6</li>}
          {text.length >= 7 && <li onClick={() => clickMe(7)}>7</li>}
        </ul>
      </div>
      <textarea
        className='Result'
        aria-label='Output'
        placeholder='No Results'
        value={validWords}
        readOnly={true}
      />
    </div>
  );
}

export default App;
