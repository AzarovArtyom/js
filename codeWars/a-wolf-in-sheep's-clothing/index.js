function warnTheSheep(queue) {
  queue.reverse();
  let prevAnimal = "";
  for (let animal in queue) {
    if (queue[0] == "wolf") {
      return "Pls go away and stop eating my sheep";
    } else if (queue[animal] == "wolf") {
      return `Oi! Sheep number ${animal}! You are about to be eaten by a wolf!`;
    }
  }
}
