const toTime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor(seconds % 3600 / 60);
  return `${h} hour(s) and ${m} minute(s)`;
};

console.log(toTime(3720));
