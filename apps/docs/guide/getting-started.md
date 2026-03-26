# 快速开始

当前仓库包含三个核心工作区：

- `packages/ui`：`Sunny UI` 组件库，统一导出并提供按需子路径入口。
- `apps/web`：`Sunny Studio` 业务应用，直接消费 `Sunny UI`。
- `apps/docs`：`Sunny Docs` 文档站，展示用法、Props 和在线 Demo。

## 安装

```bash
pnpm install
```

## 启动

```bash
pnpm dev
```

默认会并行拉起：

- `Sunny Studio`：`http://127.0.0.1:5173`
- `Sunny Docs`：`http://127.0.0.1:4174`

## 构建

```bash
pnpm build
pnpm typecheck
```

## 现代化目录组织

当前组件库把运行时、注册表和文档消费分成了几层：

```text
packages/ui/src
  components/   # Vue 组件实现
  core/         # SunnyUIPlugin 与运行时注册
  registry/     # 组件目录、分类、导入方式、文档路径
  hooks/        # composables
  types/        # 公共类型
```

这样新增一个公共组件时，`Sunny Studio` 的组件资产页和 `Sunny Docs` 的导航都可以沿着同一份注册表更新。

## UI 包接入方式

推荐在 `Sunny Studio` 或 `Sunny Docs` 的应用入口统一安装 `SunnyUIPlugin`，这样页面和文档示例里可以直接使用全局组件，并且保留类型提示：

```ts
import { createApp } from 'vue'
import { SunnyUIPlugin } from '@sunny/ui'
import '@sunny/ui/styles.css'
import App from './App.vue'

createApp(App).use(SunnyUIPlugin).mount('#app')
```

完成安装后，模板中可以直接使用：

```vue
<template>
  <UiButton>Primary</UiButton>
  <UiInput label="项目名称" />
</template>
```

如果你需要工具函数、类型或局部注册，也可以继续从根入口或子路径按需导入：

根导出：

```ts
import { UiButton, UiForm, UiInput } from '@sunny/ui'
```

按需子路径：

```ts
import { UiButton } from '@sunny/ui/button'
import { UiInput } from '@sunny/ui/input'
```

## 目录建议

```text
apps/
  web/
  docs/
packages/
  ui/
```

这套结构已经足够继续扩展 `request`、`icons`、`eslint-config` 等共享包。
