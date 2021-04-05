function findLongest(str) {
  const spl = str.split(' ');
  let longest = 0;

  for (const word in spl) {
    if (spl[word].length > longest) {
      longest = spl[word].length;
    }
  }
  return longest;
}
