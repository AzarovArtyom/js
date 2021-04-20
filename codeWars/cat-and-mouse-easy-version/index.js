const catMouse = (x) => {
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
};

console.log(catMouse('C.....m'));
