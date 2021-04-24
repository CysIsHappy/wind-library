import { isPicture, isVideo } from '../src/file-type';

describe('test isPicture', () => {
  test('test not a picture', () => {
    expect(isPicture('not a url')).toBeFalsy();
  });
  test('test a picture', () => {
    expect(isPicture('1.jpg')).toBeTruthy();
  });
});

describe('test isVideo', () => {
  test('test not a video', () => {
    expect(isVideo('not a video')).toBeFalsy();
  });
  test('test a video', () => {
    expect(isVideo('1.mp4')).toBeTruthy();
  });
});
