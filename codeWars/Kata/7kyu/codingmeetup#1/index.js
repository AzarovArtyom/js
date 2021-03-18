function countDevelopers(list) {
  let res = list.filter((man) => man.continent == "Europe");
  return res.length;
}
