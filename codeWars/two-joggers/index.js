const nbrOfLaps = (x, y) => {
  const resX = [];
  const resY = [];
  let mulX = 0;
  let mulY = 0;

  for (let i = 0; i < y; i += 1) {
    mulX += 1;
    resX.push(x * mulX);
  }

  for (let i = 0; i < x; i += 1) {
    mulY += 1;
    resY.push(y * mulY);
  }

  const nok = resX.filter((item) => resY.indexOf(item) > -1);
  const res = [];
  res.push(nok[0] / x, nok[0] / y);
  return res;
};

module.exports = { nbrOfLaps };

/* console.log(nbrOfLaps(4, 6)); */
