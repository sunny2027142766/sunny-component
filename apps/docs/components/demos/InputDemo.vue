<script setup lang="ts">
import { ref } from 'vue'

const value = ref('组件联调')
</script>

<template>
  <DemoBlock title="在线 Demo" description="Input 支持 label、hint、error 和 v-model。">
    <div class="grid max-w-xl gap-4">
      <UiInput v-model="value" label="字段名称" hint="输入内容会实时反映到下方。" />
      <div class="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-500">当前值：{{ value }}</div>
      <UiInput model-value="" label="错误态" error="这里是校验提示文案。" />
    </div>
  </DemoBlock>
</template>
