import asyncPool from 'tiny-async-pool';

export async function validate(list: string[]) {
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
