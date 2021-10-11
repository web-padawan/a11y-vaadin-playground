/* eslint-env node */
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import html from '@web/rollup-plugin-html';

const version = process.env.vaadin;

export default {
  input: version ? `pages/v${version}/*.html` : './index.html',
  output: {
    dir: version ? `./dist/pages/v${version}` : './dist'
  },
  plugins: [html({ minify: false }), nodeResolve(), terser()]
};
