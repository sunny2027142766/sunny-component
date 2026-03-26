<script setup lang="ts">
import ModalDemo from './demos/ModalDemo.vue'
</script>

# Modal

<ModalDemo />

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `modelValue` | `boolean` | `-` | 控制开关 |
| `title` | `string` | `''` | 标题 |
| `description` | `string` | `''` | 描述 |
| `width` | `'sm' \| 'md' \| 'lg'` | `'md'` | 面板宽度 |
| `closeOnOverlay` | `boolean` | `true` | 点击遮罩是否关闭 |
| `confirmText` | `string` | `'确认'` | 默认确认文案 |
| `cancelText` | `string` | `'取消'` | 默认取消文案 |
| `showFooter` | `boolean` | `false` | 是否展示默认 footer |

## 事件

| 事件 | 说明 |
| --- | --- |
| `update:modelValue` | 更新开关状态 |
| `confirm` | 点击确认时触发 |
| `cancel` | 点击取消或关闭时触发 |
