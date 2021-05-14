function sumMix(x) {
  const str = String(x);
  return str.split(',').reduce((prev, current) => +prev + +current, 0);
}

module.exports = { sumMix };

/* console.log(sumMix([9, 3, '7', '3'])); */
