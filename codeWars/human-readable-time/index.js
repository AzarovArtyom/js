const twoDigitsFormat = (val) => (val < 10 ? `0${val}` : val);

const humanReadable = (seconds) => {
  const maxValue = 359999;
  if (seconds > maxValue) {
    return 'too much';
  }
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds - h * 3600 - m * 60;

  return `${twoDigitsFormat(h)}:${twoDigitsFormat(m)}:${twoDigitsFormat(s)}`;
};

/* console.log(humanReadable(36202)); */

module.exports = { humanReadable };
