const { spinWords } = require('./index');

describe('Basic tests', () => {
  it('Should be', () => {
    expect(spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw');
  });
});
