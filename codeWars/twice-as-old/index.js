function twiceAsOld(dadYearsOld, sonYearsOld) {
  const dadYearsCur = dadYearsOld;
  let dadYearsCul = dadYearsOld;
  let sonYearsCul = sonYearsOld;
  let dadYearsRes = 0;
  if (dadYearsCur / sonYearsCul > 2) {
    while (dadYearsCul / sonYearsCul > 2) {
      dadYearsCul += 1;
      sonYearsCul += 1;
    }
    dadYearsRes = dadYearsCul - dadYearsCur;
    return `Через ${dadYearsRes} лет`;
  }
  while (dadYearsCul / sonYearsCul < 2) {
    dadYearsCul -= 1;
    sonYearsCul -= 1;
  }
  dadYearsRes = dadYearsCur - dadYearsCul;
  return `${dadYearsRes} лет назад`;
}

console.log(twiceAsOld(30, 16));
module.exports = { twiceAsOld };
