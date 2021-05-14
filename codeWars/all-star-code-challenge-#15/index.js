const rotate = (str) => str
  .split('')
  .map((v, idx) => str.slice(idx + 1) + str.slice(0, idx + 1));

module.exports = { rotate };

/*
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
*/

/* const rotate = (str) => {
const scrollMachine = [];
str.split('').forEach((letter, index = 2) => {
scrollMachine.push(str.slice(index + 1) + str.slice(0, index + 1));
});

return scrollMachine;
}; */

/* function rotate(s) {
return s.split('').map((e) => {
s = s.slice(1) + s.slice(0, 1);
console.log(s);
});
} */
