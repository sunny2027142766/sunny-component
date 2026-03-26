<script setup lang="ts">
import ButtonDemo from './demos/ButtonDemo.vue'
</script>

# Button

<ButtonDemo />

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | 按钮视觉层级 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 按钮尺寸 |
| `block` | `boolean` | `false` | 是否占满整行 |
| `loading` | `boolean` | `false` | 加载态 |
| `disabled` | `boolean` | `false` | 禁用态 |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | 原生按钮类型 |

## 用法

```vue
<script setup lang="ts">
import { UiButton } from '@grid-edit/ui'
</script>

<template>
  <UiButton>Primary</UiButton>
  <UiButton variant="secondary">Secondary</UiButton>
</template>
```
