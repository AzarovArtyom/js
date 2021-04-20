// eslint-disable-next-line consistent-return,no-unused-vars
function warnTheSheep(queue) {
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
}
