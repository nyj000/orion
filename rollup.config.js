import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify"
import pkg from './package.json';

const input = 'src/orion.js'
export default [
  {
    input,
    output: {
      file: 'lib/orion.js',
      name: 'orion',
      format: 'umd',
      sourcemap: process.env.NODE_ENV === 'dev'
    },
    external: Object.keys(pkg.dependencies), // 依赖不进行打包
    plugins: [
      json(),
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**' // 只编译我们的源代码
      }),
      uglify(),
    ],
  },
  // {
  //   input,
  //   external: Object.keys(pkg.dependencies),
  //   output: [
  //     { file: pkg.main, format: 'cjs' },
  //     { file: pkg.module, format: 'es' }
  //   ],
  //   plugins: [
  //     babel({
  //       exclude: ['node_modules/**']
  //     }),
  //     uglify(),
  //   ],
  // },
]
