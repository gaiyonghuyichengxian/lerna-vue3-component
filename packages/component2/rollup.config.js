// /packages/button/rollup.config.js
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import commonjs from 'rollup-plugin-commonjs'

module.exports = [
  {
    // 入口
    input: './src/packages/Button/button.ts',
    // 出口
    output: [
      {
        file: 'dist/components/index.js',
        // 配置打包模块化的方式 es:ESM  cjs:CommonJS
        format: 'es'
      }
    ],
    // 插件
    plugins: [
      nodeResolve(),
      vue({
        // 把单文件组件中的样式，插入到html中的style标签
        // css: true,
        // 把组件转换成 render 函数
        // compileTemplate: true
        target: 'browser'
      }),
      typescript(),
      esbuild(),
      commonjs(),
      // 代码压缩
      terser()
    ]
  }
]
