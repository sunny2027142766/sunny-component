<script setup lang="ts">
import { computed } from 'vue'
import { classNames } from '../../../utils/classNames'

defineOptions({
  name: 'UiBadge',
})

const props = withDefaults(
  defineProps<{
    tone?: 'neutral' | 'success' | 'warning' | 'info'
  }>(),
  {
    tone: 'neutral',
  },
)

const classes = computed(() =>
  classNames(
    'inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]',
    props.tone === 'neutral' && 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
    props.tone === 'success' &&
      'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
    props.tone === 'warning' &&
      'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
    props.tone === 'info' && 'bg-teal-100 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300',
  ),
)
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>
