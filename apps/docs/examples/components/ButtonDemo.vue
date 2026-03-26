<script setup lang="ts">
const command = "import { UiButton } from '@sunny/ui/button'"
</script>

<template>
  <DemoBlock title="在线 Demo" description="Primary、Secondary、Ghost、Danger 四种按钮层级。">
    <div class="flex flex-wrap gap-3">
      <UiButton>Primary</UiButton>
      <UiButton variant="secondary">Secondary</UiButton>
      <UiButton variant="ghost">Ghost</UiButton>
      <UiButton variant="danger">Danger</UiButton>
    </div>
    <template #meta>
      <code class="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">{{ command }}</code>
    </template>
  </DemoBlock>
</template>
