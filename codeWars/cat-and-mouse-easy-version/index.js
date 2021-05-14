const catMouse = (x) => {
  const res = x.split('').filter((v) => v === '.');
  return res.length > 3 ? 'Escaped!' : 'Caught!';
};

module.exports = { catMouse };

/* const catMouse = (x) => {
  const arr = x.split('');
  let res = 0;
  for (const word in arr) {
    if (arr[word] === '.') {
      res++;
    }
  }
  if (res <= 3) {
    return 'Caught!';
  } return 'Escaped!';
}; */

// const catMouse = (x) => (x.length > 5 ? 'Escaped!' : 'Caught!');
