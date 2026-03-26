import type { ComponentDoc } from '../../../docs/types'

export const uiBadgeDoc: ComponentDoc = {
  name: 'UiBadge',
  title: 'Badge',
  slug: 'badge',
  category: 'feedback',
  summary: '通过轻量标签表达状态、分类和趋势，适合列表、卡片和统计场景。',
  description: '用于强调状态和辅助信息，保持页面中的状态表达一致。',
  status: 'stable',
  docsPath: '/components/badge',
  importName: 'UiBadge',
  importPath: '@sunny/ui/badge',
  imports: [
    {
      label: '根入口导入',
      code: "import { UiBadge } from '@sunny/ui'",
    },
    {
      label: '按需子路径导入',
      code: "import { UiBadge } from '@sunny/ui/badge'",
    },
  ],
  props: [
    {
      name: 'tone',
      type: "'neutral' | 'success' | 'warning' | 'info'",
      default: "'neutral'",
      description: '标签语气。',
    },
  ],
  slots: [{ name: 'default', description: '标签内容。' }],
  examples: [
    {
      title: '状态标签',
      description: '结合不同 tone 展示状态与分类。',
      language: 'vue',
      code: `<template>
  <div class="flex gap-2">
    <UiBadge>Neutral</UiBadge>
    <UiBadge tone="success">Stable</UiBadge>
    <UiBadge tone="warning">Beta</UiBadge>
    <UiBadge tone="info">Docs</UiBadge>
  </div>
</template>`,
    },
  ],
}
