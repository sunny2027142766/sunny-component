import type { ComponentDoc } from '../../../docs/types'

export const uiModalDoc: ComponentDoc = {
  name: 'UiModal',
  title: 'Modal',
  slug: 'modal',
  category: 'feedback',
  summary: '承载确认、轻量流程和补充信息的弹层容器，统一遮罩与关闭逻辑。',
  description: '适合承载确认操作、短流程录入和说明补充，统一管理遮罩、锁滚和默认 footer。',
  status: 'stable',
  docsPath: '/components/modal',
  importName: 'UiModal',
  importPath: '@sunny/ui/modal',
  imports: [
    {
      label: '根入口导入',
      code: "import { UiModal } from '@sunny/ui'",
    },
    {
      label: '按需子路径导入',
      code: "import { UiModal } from '@sunny/ui/modal'",
    },
  ],
  props: [
    { name: 'modelValue', type: 'boolean', default: '-', description: '控制弹层开关。' },
    { name: 'title', type: 'string', default: "''", description: '弹层标题。' },
    { name: 'description', type: 'string', default: "''", description: '标题下方描述。' },
    { name: 'width', type: "'sm' | 'md' | 'lg'", default: "'md'", description: '面板宽度。' },
    { name: 'closeOnOverlay', type: 'boolean', default: 'true', description: '点击遮罩是否关闭。' },
    { name: 'confirmText', type: 'string', default: "'确认'", description: '默认确认按钮文案。' },
    { name: 'cancelText', type: 'string', default: "'取消'", description: '默认取消按钮文案。' },
    { name: 'showFooter', type: 'boolean', default: 'false', description: '是否展示默认 footer。' },
  ],
  events: [
    { name: 'update:modelValue', payload: 'boolean', description: '更新开关状态。' },
    { name: 'confirm', payload: 'void', description: '点击默认确认按钮时触发。' },
    { name: 'cancel', payload: 'void', description: '关闭弹层或点击取消时触发。' },
  ],
  slots: [
    { name: 'default', description: '弹层主体内容。' },
    { name: 'footer', description: '自定义底部操作区。' },
  ],
  examples: [
    {
      title: '默认 footer',
      description: '开启 `showFooter` 后可直接使用默认的确认/取消按钮。',
      language: 'vue',
      code: `<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <UiButton @click="open = true">打开弹层</UiButton>
  <UiModal v-model="open" title="确认发布" show-footer />
</template>`,
    },
  ],
}
