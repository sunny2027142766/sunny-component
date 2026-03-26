<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { classNames } from '../../../utils/classNames'

defineOptions({
  name: 'UiCard',
})

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    padding?: 'sm' | 'md' | 'lg'
    tone?: 'default' | 'soft' | 'dark'
  }>(),
  {
    title: '',
    description: '',
    padding: 'md',
    tone: 'default',
  },
)

const slots = useSlots()

const cardClass = computed(() =>
  classNames(
    'rounded-[28px] border shadow-sm backdrop-blur',
    props.padding === 'sm' && 'p-4',
    props.padding === 'md' && 'p-6',
    props.padding === 'lg' && 'p-8',
    props.tone === 'default' &&
      'border-slate-200/80 bg-white/90 shadow-slate-950/5 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-100 dark:shadow-black/20',
    props.tone === 'soft' &&
      'border-transparent bg-slate-900 text-white shadow-slate-950/10 dark:bg-slate-900/95 dark:shadow-black/30',
    props.tone === 'dark' &&
      'border-slate-900/70 bg-slate-950 text-white shadow-slate-950/20 dark:border-slate-700 dark:bg-black dark:shadow-black/40',
  ),
)

const hasHeader = computed(() =>
  Boolean(props.title || props.description || slots.header || slots.actions),
)
</script>

<template>
  <section :class="cardClass">
    <header v-if="hasHeader" class="mb-5 flex items-start justify-between gap-4">
      <div class="grid gap-1.5">
        <slot name="header">
          <h3 v-if="title" class="text-lg font-semibold tracking-tight text-current">
            {{ title }}
          </h3>
          <p v-if="description" class="max-w-2xl text-sm leading-6 text-current/70">
            {{ description }}
          </p>
        </slot>
      </div>
      <div v-if="$slots.actions" class="shrink-0">
        <slot name="actions" />
      </div>
    </header>

    <div class="grid gap-4">
      <slot />
    </div>

    <footer v-if="$slots.footer" class="mt-5">
      <slot name="footer" />
    </footer>
  </section>
</template>
