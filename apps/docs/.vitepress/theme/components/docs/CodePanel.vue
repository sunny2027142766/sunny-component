<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    code: string
    language?: string
    description?: string
  }>(),
  {
    language: 'ts',
    description: '',
  },
)
</script>

<template>
  <div
    class="overflow-hidden rounded-[24px] border border-slate-200/80 bg-slate-950 text-white dark:border-slate-800 dark:bg-slate-950"
  >
    <div class="border-b border-white/10 px-5 py-4 dark:border-slate-800">
      <div class="flex items-center justify-between gap-4">
        <p class="text-sm font-semibold">{{ title }}</p>
        <span
          class="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60"
        >
          {{ language }}
        </span>
      </div>
      <p v-if="description" class="mt-2 text-sm leading-6 text-white/60 dark:text-slate-400">
        {{ description }}
      </p>
    </div>
    <pre
      class="overflow-x-auto px-5 py-4 text-sm leading-7 text-white/85 dark:text-slate-200"
    ><code>{{ code }}</code></pre>
  </div>
</template>
