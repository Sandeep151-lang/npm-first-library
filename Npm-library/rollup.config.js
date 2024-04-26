 import {defineConfig} from 'rollup'
 import typeScript from '@rollup/plugin-typescript'

export default defineConfig({
input:'src/index.ts',
output:{
    dir:'dist',
    format:'es',
    name:"npm-library"
},
external:['react','react-dom'],
plugins:[typeScript({tsconfig:"tsConfig.json"})]
})