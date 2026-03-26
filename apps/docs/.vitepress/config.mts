import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'
import { searchForWorkspaceRoot } from 'vite'
import {
  componentCatalog,
  componentCategoryLabels,
} from '../../../packages/ui/src/registry/component-catalog'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docsRoot = resolve(__dirname, '..')
const guideItems = [
  { text: '快速开始', link: '/guide/getting-started' },
  { text: '组件规范', link: '/guide/component-standards' },
  { text: '文档规范', link: '/guide/docs-standards' },
]
const componentSidebar = Object.entries(componentCategoryLabels).map(([category, label]) => ({
  text: label,
  items: componentCatalog
    .filter((component) => component.category === category)
    .map((component) => ({
      text: component.title,
      link: component.docsPath,
    })),
}))

export default defineConfig({
  lang: 'zh-CN',
  title: 'Sunny UI',
  description:
    'Sunny monorepo component system powered by pnpm workspace, Turbo, Tailwind and VitePress.',
  appearance: true,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: '规范', link: '/guide/component-standards' },
      { text: '组件', link: componentCatalog[0]?.docsPath ?? '/components/button' },
      { text: '实验室', link: 'http://127.0.0.1:5173/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开始与规范',
          items: guideItems,
        },
      ],
      '/components/': componentSidebar,
      '/': [
        {
          text: '文档',
          items: [{ text: '首页', link: '/' }, ...guideItems],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/sunny2027142766/sunny-component' }],
    outline: 'deep',
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: [
        {
          find: /^@sunny\/ui\/styles\.css$/,
          replacement: resolve(docsRoot, '../../packages/ui/src/styles/index.css'),
        },
        {
          find: /^@sunny\/ui$/,
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
