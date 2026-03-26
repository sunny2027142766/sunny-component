<template>
  <div
    class="my-6 overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 shadow-sm shadow-slate-950/5 backdrop-blur dark:border-slate-800 dark:bg-slate-950/75 dark:shadow-black/20"
  >
    <div
      class="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4 dark:border-slate-800"
    >
      <div>
        <p class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ title }}</p>
        <p v-if="description" class="mt-1 text-xs leading-5 text-slate-400 dark:text-slate-500">
          {{ description }}
        </p>
      </div>
      <slot name="meta" />
    </div>
    <div class="p-5">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>
