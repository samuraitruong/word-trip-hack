import React, { useCallback, useEffect, useState } from 'react';
import asyncPool from 'tiny-async-pool';

import './App.css';

async function validate(list: string[]) {
  const valid: { [x: string]: boolean } = {};
  const cached = JSON.parse(localStorage.getItem('CACHE') || '{}');

  const promiseValidate = async (word: string) => {
    const url = `https://samuraitruong.github.io/open-vn-en-dict/data/${word.toLowerCase()}.json`;
    valid[word] = cached[word];
    if (valid[word] === undefined) {
      try {
        const res = await fetch(url, {
          // mode: 'no-cors',
          method: 'HEAD',
        });

        valid[word] =
          res &&
          res.status === 200 &&
          (res.headers.get('content-length') || 0) > 10;
      } catch (err) {
        console.log(url, word, err);
      }
    }
  };

  await asyncPool(50, list, promiseValidate);
  localStorage.setItem('CACHE', JSON.stringify({ ...cached, ...valid }));
  return Object.entries(valid)
    .filter(([key, value]) => value)
    .map((x) => x[0]);
}

function useWordValidate(list: string[]) {
  const [validWords, setValidWord] = useState<string>('');
  const validateCallback = useCallback((t: string[]) => {
    return validate(t);
  }, []);

  useEffect(() => {
    async function validateRun() {
      const valid = await validateCallback(list);
      setValidWord(valid.join('\n'));
    }
    validateRun();
  }, [validateCallback, list]);

  return validWords;
}

function gen(text: string) {
  const list = Array.from(text.replace(/\\s/gi, ''));
  const len = list.length;
  const outputs: string[] = [];
  for (var i1 = 0; i1 < len; i1++)
    for (var i2 = 0; i2 < len; i2++) {
      for (var i3 = 0; i3 < len; i3++) {
        if (new Set([i1, i2, i3]).size === 3)
          outputs.push(list[i1] + list[i2] + list[i3]);
      }
    }
  return outputs.sort();
}

function gen4(text: string) {
  const list = Array.from(text.replace(/\\s/gi, ''));
  const len = list.length;
  if (len < 4) return [];
  const outputs: string[] = [];
  for (var i1 = 0; i1 < len; i1++)
    for (var i2 = 0; i2 < len; i2++) {
      for (var i3 = 0; i3 < len; i3++) {
        for (var i4 = 0; i4 < len; i4++) {
          if (new Set([i1, i2, i3, i4]).size === 4)
            outputs.push(list[i1] + list[i2] + list[i3] + list[i4]);
        }
      }
    }
  return outputs;
}

function gen5(text: string) {
  const list = Array.from(text.replace(/\\s/gi, ''));
  const len = list.length;
  if (len < 5) return [];
  const outputs: string[] = [];
  for (var i1 = 0; i1 < len; i1++)
    for (var i2 = 0; i2 < len; i2++) {
      for (var i3 = 0; i3 < len; i3++) {
        for (var i4 = 0; i4 < len; i4++) {
          for (var i5 = 0; i5 < len; i5++) {
            if (new Set([i1, i2, i3, i4, i5]).size === 5)
              outputs.push(
                list[i1] + list[i2] + list[i3] + list[i4] + list[i5],
              );
          }
        }
      }
    }
  return outputs;
}

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(gen(text));
  const validWords = useWordValidate(result);

  const onChange = (input: any) => {
    setText(input.target.value.toUpperCase());
  };

  const clickMe = (len: number) => {
    let data: string[] = [];

    switch (len) {
      case 3:
        data = gen(text);
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
