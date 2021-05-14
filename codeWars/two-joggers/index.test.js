const { nbrOfLaps } = require('./index');

describe('Basik tests', () => {
  it('Should be', () => {
    expect(nbrOfLaps(4, 6)).toStrictEqual([3, 2]);
  });
});
