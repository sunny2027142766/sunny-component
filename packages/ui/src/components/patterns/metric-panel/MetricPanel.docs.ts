import type { ComponentDoc } from '../../../docs/types'

export const metricPanelDoc: ComponentDoc = {
  name: 'MetricPanel',
  title: 'MetricPanel',
  slug: 'metric-panel',
  category: 'patterns',
  summary: '适合仪表盘统计卡片的组合型业务组件，统一数值、趋势与说明结构。',
  description: '在 `UiCard` 与 `UiBadge` 之上封装的业务型统计面板，适合仪表盘场景快速搭建。',
  status: 'stable',
  docsPath: '/components/metric-panel',
  importName: 'MetricPanel',
  importPath: '@sunny/ui/metric-panel',
  imports: [
    {
      label: '根入口导入',
      code: "import { MetricPanel } from '@sunny/ui'",
    },
    {
      label: '按需子路径导入',
      code: "import { MetricPanel } from '@sunny/ui/metric-panel'",
    },
  ],
  props: [
    { name: 'title', type: 'string', default: '-', description: '指标标题。' },
    { name: 'value', type: 'string', default: '-', description: '指标值。' },
    { name: 'trend', type: 'string', default: "''", description: '趋势说明。' },
    { name: 'hint', type: 'string', default: "''", description: '补充说明。' },
    {
      name: 'tone',
      type: "'neutral' | 'success' | 'warning' | 'info'",
      default: "'neutral'",
      description: '趋势标签语气。',
    },
  ],
  examples: [
    {
      title: '指标卡片',
      description: '用于仪表盘顶部的 KPI 指标展示。',
      language: 'vue',
      code: `<template>
  <MetricPanel
    title="本周线索量"
    value="18,450"
    trend="+12%"
    hint="通过统一组件能力，新页面交付更稳定。"
    tone="success"
  />
</template>`,
    },
  ],
}
