const persistence = (num) => {
  let arrNum = String(num).split('');
  let count = 0;
  while (arrNum.length > 1) {
    arrNum = String(arrNum.reduce((prev, current) => prev * current)).split('');
    count++;
  }
  return count;
};

console.log(persistence(39));
