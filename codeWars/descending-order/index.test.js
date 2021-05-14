const { descendingOrder } = require('./index');

describe('Basic tests', () => {
  it('Should be', () => {
    expect(descendingOrder(1234123124)).toBe(4433222111);
  });
});
