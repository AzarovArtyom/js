function pyramid(balls) {
  let res = 0;
  let num = 1;
  let prev;
  while (res < balls) {
    res += num;
    prev = num;
    num++;
  }
  if (res > balls) {
    return prev - 1;
  }
  return prev;
}
