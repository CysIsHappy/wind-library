// 插件可以解决 ES6模块的查找导入，但是npm中的大多数包都是以CommonJS模块的形式出现的，所以需要使用这个插件将CommonJS模块转换为 ES2015 供 Rollup 处理
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import path from 'path';

import pkg from './package.json'

export default {
  input: path.resolve(__dirname, './src/index.ts'),
  plugins: [
    nodeResolve({
      extensions: ['.ts'],
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.ts'],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            absoluteRuntime: false,
            corejs: 3,
            helpers: true,
            regenerator: true,
            version: '7.0.0-beta.0',
          },
        ],
      ],
      babelHelpers: 'runtime',
      configFile: path.resolve(__dirname, './.babelrc.js'),
    }),
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
    }),
  ],
  output: [
    {
      file: path.resolve(__dirname, './lib/index.min.js'),
      name: pkg.name, // umd下必须 其实就是webpack的library
      format: 'umd',
    },
    {
      file: path.resolve(__dirname, './lib/index.es.min.js'),
      format: 'es',
    },
    {
      file: path.resolve(__dirname, './lib/index.cjs.min.js'),
      format: 'cjs',
    },
  ],
};
