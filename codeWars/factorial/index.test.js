const { factorial } = require('./index');

describe('Basic tests', () => {
  it('Should be', () => {
    expect(factorial(4)).toBe(24);
  });
});
