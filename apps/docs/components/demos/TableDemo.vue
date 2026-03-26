<script setup lang="ts">
import type { TableColumn, TableRow } from '@grid-edit/ui'

const columns: TableColumn[] = [
  { key: 'component', title: '组件' },
  { key: 'owner', title: 'Owner', width: '140px' },
  { key: 'status', title: '状态', align: 'center', width: '120px' },
]

const rows: TableRow[] = [
  { id: 1, component: 'UiButton', owner: 'Aster', status: '稳定' },
  { id: 2, component: 'UiTable', owner: 'Luna', status: '迭代中' },
  { id: 3, component: 'UiForm', owner: 'Milo', status: '稳定' },
]
</script>

<template>
  <DemoBlock title="在线 Demo" description="Table 用列配置描述结构，适合后台数据展示。">
    <UiTable :columns="columns" :rows="rows" />
  </DemoBlock>
</template>
