<script setup lang="ts">
const entries = [
  { name: 'Button', desc: '统一按钮层级与状态处理，适合所有应用入口。', route: 'button' },
  { name: 'Input', desc: '轻量字段录入，类型完整，支持错误和提示文案。', route: 'input' },
  { name: 'Modal', desc: '弹层交互标准化，避免每个项目重复写遮罩和关闭逻辑。', route: 'modal' },
  { name: 'Card', desc: '信息容器统一视觉边界，页面搭建效率更高。', route: 'card' },
  { name: 'Table', desc: '后台场景的高频展示组件，支持列配置。', route: 'table' },
  { name: 'Form', desc: '把动作和字段布局聚合起来，便于扩展复杂表单。', route: 'form' },
]
</script>

<template>
  <div class="grid gap-6">
    <UiCard
      title="组件资产地图"
      description="一个业务项目真正稳定下来，往往不是页面变多，而是组件资产越来越清晰。"
    >
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="entry in entries"
          :key="entry.name"
          class="rounded-[24px] border border-slate-200 bg-slate-50 p-5"
        >
          <div class="mb-4 flex items-center justify-between gap-3">
            <h3 class="text-xl font-semibold tracking-tight text-slate-950">{{ entry.name }}</h3>
            <UiBadge tone="info">core</UiBadge>
          </div>
          <p class="text-sm leading-7 text-slate-500">{{ entry.desc }}</p>
          <div class="mt-5">
            <a
              :href="`http://127.0.0.1:4174/components/${entry.route}`"
              target="_blank"
              rel="noreferrer"
            >
              <UiButton variant="secondary" size="sm">查看文档</UiButton>
            </a>
          </div>
        </article>
      </div>
    </UiCard>

    <UiCard
      title="为什么保留这一页"
      description="业务应用里也需要看到组件资产，而不只是去文档站看。"
    >
      <div class="grid gap-4 md:grid-cols-3">
        <div class="rounded-[24px] border border-slate-200 bg-white p-5">
          <p class="text-sm leading-7 text-slate-500">
            让业务开发快速知道已有组件边界，减少重复造轮子。
          </p>
        </div>
        <div class="rounded-[24px] border border-slate-200 bg-white p-5">
          <p class="text-sm leading-7 text-slate-500">
            把应用内真实使用场景和文档站示例互相校验，避免脱节。
          </p>
        </div>
        <div class="rounded-[24px] border border-slate-200 bg-white p-5">
          <p class="text-sm leading-7 text-slate-500">
            组件迭代时，业务页面可以立刻发现视觉或行为回归。
          </p>
        </div>
      </div>
    </UiCard>
  </div>
</template>
