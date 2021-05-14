const { dutyFree } = require('./index');

describe('Basic tests', () => {
  it('Should be', () => {
    expect(dutyFree(12, 50, 1000)).toBe(166);
  });
});
