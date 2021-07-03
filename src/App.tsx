import React, { useCallback, useEffect, useState } from 'react';

import './App.css';
import { validate } from './Validator';
import { gen3, gen4, gen5 } from './WordGen';

function useWordValidate(list: string[]) {
  const [validWords, setValidWord] = useState<string>('');
  const validateCallback = useCallback((t: string[]) => {
    return validate(t);
  }, []);

  useEffect(() => {
    setValidWord('Please wait ....');
    async function validateRun() {
      const valid = await validateCallback(list);
      setValidWord(valid.join('\n'));
    }
    validateRun();
  }, [validateCallback, list]);

  return validWords;
}

function App() {
  const [text, setText] = useState('');
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
    }
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
