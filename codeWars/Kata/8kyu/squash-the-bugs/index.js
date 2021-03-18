function findLongest(str) {
  let spl = str.split(" ");
  let longest = 0;

  for (let word in spl) {
    if (spl[word].length > longest) {
      longest = spl[word].length;
    }
  }
  return longest;
}
