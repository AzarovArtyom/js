function pyramid(balls) {
  let res = 0;
  let num = 1;
  let prev;
  while (res < balls) {
    res += num;
    prev = num;
    // eslint-disable-next-line no-plusplus
    num++;
  }
  if (res > balls) {
    return prev - 1;
  }
  return prev;
}

// eslint-disable-next-line no-console
console.log(pyramid(15));
