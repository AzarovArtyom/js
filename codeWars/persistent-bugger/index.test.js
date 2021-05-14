const { persistence } = require('./index');

describe('Basic tests', () => {
  it('Should be', () => {
    expect(persistence(39)).toBe(3);
  });
});
