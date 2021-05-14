// eslint-disable-next-line no-unused-vars
function descendingOrder(n) {
  const str = String(n);
  return Number(str.split('').sort((a, b) => b - a).join(''));
}

module.exports = { descendingOrder };

/* let str2 = '';
  for (const num in arr) {
    str2 += arr[num];
  }
  str2 = Number(str2);
  return str2;

console.log(descendingOrder(1234123124)); */
