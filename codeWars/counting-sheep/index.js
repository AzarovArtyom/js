const countSheeps = (arrayOfSheep) => arrayOfSheep.filter((item) => item === true).length;

const array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
  false,
  true,
];

// eslint-disable-next-line no-console
console.log(countSheeps(array1));
