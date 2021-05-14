const mergeArrays = (arr1, arr2) => {
  const arrUnited = [...arr1, ...arr2].sort((a, b) => a - b);
  return arrUnited.filter((item, index) => arrUnited.indexOf(item) === index);
};

module.exports = { mergeArrays };
/* function mergeArrays(arr1, arr2) {
  const arrFinal = [...arr1, ...arr2].sort((a, b) => a - b);
  return Array.from(new Set(arrFinal));
} */

/*
const _ = require('lodash');

function mergeArrays(arr1, arr2) {
  return _.sortBy(_.union(arr1, arr2));
}
*/

/* console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])); */
