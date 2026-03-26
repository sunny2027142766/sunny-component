<script setup lang="ts">
import CardDemo from './demos/CardDemo.vue'
</script>

# Card

<CardDemo />

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `title` | `string` | `''` | 标题 |
| `description` | `string` | `''` | 描述 |
| `padding` | `'sm' \| 'md' \| 'lg'` | `'md'` | 内边距尺寸 |
| `tone` | `'default' \| 'soft' \| 'dark'` | `'default'` | 卡片语气 |

## Slot

| 名称 | 说明 |
| --- | --- |
| `default` | 卡片主体 |
| `header` | 自定义头部 |
| `actions` | 头部右侧操作 |
| `footer` | 底部区域 |
