import type { ComponentDoc } from '../../../docs/types'

export const emptyPanelDoc: ComponentDoc = {
  name: 'EmptyPanel',
  title: 'EmptyPanel',
  slug: 'empty-panel',
  category: 'patterns',
  summary: '适合空状态和引导操作的业务组件，统一标题、描述和 CTA 表达。',
  description: '在空列表、初始页和缺省数据场景里提供统一的说明与动作引导。',
  status: 'stable',
  docsPath: '/components/empty-panel',
  importName: 'EmptyPanel',
  importPath: '@sunny/ui/empty-panel',
  imports: [
    {
      label: '根入口导入',
      code: "import { EmptyPanel } from '@sunny/ui'",
    },
    {
      label: '按需子路径导入',
      code: "import { EmptyPanel } from '@sunny/ui/empty-panel'",
    },
  ],
  props: [
    { name: 'title', type: 'string', default: '-', description: '空状态标题。' },
    { name: 'description', type: 'string', default: '-', description: '空状态描述。' },
    { name: 'actionLabel', type: 'string', default: "''", description: '可选动作按钮文案。' },
  ],
  events: [{ name: 'action', payload: 'void', description: '点击动作按钮时触发。' }],
  examples: [
    {
      title: '空状态引导',
      description: '适合引导用户执行下一步操作。',
      language: 'vue',
      code: `<template>
  <EmptyPanel
    title="还没有线索"
    description="先创建第一条线索，再开始跟进流程。"
    action-label="立即创建"
  />
</template>`,
    },
  ],
}
