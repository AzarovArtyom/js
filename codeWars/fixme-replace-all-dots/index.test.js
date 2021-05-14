const { replaceDots } = require('./index');

describe('Basic tests', () => {
  it('Should be', () => {
    expect(replaceDots('one.two.three')).toBe('one-two-three');
  });
});
