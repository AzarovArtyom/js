const dutyFree = (normPrice, discount, hol) => {
  const dif = normPrice * (discount / 100);
  return Math.floor(hol / dif);
};

module.exports = { dutyFree };
