function sumMix(x) {
  let str = String(x);
  let arr = str.split(",");
  return arr.reduce((prev, current) => +prev + +current, 0);
}
