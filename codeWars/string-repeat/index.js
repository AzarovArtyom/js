function repeatStr(n, s) {
  let str = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < n; i += 1) {
    str += s;
  }
  return str;
}

repeatStr();
