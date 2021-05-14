/* const spinWords = (string) => {
  const spinStr = string.split(' ');
  spinStr.forEach((item, i) => {
    if (item.length >= 5) {
      spinStr.splice(i, 1, item.split('').reverse().join(''));
    }
  });
  return spinStr.join(' ');
}; */

/* const spinWords = (string) => {
  const spinStr = string.split(' ');
  return spinStr.filter((word) => word.length >= 5)
    .map((word, idx) => spinStr.splice(idx, 1, word.split('').reverse().join()));
}; */

/* const spinWords = (string) => {
  const spinStr = string.split(' ');
  const wordPos = spinStr.filter((word) => word.length >= 5).indexOf();
  return wordPos;
}; */

const spinWords = (string) => string.split(' ')
  .map((v) => (v.length >= 5 ? v.split('').reverse().join('') : v)).join(' ');

module.exports = { spinWords };

/* console.log(spinWords('Hey fellow warriors')); */
