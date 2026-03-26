import type { ComponentDoc } from '../../../docs/types'

export const uiCardDoc: ComponentDoc = {
  name: 'UiCard',
  title: 'Card',
  slug: 'card',
  category: 'layout',
  summary: '统一内容分区和视觉边界，让页面布局在不同业务场景下保持一致。',
  description: '适合信息分组、模块容器和页面区域分隔，内置 header、actions 和 footer 结构。',
  status: 'stable',
  docsPath: '/components/card',
  importName: 'UiCard',
  importPath: '@sunny/ui/card',
  imports: [
    {
      label: '根入口导入',
      code: "import { UiCard } from '@sunny/ui'",
    },
    {
      label: '按需子路径导入',
      code: "import { UiCard } from '@sunny/ui/card'",
    },
  ],
  props: [
    { name: 'title', type: 'string', default: "''", description: '卡片标题。' },
    { name: 'description', type: 'string', default: "''", description: '卡片描述。' },
    {
      name: 'padding',
      type: "'sm' | 'md' | 'lg'",
      default: "'md'",
      description: '卡片内边距尺寸。',
    },
    {
      name: 'tone',
      type: "'default' | 'soft' | 'dark'",
      default: "'default'",
      description: '卡片语气。',
    },
  ],
  slots: [
    { name: 'default', description: '卡片主体内容。' },
    { name: 'header', description: '自定义头部区域。' },
    { name: 'actions', description: '头部右侧操作区域。' },
    { name: 'footer', description: '卡片底部区域。' },
  ],
  examples: [
    {
      title: '基础卡片',
      description: '使用 `title`、`description` 与默认插槽构建内容容器。',
      language: 'vue',
      code: `<template>
  <UiCard title="销售总览" description="适合承载仪表盘分组信息。">
    <p class="text-sm text-slate-500">这里放卡片主体内容。</p>
  </UiCard>
</template>`,
    },
  ],
}
