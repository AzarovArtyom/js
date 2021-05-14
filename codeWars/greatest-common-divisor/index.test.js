const { mygcd } = require('./index');

describe('Basic tests', () => {
  it('Should be', () => {
    expect(mygcd(10, 25)).toBe(5);
  });
});
