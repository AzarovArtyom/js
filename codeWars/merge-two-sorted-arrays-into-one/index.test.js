const { mergeArrays } = require('./index');

describe('Basic tests', () => {
  it('Should be', () => {
    expect(mergeArrays([1, 2, 4, 5], [2, 3, 4, 5, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
