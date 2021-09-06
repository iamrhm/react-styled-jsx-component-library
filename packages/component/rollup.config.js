/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'rollup';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

import { DEFAULT_EXTENSIONS } from '@babel/core';

const excludePath = 'node_modules/**';

export default defineConfig({
  input: 'src/index.ts',
  output: {
    format: 'es',
    dir: 'dist',
    sourcemap: true,
  },
  plugins: [
    peerDepsExternal(),
    postcss(),
    typescript(),
    babel({
      babelHelpers: 'runtime',
      extensions: [...DEFAULT_EXTENSIONS, 'ts', 'tsx'],
      exclude: excludePath,
    }),
  ],
});
