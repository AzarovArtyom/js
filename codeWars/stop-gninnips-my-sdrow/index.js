const spinWords = (string) => {
  const spinStr = string.split(' ');
  spinStr.forEach((item, i) => {
    if (item.length >= 5) {
      spinStr.splice(i, 1, item.split('').reverse().join(''));
    }
  });
  return spinStr.join(' ');
};

console.log(spinWords('Hey fellow warriors'));
