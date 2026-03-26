<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonSize, ButtonVariant } from '../../../types/components'
import { classNames } from '../../../utils/classNames'

defineOptions({
  name: 'UiButton',
})

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant
    size?: ButtonSize
    block?: boolean
    loading?: boolean
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    variant: 'primary',
    size: 'md',
    block: false,
    loading: false,
    disabled: false,
    type: 'button',
  },
)

const classes = computed(() =>
  classNames(
    'inline-flex items-center justify-center gap-2 rounded-full border font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60 disabled:cursor-not-allowed disabled:opacity-55',
    props.block && 'w-full',
    props.size === 'sm' && 'px-3.5 py-2 text-sm',
    props.size === 'md' && 'px-4 py-2.5 text-sm',
    props.size === 'lg' && 'px-5 py-3 text-base',
    props.variant === 'primary' &&
      'border-transparent bg-slate-950 text-white shadow-lg shadow-slate-950/10 hover:-translate-y-0.5 hover:bg-slate-900 dark:bg-teal-500 dark:text-slate-950 dark:shadow-teal-950/30 dark:hover:bg-teal-400',
    props.variant === 'secondary' &&
      'border-slate-200 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-teal-600/20 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-teal-500/40 dark:hover:bg-slate-800 dark:hover:text-teal-300',
    props.variant === 'ghost' &&
      'border-transparent bg-teal-50 text-teal-700 hover:-translate-y-0.5 hover:bg-teal-100 dark:bg-teal-500/12 dark:text-teal-300 dark:hover:bg-teal-500/18',
    props.variant === 'danger' &&
      'border-transparent bg-rose-600 text-white shadow-lg shadow-rose-600/15 hover:-translate-y-0.5 hover:bg-rose-500 dark:bg-rose-500 dark:shadow-rose-950/30 dark:hover:bg-rose-400',
  ),
)
</script>

<template>
  <button :type="type" :disabled="disabled || loading" :class="classes">
    <span
      v-if="loading"
      class="size-4 animate-spin rounded-full border-2 border-current border-r-transparent"
    />
    <slot />
  </button>
</template>
