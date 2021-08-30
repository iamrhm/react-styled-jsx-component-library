const { defineConfig } = require('rollup');
const babel = require('@rollup/plugin-babel');
const typescript = require('@rollup/plugin-typescript');
const readPkgUp = require('read-pkg-up');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const fs = require('fs');

const { DEFAULT_EXTENSIONS } = require('@babel/core');

const excludePath = 'node_modules/**';

const { packageJson: pkg } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
});

function buildJS(input, output, tsconfig, format) {
  const config = defineConfig({
    input,
    output: {
      format,
      dir: output,
      sourcemap: true,
    },
    plugins: [
      peerDepsExternal(),
      typescript({ tsconfig }),
      babel({
        babelHelpers: 'runtime',
        extensions: [...DEFAULT_EXTENSIONS, 'ts', 'tsx'],
        exclude: excludePath,
      }),
    ],
    external: ['react', /@babel\/runtime/],
  });
  return config;
}

export default [
  buildJS(pkg.input, pkg.main, pkg.tsconfig, 'es'),
];
