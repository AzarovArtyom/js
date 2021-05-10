function findLongest(str) {
  const spl = str.split(' ');
  /* const longest = 0; */

  /* spl.forEach((item) => {
    if (item.length > longest) {
      longest = item.length;
    }
  }); */
  /* for (const word of spl) {
    if (word.length > longest) {
      longest = word.length;
    }
  } */

  /*  const res = spl.reduce((prev, current) => {
    if (current.length > prev.length) {
      return prev.length = current.length;
    }
    return prev.length;
  }); */

  const res = spl.reduce((prev, current) => (prev > current.length ? prev : current.length), 'the');

  return res;
}

console.log(findLongest('The quick white fox jumped around the massive dog'));
