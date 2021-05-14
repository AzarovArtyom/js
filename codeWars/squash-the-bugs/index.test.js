const { findLongest } = require('./index');

describe('Basic tests', () => {
  it('Should be', () => {
    expect(findLongest('The quick white fox jumped around the massive dog')).toBe(7);
  });
});
