const { pyramid } = require('./index');

describe('Basic test', () => {
  it('Should be', () => {
    expect(pyramid(15)).toBe(5);
  });
});
