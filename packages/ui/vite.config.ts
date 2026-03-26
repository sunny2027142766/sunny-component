import { readdirSync } from 'node:fs'
import { dirname, extname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const __dirname = dirname(fileURLToPath(import.meta.url))
const entriesDir = resolve(__dirname, 'src/entries')
const entryFiles = readdirSync(entriesDir).filter((file) => extname(file) === '.ts')
const input = Object.fromEntries([
  ['index', resolve(__dirname, 'src/index.ts')],
  ...entryFiles.map((file) => [`entries/${file.slice(0, -3)}`, resolve(entriesDir, file)]),
])

export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'es2020',
    sourcemap: true,
    rolldownOptions: {
      input,
      preserveEntrySignatures: 'strict',
      external: ['vue'],
      output: {
        format: 'es',
        exports: 'named',
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})
