import type { ComponentDoc } from '../../../docs/types'

export const uiTableDoc: ComponentDoc = {
  name: 'UiTable',
  title: 'Table',
  slug: 'table',
  category: 'data-display',
  summary: '适合后台列表展示的表格组件，支持列配置、对齐方式和自定义格式化。',
  description: '适合后台列表、看板表格和轻量数据总览场景，统一列配置与空态展示。',
  status: 'stable',
  docsPath: '/components/table',
  importName: 'UiTable',
  importPath: '@sunny/ui/table',
  imports: [
    {
      label: '根入口导入',
      code: "import { UiTable, type TableColumn, type TableRow } from '@sunny/ui'",
    },
    {
      label: '按需子路径导入',
      code: "import { UiTable } from '@sunny/ui/table'",
    },
  ],
  props: [
    { name: 'columns', type: 'TableColumn[]', default: '-', description: '列配置。' },
    { name: 'rows', type: 'TableRow[]', default: '-', description: '行数据。' },
    { name: 'rowKey', type: 'string', default: "'id'", description: '行唯一键。' },
    { name: 'emptyText', type: 'string', default: "'暂无数据'", description: '空态文案。' },
  ],
  examples: [
    {
      title: '基础列表',
      description: '通过 `columns` 与 `rows` 描述表格结构。',
      language: 'vue',
      code: `<script setup lang="ts">
import type { TableColumn, TableRow } from '@sunny/ui'

const columns: TableColumn[] = [{ key: 'name', title: '名称' }]
const rows: TableRow[] = [{ id: 1, name: 'Sunny UI' }]
</script>

<template>
  <UiTable :columns="columns" :rows="rows" />
</template>`,
    },
  ],
  sections: [
    {
      title: 'TableColumn',
      columns: [
        { key: 'field', label: '字段' },
        { key: 'type', label: '类型' },
        { key: 'description', label: '说明' },
      ],
      rows: [
        { field: 'key', type: 'string', description: '列字段名。' },
        { field: 'title', type: 'string', description: '列标题。' },
        { field: 'width', type: 'string', description: '可选列宽。' },
        { field: 'align', type: "'left' | 'center' | 'right'", description: '对齐方式。' },
        {
          field: 'formatter',
          type: '(value, row, index) => string | number',
          description: '自定义单元格渲染文本。',
        },
      ],
    },
  ],
}
