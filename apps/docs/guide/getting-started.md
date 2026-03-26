# 快速开始

当前仓库包含三个核心工作区：

- `packages/ui`：公共组件库，统一导出并提供按需子路径入口。
- `apps/web`：真实业务 Dashboard，直接消费组件库。
- `apps/docs`：VitePress 文档站，展示用法、Props 和在线 Demo。

## 安装

```bash
pnpm install
```

## 启动

```bash
pnpm dev
```

默认会并行拉起：

- Web 应用：`http://127.0.0.1:5173`
- 文档站：`http://127.0.0.1:4174`

## 构建

```bash
pnpm build
pnpm typecheck
```

## UI 包导入方式

根导出：

```ts
import { UiButton, UiForm, UiInput } from '@grid-edit/ui'
```

按需子路径：

```ts
import { UiButton } from '@grid-edit/ui/button'
import { UiInput } from '@grid-edit/ui/input'
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
