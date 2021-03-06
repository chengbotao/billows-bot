/*
 * @Author: Chengbotao
 * @Date: 2022-06-07 10:34:13
 */
import { resolve } from 'path';
import pkg from './package.json';

import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import eslint from '@rollup/plugin-eslint';
// import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

const { version } = pkg;
const outputConf = {
  banner: `/* BillowsBot version ${version} */`,
  footer: `/* Follow me on GitHub! @chengbotao */`,
};

export default {
  input: 'packages/index.ts',
  output: [
    {
      file: resolve(__dirname, 'dist', 'billows-bot.esm.js'),
      format: 'esm',
      ...outputConf,
    },
    {
      file: resolve(__dirname, 'dist', 'billows-bot.js'),
      format: 'umd',
      name: 'billows',
      ...outputConf,
    },
  ],
  plugins: [
    alias({
      entries: {
        packages: resolve(__dirname, 'packages'),
      },
    }),
    nodeResolve({
      extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.json'],
    }),
    commonjs(),
    eslint({
      // fix: true,
      include: ['packages/**/*.ts'],
      exclude: ['node_modules/**', 'dist/**'],
    }),
    // babel({
    //   babelHelpers: 'bundled',
    //   extensions: ['ts', 'tsx', '.js', '.jsx', '.es6', '.es', '.mjs'],
    // }),
    typescript(),
    json(),
  ],
};
