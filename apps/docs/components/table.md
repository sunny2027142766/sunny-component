<script setup lang="ts">
import TableDemo from './demos/TableDemo.vue'
</script>

# Table

<TableDemo />

## Props

| 属性        | 类型            | 默认值       | 说明     |
| ----------- | --------------- | ------------ | -------- |
| `columns`   | `TableColumn[]` | `-`          | 列配置   |
| `rows`      | `TableRow[]`    | `-`          | 行数据   |
| `rowKey`    | `string`        | `'id'`       | 行唯一键 |
| `emptyText` | `string`        | `'暂无数据'` | 空态文案 |

## TableColumn

| 字段        | 类型                                      | 说明                 |
| ----------- | ----------------------------------------- | -------------------- |
| `key`       | `string`                                  | 字段名               |
| `title`     | `string`                                  | 列标题               |
| `width`     | `string`                                  | 可选列宽             |
| `align`     | `'left' \| 'center' \| 'right'`           | 对齐方式             |
| `formatter` | `(value, row, index) => string \| number` | 自定义单元格渲染文本 |
