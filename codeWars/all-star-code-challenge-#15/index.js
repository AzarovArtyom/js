const rotate = (str) => {
  const wordsArr = str.split('');
  const scrollMachine = [];
  for (const word in wordsArr) {
    wordsArr.push(wordsArr[word]);
    delete wordsArr[word];
    scrollMachine.push(wordsArr.join(''));
  }
  return scrollMachine;
};

console.log(rotate('Hello'));
