const { quarterOf } = require('./index');

describe('Basic test', () => {
  it('Should be', () => {
    expect(quarterOf(12)).toBe(4);
  });
});
