import constell from '../src/constellation';

describe('test constellation', () => {
  it('test 1', () => {
    expect(constell('2000-01-01')).toBe('魔羯');
  });
  it('test 2', () => {
    expect(constell('1997-09-26')).toBe('天秤');
  });
  it('error', () => {
    // jest 测试throw 必须包裹在函数内
    expect(() => constell('1997-9-26')).toThrow();
  });
});
