<script setup lang="ts">
import InputDemo from './demos/InputDemo.vue'
</script>

# Input

<InputDemo />

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `string \| number` | `''` | 输入值 |
| `label` | `string` | `''` | 字段标签 |
| `placeholder` | `string` | `''` | 占位提示 |
| `hint` | `string` | `''` | 辅助说明 |
| `error` | `string` | `''` | 错误提示 |
| `type` | `string` | `'text'` | 原生 input 类型 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `required` | `boolean` | `false` | 是否必填 |

## 事件

| 事件 | 说明 |
| --- | --- |
| `update:modelValue` | 输入变化时触发 |
| `blur` | 失焦时触发 |
| `focus` | 聚焦时触发 |
