<script setup lang="ts">
import { computed } from 'vue'
import type { TableColumn, TableRow } from '../../../types/components'

defineOptions({
  name: 'UiTable',
})

const props = withDefaults(
  defineProps<{
    columns: TableColumn[]
    rows: TableRow[]
    rowKey?: string
    emptyText?: string
  }>(),
  {
    rowKey: 'id',
    emptyText: '暂无数据',
  },
)

const hasRows = computed(() => props.rows.length > 0)

function formatCell(row: TableRow, column: TableColumn, index: number) {
  const rawValue = row[column.key as string]

  if (column.formatter) {
    return column.formatter(rawValue, row, index)
  }

  if (rawValue === null || rawValue === undefined || rawValue === '') {
    return '--'
  }

  return String(rawValue)
}

function alignClass(align?: TableColumn['align']) {
  if (align === 'center') {
    return 'text-center'
  }

  if (align === 'right') {
    return 'text-right'
  }

  return 'text-left'
}
</script>

<template>
  <div
    class="overflow-hidden rounded-[28px] border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950/75"
  >
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
        <thead class="bg-slate-50/80 text-slate-500 dark:bg-slate-900/80 dark:text-slate-400">
          <tr>
            <th
              v-for="column in columns"
              :key="String(column.key)"
              :class="['px-4 py-3 font-medium', alignClass(column.align)]"
              :style="column.width ? { width: column.width } : undefined"
            >
              {{ column.title }}
            </th>
          </tr>
        </thead>
        <tbody
          v-if="hasRows"
          class="divide-y divide-slate-100 text-slate-700 dark:divide-slate-800 dark:text-slate-200"
        >
          <tr
            v-for="(row, index) in rows"
            :key="String(row[rowKey] ?? index)"
            class="transition hover:bg-slate-50/80 dark:hover:bg-slate-900/80"
          >
            <td
              v-for="column in columns"
              :key="`${String(row[rowKey] ?? index)}-${String(column.key)}`"
              :class="['px-4 py-3.5 align-top', alignClass(column.align)]"
            >
              {{ formatCell(row, column, index) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      v-if="!hasRows"
      class="grid min-h-40 place-items-center px-6 py-10 text-sm text-slate-400 dark:text-slate-500"
    >
      {{ emptyText }}
    </div>
  </div>
</template>
