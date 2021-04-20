const humanYearsCatYearsDogYears = (humanYears) => {
  const yearsArr = [];
  let catYears = 0;
  let dogYears = 0;
  if (humanYears === 1) {
    catYears += 15;
    dogYears += 15;
  } else if (humanYears === 2) {
    catYears += 24;
    dogYears += 24;
  } else {
    catYears += 24 + (humanYears - 2) * 4;
    dogYears += 24 + (humanYears - 2) * 5;
  }
  yearsArr.push(humanYears, catYears, dogYears);
  return yearsArr;
};
console.log(humanYearsCatYearsDogYears(10));
