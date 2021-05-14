const { twiceAsOld } = require('./index');

test(' Twice as old', () => {
  expect(twiceAsOld(30, 16)).toBe('2 лет назад');
});
