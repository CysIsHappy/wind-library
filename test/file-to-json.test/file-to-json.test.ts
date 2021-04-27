import fileToJson from '../../src/file-to-json/index';

const json = {
  name: 'wanghaoyu',
  your: 'web',
};

const string = 'wanghaoyu';

describe('test fileToJson', () => {
  test('success file to json', async () => {
    const file = new File([JSON.stringify(json)], 'test.json');
    const result = await fileToJson(file);
    expect(result).toEqual({
      name: 'wanghaoyu',
      your: 'web',
    });
  });

  test('error file to json', async () => {
    const file = new File([string], 'test.txt');
    // 测试promise 返回promise jest会等待promise解决
    // 不返回的话那就无效
    return fileToJson(file).catch((e) => {
      expect(e).toMatch('JSON Error');
    });
  });
});
