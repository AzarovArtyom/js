function twiceAsOld(dadYearsOld, sonYearsOld) {
  const dadYears1 = dadYearsOld;
  let dadYears2 = 0;
  if (dadYears1 / sonYearsOld > 2) {
    while (dadYearsOld / sonYearsOld > 2) {
      dadYearsOld++;
      sonYearsOld++;
    }
    dadYears2 = dadYearsOld - dadYears1;
    return `Через ${dadYears2} лет`;
  }
  while (dadYearsOld / sonYearsOld < 2) {
    dadYearsOld--;
    sonYearsOld--;
  }
  dadYears2 = dadYears1 - dadYearsOld;
  return `${dadYears2} лет назад`;
}
