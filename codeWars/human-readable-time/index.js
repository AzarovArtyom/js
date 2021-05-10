const humanReadable = (seconds) => {
  if (seconds > 359999) {
    return 'to much';
  }
  if (typeof seconds !== typeof 0) {
    return 'num need';
  }
  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = seconds - h * 3600 - m * 60;
  if (h < 10) {
    h = `0${h}`;
  }
  if (m < 10) {
    m = `0${m}`;
  }
  if (s < 10) {
    s = `0${s}`;
  }
  return `${h}:${m}:${s}`;
};

/* console.log(humanReadable(35999)); */

module.exports = { humanReadable };
