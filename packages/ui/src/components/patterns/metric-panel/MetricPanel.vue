<script setup lang="ts">
import { computed } from 'vue'
import { UiBadge } from '../../feedback/badge'
import { UiCard } from '../../layout/card'

defineOptions({
  name: 'MetricPanel',
})

const props = withDefaults(
  defineProps<{
    title: string
    value: string
    trend?: string
    hint?: string
    tone?: 'neutral' | 'success' | 'warning' | 'info'
  }>(),
  {
    trend: '',
    hint: '',
    tone: 'neutral',
  },
)

const hasTrend = computed(() => Boolean(props.trend))
</script>

<template>
  <UiCard>
    <div class="flex items-center justify-between gap-4">
      <p class="text-sm text-slate-500 dark:text-slate-400">{{ title }}</p>
      <UiBadge v-if="hasTrend" :tone="tone">{{ trend }}</UiBadge>
    </div>
    <p class="text-4xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">{{ value }}</p>
    <p v-if="hint" class="text-sm leading-6 text-slate-500 dark:text-slate-400">{{ hint }}</p>
  </UiCard>
</template>
