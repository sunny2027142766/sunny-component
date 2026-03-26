# @sunny/ui

面向上层业务项目的 Vue 3 组件库，提供固定视觉风格的公共组件与常用类型、hooks、工具方法。

## 工程结构

```text
src/
  components/      # 组件实现与 docs 数据
  core/            # 组件集合与 install 插件
  docs/            # 对外文档导出
  entries/         # 子路径按需导出入口
  registry/        # 组件文档清单与目录注册表
  styles/          # 设计 token 与可选主题容器样式
  types/           # 对外类型
  utils/           # 工具函数
```

## 构建产物

- `vite build`：输出 `dist/*.js`、`dist/entries/*.js`
- `vue-tsc --emitDeclarationOnly`：输出 `dist/**/*.d.ts`
- `scripts/postbuild.mjs`：拷贝 `styles.css` 到 `dist/styles.css`

发布导出全部指向 `dist`，开发联调仍可通过上层应用 alias 指向 `src`。

## 新增组件最小流程

1. 在 `src/components/<category>/<name>/` 实现 `.vue`、`docs.ts`、`index.ts`
2. 在 `src/core/components.ts` 注册组件导出
3. 在 `src/registry/component-docs.ts` 注册文档清单
4. 在 `src/entries/` 增加子路径入口（用于 `@sunny/ui/<entry>`）
5. 执行 `pnpm --filter @sunny/ui build && pnpm --filter @sunny/ui typecheck`
