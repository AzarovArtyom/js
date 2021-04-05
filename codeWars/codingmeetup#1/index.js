function countDevelopers(list) {
  const res = list.filter((man) => man.continent == 'Europe');
  return res.length;
}
