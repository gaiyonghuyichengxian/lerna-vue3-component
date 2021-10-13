/* eslint-disable */

import rollup from 'rollup'
import vue from 'rollup-plugin-vue'
// import vue from 'rollup-plugin-vue2'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import filesize from 'rollup-plugin-filesize'
import commonjs from 'rollup-plugin-commonjs'
import reporter from './size-reporter'
import genDefs from './gen-dts'


const plugins = [
  nodeResolve(),
  vue({
    // target: 'browser'
  }),
  typescript(),
  esbuild(),
  commonjs(),
  // 代码压缩
  // terser()
]


const path = require("path");
const fs = require("fs");
 

const pathName = path.join(__dirname, '../src/packages')

;(async () => {
  console.log('pathName', pathName)
  await genDefs(pathName)
   
  await buildComponents()

  await buildEntry()
})()

// fs.readdir(pathName, function(err, files){
//     var dirs = [];
//     (function iterator(i){
//       if(i == files.length) {
//         console.log(dirs);
//         return ;
//       }
//       fs.stat(path.join(pathName, files[i]), function(err, data){
//         const arg = (/^[A-Z][A-z0-9]*$/)
//         console.log(files[i])
//         console.log(arg.test(files[i]))
//         if (arg.test(files[i])) {
//           dirs.push(files[i]);
//         }
//         // console.log('data', data) 
//         // if(data.isFile()){               
//             // dirs.push(files[i]);
//         // }
//         iterator(i+1);
//        });   
//     })(0);
//     // console.log(dirs)
// });
async function readFiles() {
  return new Promise(function(resolve, reject){
    fs.readdir(pathName, function(err, files){
      const dirs = [];
      for (var i=0; i<files.length; i++) {
        const arg = (/^[A-Z][A-z0-9]*$/)
        if (arg.test(files[i])) {            
          dirs.push(files[i]);
        }
      }
      resolve(dirs);
      // console.log(dirs);  
    })
  })
}

async function buildComponents() {
  const fileList: any = await readFiles()
  console.log('fileList', fileList)
  // return
  const builds =fileList.map(async (file) => {
    console.log(file)
    const rollupConfig = {
      input: `src/packages/${file}/index.ts`,
      plugins,
      external: ['element-plus', 'vue'],
      // external: ['vue'],
      // external: [],
    }
    const bundle = await rollup.rollup(rollupConfig)
    // ESM
    await bundle.write({
      format: 'esm',
      file: `es/${file}/index.js`,
      plugins: [
        filesize({
          reporter,
        }),
      ],
      // paths: pathsRewriter,
    })
    // CJS
    await bundle.write({
      format: 'cjs',
      file: `lib/${file}/index.js`,
      exports: 'default', // default 如果你使用 export default ... 仅仅导出一个东西，那适合用这个 named  如果你导出多个东西，适合用这个
      plugins: [
        filesize({
          reporter,
        }),
      ],
      // paths: pathsRewriter,
    })
  })
  try {
    await Promise.all(builds)
  } catch (e: any) {
    console.log(e)
  }
}

async function buildEntry() {
  const config = {
    input: 'src/packages/index.ts',
    plugins,
    external: () => true,
    // external: [],
  }
  const bundle = await rollup.rollup(config)
  // ESM
  await bundle.write({
    format: 'esm',
    file: `es/index.js`,
    // plugins: []
    plugins: [
        filesize({
          reporter,
        }),
      ],
  })
  // CJS
  await bundle.write({
    format: 'cjs',
    file: `lib/index.js`,
    // plugins: []
    // exports: 'named', // default 如果你使用 export default ... 仅仅导出一个东西，那适合用这个 named  如果你导出多个东西，适合用这个
    plugins: [
        filesize({
          reporter,
        }),
    ],
  })
}
