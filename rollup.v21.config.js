/* eslint-env node */
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import html from '@web/rollup-plugin-html';

export default {
  input: 'pages/v21/*.html',
  output: {
    dir: './dist/pages/v21'
  },
  plugins: [html({ minify: true }), nodeResolve(), terser()]
};
