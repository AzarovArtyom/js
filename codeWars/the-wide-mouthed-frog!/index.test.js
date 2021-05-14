const { mouthSize } = require('./index');

describe('Basic test', () => {
  it('Should be', () => {
    expect(mouthSize('AlligaTor')).toBe('small');
  });
});
