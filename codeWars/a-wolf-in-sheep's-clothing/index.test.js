const { warnTheSheep } = require('./index');

describe('Basic tests', () => {
  it('Should be', () => {
    expect(warnTheSheep(['sheep', 'sheep', 'sheep', 'wolf', 'sheep'])).toBe('Oi! Sheep number 1! You are about to be eaten by a wolf!');
  });
});
