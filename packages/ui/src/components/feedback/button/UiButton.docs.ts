import type { ComponentDoc } from '../../../docs/types'

export const uiButtonDoc: ComponentDoc = {
  name: 'UiButton',
  title: 'Button',
  slug: 'button',
  category: 'feedback',
  summary: '统一按钮层级、状态和交互语义，适合作为操作入口的基础动作组件。',
  description: '适合页面主操作、次操作和危险操作场景，统一按钮尺寸、状态与反馈语义。',
  status: 'stable',
  docsPath: '/components/button',
  importName: 'UiButton',
  importPath: '@sunny/ui/button',
  imports: [
    {
      label: '根入口导入',
      code: "import { UiButton } from '@sunny/ui'",
    },
    {
      label: '按需子路径导入',
      code: "import { UiButton } from '@sunny/ui/button'",
    },
  ],
  props: [
    {
      name: 'variant',
      type: "'primary' | 'secondary' | 'ghost' | 'danger'",
      default: "'primary'",
      description: '按钮视觉层级。',
    },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '按钮尺寸。' },
    { name: 'block', type: 'boolean', default: 'false', description: '是否占满整行。' },
    { name: 'loading', type: 'boolean', default: 'false', description: '是否展示加载态。' },
    { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用。' },
    {
      name: 'type',
      type: "'button' | 'submit' | 'reset'",
      default: "'button'",
      description: '原生按钮类型。',
    },
  ],
  slots: [{ name: 'default', description: '按钮内容。' }],
  examples: [
    {
      title: '基础用法',
      description: '通过 `variant` 和 `size` 组合不同层级按钮。',
      language: 'vue',
      code: `<template>
  <div class="flex gap-3">
    <UiButton>Primary</UiButton>
    <UiButton variant="secondary">Secondary</UiButton>
    <UiButton variant="ghost">Ghost</UiButton>
  </div>
</template>`,
    },
  ],
}
