# grid-edit-demo

基于 `pnpm workspace` 的 Vue 3 Monorepo，包含：

- `packages/ui`：公共组件库，提供统一导出与按需子路径入口
- `apps/web`：业务 Dashboard，真实消费组件库
- `apps/docs`：VitePress 文档站，展示组件用法、Props 和 Demo

常用命令：

```bash
pnpm install
pnpm dev
pnpm build
pnpm typecheck
```

文档站入口：

```bash
pnpm dev:docs
pnpm build:docs
pnpm preview:docs
```

说明：当前仓库默认 `dev/build` 已验证通过 `web + ui` 链路；`docs` 工作区在当前受限 sandbox 内可以启动开发服务，但静态构建会被底层 `esbuild` 子进程限制拦截。
