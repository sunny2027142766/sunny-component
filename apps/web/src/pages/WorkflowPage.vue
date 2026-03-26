<script setup lang="ts">
const steps = [
  {
    title: 'pnpm workspace',
    desc: '解决包之间的本地联调和依赖组织，让应用与组件库在同一仓库演进。',
  },
  {
    title: 'Turbo pipeline',
    desc: '用任务图驱动构建、类型检查和 dev，多入口协同时开销更可控。',
  },
  {
    title: 'Tailwind + VitePress',
    desc: '既有业务页面的快速搭建效率，也有文档站和在线 Demo 的落地路径。',
  },
]
</script>

<template>
  <div class="grid gap-6">
    <UiCard
      title="交付链路"
      description="你现在的仓库已经不只是一个页面项目，而是一套完整前端工程原型。"
    >
      <div class="grid gap-4 lg:grid-cols-3">
        <article
          v-for="step in steps"
          :key="step.title"
          class="rounded-[24px] border border-slate-200 bg-white p-5"
        >
          <div class="mb-3 flex items-center justify-between gap-3">
            <h3 class="text-lg font-semibold text-slate-950">{{ step.title }}</h3>
            <UiBadge tone="success">online</UiBadge>
          </div>
          <p class="text-sm leading-7 text-slate-500">{{ step.desc }}</p>
        </article>
      </div>
    </UiCard>

    <UiCard
      title="下一步可扩展方向"
      description="如果你继续往真实团队协作推进，这些包会自然长出来。"
    >
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div
          class="rounded-[24px] border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-500"
        >
          `packages/eslint-config`
        </div>
        <div
          class="rounded-[24px] border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-500"
        >
          `packages/request`
        </div>
        <div
          class="rounded-[24px] border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-500"
        >
          `packages/icons`
        </div>
        <div
          class="rounded-[24px] border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-500"
        >
          `packages/schema`
        </div>
      </div>
    </UiCard>
  </div>
</template>
