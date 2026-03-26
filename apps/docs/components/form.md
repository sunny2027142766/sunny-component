<script setup lang="ts">
import FormDemo from './demos/FormDemo.vue'
</script>

# Form

<FormDemo />

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `title` | `string` | `''` | 标题 |
| `description` | `string` | `''` | 描述 |
| `submitText` | `string` | `'提交'` | 提交按钮文案 |
| `cancelText` | `string` | `'取消'` | 取消按钮文案 |
| `loading` | `boolean` | `false` | 提交加载态 |
| `showCancel` | `boolean` | `false` | 是否显示取消按钮 |
| `disabled` | `boolean` | `false` | 是否禁用提交 |

## 事件

| 事件 | 说明 |
| --- | --- |
| `submit` | 原生提交封装事件 |
| `cancel` | 点击取消时触发 |
