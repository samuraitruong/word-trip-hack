import { useCallback, useEffect, useState } from 'react';
import { validate } from '../services/Validator';


export function useWordValidate(list: string[]) {
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
