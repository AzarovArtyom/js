const { camelize } = require('./index');

describe('Basic tests', () => {
  it('should be', () => {
    expect(camelize('example name')).toBe('ExampleName');
    expect(camelize('your-NaMe-here')).toBe('YourNameHere');
    expect(camelize('testing ABC')).toBe('TestingAbc');
  });
});
