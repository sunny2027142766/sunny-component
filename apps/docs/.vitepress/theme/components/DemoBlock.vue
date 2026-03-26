<template>
  <div class="my-6 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
    <div class="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4">
      <div>
        <p class="text-sm font-semibold text-slate-900">{{ title }}</p>
        <p v-if="description" class="mt-1 text-xs leading-5 text-slate-400">{{ description }}</p>
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
