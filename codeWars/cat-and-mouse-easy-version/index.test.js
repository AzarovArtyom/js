const { catMouse } = require('./index');

describe('Basic tests', () => {
  it('Should be', () => {
    expect(catMouse('C....m')).toBe('Escaped!');
    expect(catMouse('C..m')).toBe('Caught!');
    expect(catMouse('C.....m')).toBe('Escaped!');
  });
});
