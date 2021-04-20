// eslint-disable-next-line no-unused-vars,func-names
const min = function min(list) {
  list.sort((a, b) => a - b);
  return list[0];
};

// eslint-disable-next-line no-unused-vars
const max = function max(list) {
  list.sort((a, b) => b - a);
  return list[0];
};
