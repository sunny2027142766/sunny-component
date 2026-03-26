<script setup lang="ts">
defineProps<{
  columns: Array<{
    key: string
    label: string
  }>
  rows: Array<Record<string, string>>
}>()
</script>

<template>
  <div class="overflow-hidden rounded-[24px] border border-slate-200 bg-white">
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-slate-200 text-sm">
        <thead class="bg-slate-50 text-slate-500">
          <tr>
            <th v-for="column in columns" :key="column.key" class="px-4 py-3 text-left font-medium">
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 text-slate-700">
          <tr v-for="(row, index) in rows" :key="index">
            <td v-for="column in columns" :key="column.key" class="px-4 py-3 align-top leading-6">
              <code
                v-if="String(row[column.key] ?? '').includes('`')"
                class="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-600"
              >
                {{ row[column.key] }}
              </code>
              <span v-else>{{ row[column.key] }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
