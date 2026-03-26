import type { ComponentDoc } from '../../../docs/types'

export const uiInputDoc: ComponentDoc = {
  name: 'UiInput',
  title: 'Input',
  slug: 'input',
  category: 'data-entry',
  summary: '轻量字段录入能力，内置 label、hint、error 等表单常用表达。',
  description: '适合文本输入、轻量录入和表单组合场景，统一字段标签、提示和错误反馈。',
  status: 'stable',
  docsPath: '/components/input',
  importName: 'UiInput',
  importPath: '@sunny/ui/input',
  imports: [
    {
      label: '根入口导入',
      code: "import { UiInput } from '@sunny/ui'",
    },
    {
      label: '按需子路径导入',
      code: "import { UiInput } from '@sunny/ui/input'",
    },
  ],
  props: [
    { name: 'modelValue', type: 'string | number', default: "''", description: '输入值。' },
    { name: 'label', type: 'string', default: "''", description: '字段标签。' },
    { name: 'placeholder', type: 'string', default: "''", description: '占位提示。' },
    { name: 'hint', type: 'string', default: "''", description: '辅助说明。' },
    { name: 'error', type: 'string', default: "''", description: '错误提示。' },
    { name: 'type', type: 'string', default: "'text'", description: '原生 input 类型。' },
    { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用。' },
    { name: 'required', type: 'boolean', default: 'false', description: '是否必填。' },
    {
      name: 'id',
      type: 'string | undefined',
      default: 'undefined',
      description: '自定义 input id。',
    },
  ],
  events: [
    { name: 'update:modelValue', payload: 'string | number', description: '输入变化时触发。' },
    { name: 'blur', payload: 'FocusEvent', description: '输入框失焦时触发。' },
    { name: 'focus', payload: 'FocusEvent', description: '输入框聚焦时触发。' },
  ],
  examples: [
    {
      title: '双向绑定',
      description: '通过 `v-model` 与页面状态联动。',
      language: 'vue',
      code: `<script setup lang="ts">
import { ref } from 'vue'

const project = ref('')
</script>

<template>
  <UiInput v-model="project" label="项目名称" hint="输入内容会实时同步。" />
</template>`,
    },
  ],
}
