import myFirstFunc from '../src';

describe('describe', () => {
  test('myFirstFunc', () => {
    myFirstFunc(1).then((res) => {
      expect(res).toBe(1);
    });
  });
});
