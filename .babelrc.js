module.exports = {
  presets: [
    '@babel/typescript',
    [
      '@babel/env',
      {
        targets: {
          browsers: ['ie >= 11'],
        },
        exclude: ['transform-async-to-generator', 'transform-regenerator'],
        modules: false,
        loose: true,
      },
    ],
  ],
  plugins: [
    // don't use `loose` mode here - need to copy symbols when spreading
  ],
};
