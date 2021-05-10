const humanReadable = require('./index');

describe('humanReadable', () => {
  it('should return right format of time', () => {
    expect(humanReadable.humanReadable(3600)).toBe('01:00:00');
  });
  it('should return error', () => {
    expect(humanReadable.humanReadable(360000)).toBe('to much');
  });
  it('should return 1 second', () => {
    expect(humanReadable.humanReadable(1)).toBe('00:00:01');
  });
  it('should return error if input value not equal num', () => {
    expect(humanReadable.humanReadable('Hello')).toBe('num need');
  });
});
