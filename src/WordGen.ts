export function gen3(text: string) {
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

export function gen4(text: string) {
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

export function gen5(text: string) {
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
