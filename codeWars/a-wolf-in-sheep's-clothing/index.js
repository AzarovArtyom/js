/* function warnTheSheep(queue) {
  queue.reverse();

  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const animal in queue) {
    // eslint-disable-next-line eqeqeq
    if (queue[0] === 'wolf') {
      return 'Pls go away and stop eating my sheep';
    }
    if (queue[animal] === 'wolf') {
      return `Oi! Sheep number ${animal}! You are about to be eaten by a wolf!`;
    }
  }
} */

/* const warnTheSheep = (queue) => queue.reduceRight((prev, cur, index) => ()); */

/* const warnTheSheep = (queue) => queue.reverse().filter((index) => index.indexOf('wolf', 0)); */
const warnTheSheep = (queue) => {
  const wolfPos = queue.reverse().indexOf('wolf', 0);
  return wolfPos === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${wolfPos}! You are about to be eaten by a wolf!`;
};

module.exports = { warnTheSheep };

/* console.log(warnTheSheep(['sheep', 'sheep', 'sheep', 'wolf', 'sheep'])); */
