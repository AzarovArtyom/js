function sumMix(x) {
  const str = String(x);
  const arr = str.split(',');
  return arr.reduce((prev, current) => +prev + +current, 0);
}
