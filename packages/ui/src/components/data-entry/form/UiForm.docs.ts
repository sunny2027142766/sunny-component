import type { ComponentDoc } from '../../../docs/types'

export const uiFormDoc: ComponentDoc = {
  name: 'UiForm',
  title: 'Form',
  slug: 'form',
  category: 'data-entry',
  summary: '围绕提交流程组织字段、按钮和校验时机，适合业务表单编排。',
  description: '适合页内录入和弹层表单，统一动作区、标题描述与提交时机。',
  status: 'stable',
  docsPath: '/components/form',
  importName: 'UiForm',
  importPath: '@sunny/ui/form',
  imports: [
    {
      label: '根入口导入',
      code: "import { UiForm } from '@sunny/ui'",
    },
    {
      label: '按需子路径导入',
      code: "import { UiForm } from '@sunny/ui/form'",
    },
  ],
  props: [
    { name: 'title', type: 'string', default: "''", description: '表单标题。' },
    { name: 'description', type: 'string', default: "''", description: '表单描述。' },
    { name: 'submitText', type: 'string', default: "'提交'", description: '提交按钮文案。' },
    { name: 'cancelText', type: 'string', default: "'取消'", description: '取消按钮文案。' },
    { name: 'loading', type: 'boolean', default: 'false', description: '提交加载态。' },
    { name: 'showCancel', type: 'boolean', default: 'false', description: '是否显示取消按钮。' },
    { name: 'disabled', type: 'boolean', default: 'false', description: '是否禁用提交。' },
  ],
  events: [
    { name: 'submit', payload: 'void', description: '表单提交时触发。' },
    { name: 'cancel', payload: 'void', description: '点击取消按钮时触发。' },
  ],
  slots: [
    { name: 'default', description: '表单字段区域。' },
    { name: 'actions', description: '自定义底部操作区。' },
  ],
  examples: [
    {
      title: '与 Input 组合',
      description: '在 `UiForm` 中使用输入型组件组织录入流程。',
      language: 'vue',
      code: `<template>
  <UiForm title="创建项目" submit-text="保存">
    <UiInput label="项目名称" />
    <UiInput label="负责人" />
  </UiForm>
</template>`,
    },
  ],
}
