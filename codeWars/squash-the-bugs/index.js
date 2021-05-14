function findLongest(str) {
  return str.split(' ')
    .reduce((prev, current) => (prev > current.length ? prev : current.length), '');
}

module.exports = { findLongest };

/* console.log(findLongest('The quick white fox jumped around the massive dog')); */

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
