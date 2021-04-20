const replaceDots = function (str) {
  // return str.replace(/\./g, '-');
  return str.split('.').join('-');
};

console.log(replaceDots('one.two.three'));
