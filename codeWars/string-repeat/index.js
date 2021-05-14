function repeatStr(n, s) {
  let str = '';
  for (let i = 0; i < n; i += 1) {
    str += s;
  }
  return str;
}

/* const repeatStr = (n, s) => s.split('').reduce((acc, cur) => acc + cur); */

/* console.log(repeatStr(4, 'l')); */

module.exports = { repeatStr };
