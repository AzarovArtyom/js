const addBinary = (a, b) => {
  const sum = a + b;
  return sum.toString(2);
};

// eslint-disable-next-line no-console
console.log(addBinary(1, 2));
