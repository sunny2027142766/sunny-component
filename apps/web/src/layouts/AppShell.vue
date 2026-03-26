<script setup lang="ts">
const navItems = [
  { label: 'Dashboard', to: '/' },
  { label: 'Workspace', to: '/components' },
  { label: 'Delivery', to: '/workflow' },
]
</script>

<template>
  <div class="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
    <header
      class="rounded-[36px] bg-slate-950 px-6 py-8 text-white shadow-2xl shadow-slate-950/15 sm:px-8"
    >
      <div class="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div class="space-y-4">
          <p class="text-xs uppercase tracking-[0.35em] text-white/45">Grid Edit Workspace</p>
          <div class="space-y-3">
            <h1 class="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              用 Monorepo 同时驱动组件库、业务应用和文档站
            </h1>
            <p class="max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              `packages/ui` 聚焦组件沉淀，`apps/web` 用真实业务页面消费，`apps/docs` 用 VitePress
              展示文档和在线 Demo。
            </p>
          </div>
        </div>

        <nav class="flex flex-wrap gap-3 lg:justify-end">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/65 transition hover:bg-white/10 hover:text-white"
            active-class="!bg-white !text-slate-950"
          >
            {{ item.label }}
          </RouterLink>
        </nav>
      </div>
    </header>

    <main class="flex-1 py-6">
      <RouterView />
    </main>
  </div>
</template>
