<script setup lang="ts">
import { componentCatalog, componentCategoryLabels } from '@sunny/ui'
</script>

<template>
  <div class="grid gap-6">
    <UiCard
      title="组件资产地图"
      description="组件资产、导入方式和文档入口统一来自 Sunny UI 注册表，新增组件时不再需要到处补配置。"
    >
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="entry in componentCatalog"
          :key="entry.name"
          class="rounded-[24px] border border-slate-200 bg-slate-50 p-5"
        >
          <div class="mb-4 flex items-center justify-between gap-3">
            <h3 class="text-xl font-semibold tracking-tight text-slate-950">{{ entry.title }}</h3>
            <UiBadge tone="info">{{ componentCategoryLabels[entry.category] }}</UiBadge>
          </div>
          <p class="text-sm leading-7 text-slate-500">{{ entry.summary }}</p>
          <code class="mt-4 inline-flex rounded-full bg-white px-3 py-1 text-xs text-slate-500">
            {{ `import { ${entry.importName} } from '${entry.importPath}'` }}
          </code>
          <div class="mt-5">
            <a :href="`http://127.0.0.1:4174${entry.docsPath}`" target="_blank" rel="noreferrer">
              <UiButton variant="secondary" size="sm">查看文档</UiButton>
            </a>
          </div>
        </article>
      </div>
    </UiCard>

    <UiCard
      title="为什么保留这一页"
      description="现代组件库会把运行时入口、文档导航和资产清单放在同一套元数据之上，避免信息分叉。"
    >
      <div class="grid gap-4 md:grid-cols-3">
        <div class="rounded-[24px] border border-slate-200 bg-white p-5">
          <p class="text-sm leading-7 text-slate-500">
            让业务开发快速知道已有组件边界、导入方式和文档入口，减少重复造轮子。
          </p>
        </div>
        <div class="rounded-[24px] border border-slate-200 bg-white p-5">
          <p class="text-sm leading-7 text-slate-500">
            把 Sunny Studio 内的真实使用场景和 Sunny Docs 示例互相校验，避免脱节。
          </p>
        </div>
        <div class="rounded-[24px] border border-slate-200 bg-white p-5">
          <p class="text-sm leading-7 text-slate-500">
            组件迭代时，页面、导航和文档都能同时跟着注册表更新。
          </p>
        </div>
      </div>
    </UiCard>
  </div>
</template>
