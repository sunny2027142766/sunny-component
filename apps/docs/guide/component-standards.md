# 组件规范

`Sunny UI` 采用面向组件库的现代化组织方式，目标不是“把组件写出来”就结束，而是让组件在导出、类型、文档、演示和后续维护上都具备稳定结构。

## 源码分层

```text
packages/ui/src
  components/      # 组件实现
  core/            # 插件安装与运行时注册
  registry/        # 组件注册表与文档元数据
  hooks/           # 组合式能力
  styles/          # 全局样式与设计令牌
  types/           # 对外类型定义
  utils/           # 纯工具函数
```

## 组件设计原则

### 1. 组件名统一以 `Ui` 开头

- 基础组件使用 `UiButton`、`UiInput` 这类稳定命名
- 业务组件可以继续保留独立语义，如 `MetricPanel`

### 2. Props 必须先抽象语义，再映射视觉

- 优先暴露 `variant`、`tone`、`size`、`align` 这类语义化字段
- 避免直接把颜色值、像素值暴露成公共 API

### 3. 事件名遵循 Vue 社区习惯

- 双向绑定统一使用 `modelValue` / `update:modelValue`
- 行为事件使用 `submit`、`cancel`、`confirm` 这类可读名字

### 4. 样式优先走共享 tokens 和 class 组合

- 公共视觉规则放在 `styles/`
- 条件 class 组合放在组件内，用 `classNames` 保持可读性
- 不为单个业务场景写不可复用的公共样式 API

### 5. 类型必须从组件库出口可见

- 公共类型统一沉淀到 `types/`
- 组件页、业务应用和文档站都应从 `@sunny/ui` 获取类型

## 新增组件 checklist

1. 在 `components/` 下实现组件
2. 在 `core/components.ts` 注册导出
3. 在 `registry/component-docs.ts` 补充文档与分类清单（注册表自动消费）
4. 按需增加子路径导出
5. 在 `docs` 中补 Demo、Props、事件和使用说明
6. 运行 `lint`、`typecheck`、`build`

## 注册表规范

组件注册表是这套工程的单一事实来源，至少要维护这些字段：

- `title`：文档展示名
- `slug`：路由与文档文件名
- `category`：组件分类
- `summary`：一句话说明
- `importName` / `importPath`：推荐导入方式
- `docsPath`：文档路径

新增组件时，优先更新注册表，再让 `Sunny Studio` 和 `Sunny Docs` 同步消费这份数据。
