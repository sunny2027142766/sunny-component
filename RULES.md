# 现代化 Vue UI 组件库工程化全局优化

## 目标

对当前 Monorepo 项目进行系统性前端工程化治理，建立现代化 Vue UI
组件库研发基础设施，兼顾**敏捷交付**与**工程规范**，为持续迭代奠定坚实底座。

**技术栈基准（均使用最新稳定版）：**


## Monorepo 目录结构
```
root/
├── apps/
│   ├── docs/                      # VitePress 文档站（组件 API / 使用指南）
│   └── playground/                # Vite 开发调试沙箱
├── packages/
│   ├── ui/                        # 核心 Vue UI 组件库（主包）
│   ├── tokens/                    # Design Tokens（CSS Variables 输出）
│   ├── composables/               # 通用 Vue Composables
│   ├── utils/                     # 纯函数工具集（无 Vue 依赖）
│   ├── icons/                     # SVG Icon Vue 组件集
│   └── shared/                    # 跨包共享类型 / 常量
├── tooling/
│   ├── eslint-config/             # 统一 ESLint Flat Config 配置包
│   ├── tsconfig/                  # 统一 TS 基础配置（base / vue / lib）
│   └── build-config/              # 统一 Vite / tsup 构建配置
├── .changeset/                    # Changesets 版本记录
├── pnpm-workspace.yaml
├── turbo.json
└── CLAUDE.md                      # AI IDE 全局规则文件
```

---

## 路径与模块规范

### 禁止跨层级相对路径

- 严禁出现 `../../`、`../../../` 等跨两级以上的相对路径引用
- 所有跨目录引用统一使用**路径别名（alias）**替代

### 路径别名配置

**必须在 `vite.config.ts` 与 `tsconfig.json` 中保持完全同步：**
```ts
// tooling/build-config/alias.ts（统一定义，各包引用此文件）
import { resolve } from 'node:path'

export const sharedAlias = (root: string) => ({
  '@ui':          resolve(root, 'packages/ui/src'),
  '@tokens':      resolve(root, 'packages/tokens/src'),
  '@composables': resolve(root, 'packages/composables/src'),
  '@utils':       resolve(root, 'packages/utils/src'),
  '@icons':       resolve(root, 'packages/icons/src'),
  '@shared':      resolve(root, 'packages/shared/src'),
})
```
```jsonc
// tooling/tsconfig/base.json
{
  "compilerOptions": {
    "paths": {
      "@ui/*":          ["../../packages/ui/src/*"],
      "@tokens/*":      ["../../packages/tokens/src/*"],
      "@composables/*": ["../../packages/composables/src/*"],
      "@utils/*":       ["../../packages/utils/src/*"],
      "@icons/*":       ["../../packages/icons/src/*"],
      "@shared/*":      ["../../packages/shared/src/*"]
    }
  }
}
```

### Monorepo 子包引用规范

子包之间必须通过 `package.json` 的 `name` 字段使用**包名引用**，
禁止使用文件系统路径跨包引用：
```ts
// ✅ 正确：通过包名引用
import { Button } from '@scope/ui'
import { useCounter } from '@scope/composables'

// ❌ 禁止：文件系统路径跨包
import { Button } from '../../packages/ui/src'
```

每个子包须在 `package.json` 中正确声明 `exports`：
```jsonc
// packages/ui/package.json
{
  "name": "@scope/ui",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    },
    "./*": {
      "import": "./dist/*.mjs",
      "types": "./dist/*.d.ts"
    }
  },
  "peerDependencies": {
    "vue": ">=3.5.0"
  }
}
```

---

## TypeScript 配置规范

`tooling/tsconfig/` 目录下维护三份基础配置，子包通过 `extends` 继承，
只写差异部分，**禁止各子包单独降级 strict 设置**：
```jsonc
// tooling/tsconfig/base.json（通用基础）
{
  "compilerOptions": {
    "strict": true,
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}

// tooling/tsconfig/vue.json（Vue SFC 专用）
{
  "extends": "./base.json",
  "compilerOptions": {
    "jsx": "preserve",
    "jsxImportSource": "vue"
  }
}

// tooling/tsconfig/lib.json（构建库产物专用）
{
  "extends": "./vue.json",
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "emitDeclarationOnly": true,
    "outDir": "dist"
  }
}
```
```jsonc
// packages/ui/tsconfig.json（子包只写差异）
{
  "extends": "../../tooling/tsconfig/vue.json",
  "include": ["src/**/*", "env.d.ts"]
}
```

---

## 构建规范

### 统一使用 tsup 构建组件库
```ts
// tooling/build-config/tsup.base.ts
import { defineConfig } from 'tsup'
import vue from 'unplugin-vue/esbuild'

export const baseConfig = defineConfig({
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  treeshake: true,
  external: ['vue', '@vueuse/core'],
  esbuildPlugins: [vue()],
})
```
```ts
// packages/ui/tsup.config.ts（子包继承后按需覆盖）
import { baseConfig } from '../../tooling/build-config/tsup.base'
import { defineConfig } from 'tsup'

export default defineConfig({
  ...baseConfig,
  entry: { index: 'src/index.ts' },
})
```

**构建产物要求：**

- 同时输出 `ESM`（`.mjs`）和 `CJS`（`.cjs`）格式
- 自动生成 `.d.ts` 类型声明及 `.d.ts.map` sourcemap
- `vue` / `@vueuse/core` 等框架依赖必须声明为 `external`，不打入产物
- `dist/` 目录不提交至 Git（`.gitignore` 中排除）

### Turborepo 任务编排
```jsonc
// turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "typecheck": {
      "dependsOn": ["^build"]
    },
    "test": {
      "dependsOn": ["^build"]
    },
    "lint": {},
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

---

## 样式规范

### Design Tokens（packages/tokens）

所有 Token 集中定义，以 CSS Variables 形式输出，禁止各组件硬编码色值/尺寸：
```ts
// packages/tokens/src/index.ts
export const tokens = {
  color: {
    primary:   'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    danger:    'var(--color-danger)',
    // ...
  },
  space: {
    xs: 'var(--space-xs)',
    sm: 'var(--space-sm)',
    md: 'var(--space-md)',
    // ...
  },
} as const
```

### UnoCSS 配置

统一在根目录配置，基于 Token 定义主题，禁止写任意魔法数字：
```ts
// uno.config.ts（根目录统一配置）
import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  theme: {
    colors: {
      primary:   'var(--color-primary)',
      secondary: 'var(--color-secondary)',
    },
    spacing: {
      xs: 'var(--space-xs)',
      sm: 'var(--space-sm)',
    },
  },
})
```

### `.vue` 文件样式规则

- `<style>` 块统一使用 `scoped`
- 跨组件样式通过 CSS Variables（Token）传递，禁止 `deep` 穿透选择器滥用
- 禁止硬编码颜色、间距等设计值

---

## Vue 组件开发规范

### 单组件目录结构
```
packages/ui/src/components/Button/
├── Button.vue           # 组件实现（SFC）
├── Button.types.ts      # Props / Emits / Slots 类型定义
├── Button.test.ts       # 单元测试（Vitest + @vue/test-utils）
├── Button.story.vue     # Histoire Story（组件文档）
└── index.ts             # 公共导出（唯一出口）
```

### SFC 书写规范
```vue
<script setup lang="ts">
// 顺序：类型导入 → 组件导入 → composables/utils → Props/Emits → 状态 → 计算 → 方法 → 生命周期
import type { ButtonProps } from './Button.types'

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size:    'md',
  disabled: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<template>
  <!-- 单根节点优先，使用语义化标签 -->
  <button
    :class="['btn', `btn--${props.variant}`, `btn--${props.size}`]"
    :disabled="props.disabled"
    @click="emit('click', $event)"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: var(--space-sm) var(--space-md);
  color:   var(--color-primary);
}
</style>
```

### Props / Emits 类型规范
```ts
// Button.types.ts
export interface ButtonProps {
  variant?:  'primary' | 'secondary' | 'ghost' | 'danger'
  size?:     'xs' | 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?:  boolean
}

// ✅ 使用 defineProps<T>() 泛型写法
// ❌ 禁止 PropType 运行时声明与泛型写法混用
// ❌ 禁止 inline any
```

### Composables 规范（packages/composables）
```ts
// ✅ useXxx 命名，明确返回类型，支持 SSR，使用 readonly 保护状态
export function useCounter(initial = 0) {
  const count = ref(initial)
  const increment = () => count.value++
  const reset     = () => { count.value = initial }
  return { count: readonly(count), increment, reset }
}
```

### 导出收敛规范
```ts
// packages/ui/src/components/Button/index.ts
export { default as Button } from './Button.vue'
export type { ButtonProps }  from './Button.types'

// packages/ui/src/index.ts（整包唯一出口，集中 re-export）
export * from './components/Button'
export * from './components/Input'
// ...

// 支持 app.use(MyLib) 全量注册
import type { App } from 'vue'
import { Button, Input } from './components'

export const install = (app: App) => {
  app.component('Button', Button)
  app.component('Input', Input)
}

export default { install }
```

---

##  代码质量规范

### ESLint 9.x Flat Config
```ts
// tooling/eslint-config/index.ts（统一配置包，各子项目直接引用）
import pluginVue  from 'eslint-plugin-vue'
import tseslint   from 'typescript-eslint'
import prettier   from 'eslint-config-prettier'

export default [
  ...pluginVue.configs['flat/vue3-recommended'],
  ...tseslint.configs.recommended,
  prettier,
  {
    rules: {
      'vue/component-api-style':      ['error', ['script-setup']],
      'vue/define-macros-order':      ['error', { order: ['defineProps', 'defineEmits'] }],
      'vue/block-order':              ['error', { order: ['script', 'template', 'style'] }],
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
]
```
```ts
// eslint.config.ts（子包继承，只写差异规则）
import base from '../../tooling/eslint-config'
export default [...base]
```

### 提交前自动检查
```ts
// .lintstagedrc.mjs（根目录统一配置）
export default {
  '*.{ts,tsx,vue}': [
    'eslint --fix',
    'prettier --write',
  ],
  '*.{css,json,md}': ['prettier --write'],
}
```
```ts
// commitlint.config.ts（commit 规范：feat/fix/docs/chore/refactor/test）
export default {
  extends: ['@commitlint/config-conventional'],
}
```

## ✅ 每次代码生成 / 重构后的自动检查清单

- [ ] 无 `../../` 以上层级的相对路径引用
- [ ] 跨包引用均使用包名（`workspace:*`），无文件系统路径跨包
- [ ] `vite.config.ts` alias 与 `tsconfig.json` paths **完全同步**
- [ ] 新增组件已在 `packages/ui/src/index.ts` 导出（组件 + 类型）
- [ ] Props 使用 `defineProps<T>()` 泛型，无 `PropType` 混用，无 `any`
- [ ] Emits 使用 `defineEmits<{}>()` 类型写法
- [ ] `<style>` 块已加 `scoped`，无硬编码色值/尺寸，全部引用 Token
- [ ] `vue` / `@vueuse/core` 已声明为构建 `external`
- [ ] 通过 `vue-tsc --noEmit` 类型检查
- [ ] 新增 Composable 已放入 `packages/composables`，以 `useXxx` 命名
---

## 🚀 持续开发原则

1. **新增子包** → 在 `pnpm-workspace.yaml` 注册，`extends` 继承 `tooling/` 配置
2. **新增组件** → 遵循单组件目录结构，更新 `packages/ui/src/index.ts`
3. **新增 Composable** → 放入 `packages/composables`，`useXxx` 命名
4. **跨包依赖** → 通过 `workspace:*` 协议声明，Turborepo 管理构建顺序
5. **破坏性变更** → 执行 `pnpm changeset`，遵循 SemVer，更新 CHANGELOG
6. **新增构建配置** → 统一在 `tooling/build-config/` 中维护，不允许子包自建