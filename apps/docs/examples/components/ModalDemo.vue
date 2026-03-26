<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <DemoBlock title="在线 Demo" description="Modal 用于承载轻量流程和确认操作。">
    <UiButton @click="open = true">打开弹层</UiButton>
    <UiModal
      v-model="open"
      title="Sunny Docs Demo"
      description="这里与 Sunny Studio 消费同一个 Modal 组件。"
      width="sm"
      show-footer
    >
      <p class="text-sm leading-7 text-slate-500 dark:text-slate-400">
        按钮、遮罩、面板尺寸和关闭逻辑都来自 Sunny UI。
      </p>
    </UiModal>
  </DemoBlock>
</template>
