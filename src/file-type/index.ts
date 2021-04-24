// 是否是图片
export const isPicture = (url: string): boolean => {
  return /(\.png)|(\.jpe?g)|(\.webp)$/.test(url);
};

// 是否是视频
export const isVideo = (url: string): boolean => {
  return /(\.mp4)$/.test(url);
};
