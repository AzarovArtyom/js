function pyramid(balls) {
  let res = 0;
  let num = 1;
  let prev;
  while (res < balls) {
    res += num;
    prev = num;
    num += 1;
  }
  return res > balls ? prev - 1 : prev;
}

module.exports = { pyramid };
// eslint-disable-next-line no-console
console.log(pyramid(15));
