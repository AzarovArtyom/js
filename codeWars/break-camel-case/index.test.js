const { solution } = require('./index');

describe('Basik tests', () => {
  it('Should be', () => {
    expect(solution('camelCase')).toBe('camel Case');
  });
});
