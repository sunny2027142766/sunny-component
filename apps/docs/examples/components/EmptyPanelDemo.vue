<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <DemoBlock title="在线 Demo" description="EmptyPanel 用于空状态说明和下一步引导。">
    <div class="grid gap-4">
      <EmptyPanel
        title="还没有线索"
        description="先创建第一条线索，再开始跟进流程。"
        action-label="立即创建"
        @action="count += 1"
      />
      <p class="text-sm text-slate-500">按钮点击次数：{{ count }}</p>
    </div>
  </DemoBlock>
</template>
