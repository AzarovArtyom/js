const divisions = (n, divisor) => {
  let numCur = n;
  let num = 0;
  let res = 0;
  while (numCur >= divisor) {
    num = numCur / divisor;
    numCur = num;
    res += 1;
  }
  return res;
};

console.log(divisions(6, 2));

/*
const divisions = (n, divisor) => {
    return Math.floor(Math.log(n)/Math.log(divisor))
}; */
