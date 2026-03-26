import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'
import { searchForWorkspaceRoot } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsRoot = resolve(__dirname, '..')

export default defineConfig({
  lang: 'zh-CN',
  title: 'Grid Edit UI',
  description: 'Vue 3 Monorepo component system powered by pnpm workspace, Turbo, Tailwind and VitePress.',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: '组件', link: '/components/button' },
      { text: '业务应用', link: 'http://127.0.0.1:5173/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Input', link: '/components/input' },
            { text: 'Modal', link: '/components/modal' },
            { text: 'Card', link: '/components/card' },
            { text: 'Table', link: '/components/table' },
            { text: 'Form', link: '/components/form' },
          ],
        },
      ],
      '/': [
        {
          text: '文档',
          items: [
            { text: '首页', link: '/' },
            { text: '快速开始', link: '/guide/getting-started' },
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/' }],
    outline: 'deep',
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: [
        {
          find: /^@grid-edit\/ui\/styles\.css$/,
          replacement: resolve(docsRoot, '../../packages/ui/src/styles/index.css'),
        },
        {
          find: /^@grid-edit\/ui$/,
          replacement: resolve(docsRoot, '../../packages/ui/src/index.ts'),
        },
        {
          find: '@docs',
          replacement: docsRoot,
        },
      ],
    },
    server: {
      fs: {
        allow: [searchForWorkspaceRoot(process.cwd())],
      },
    },
  },
})
