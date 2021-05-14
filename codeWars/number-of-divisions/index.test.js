const { divisions } = require('./index');

describe('Basic tests', () => {
  it('Should be', () => {
    expect(divisions(6, 2)).toBe(2);
  });
});
