<template>
  <DemoBlock title="在线 Demo" description="Card 负责信息分组和内容承载。">
    <div class="grid gap-4 md:grid-cols-2">
      <UiCard title="默认卡片" description="适合后台内容布局。">
        <p class="text-sm leading-7 text-slate-500">标题、描述、正文和 footer 具备统一结构。</p>
      </UiCard>
      <UiCard tone="soft" title="深色卡片" description="可以用于强调性区域。">
        <p class="text-sm leading-7 text-white/70">
          同一组件支持不同语气，而不是为每个页面重写卡片壳子。
        </p>
      </UiCard>
    </div>
  </DemoBlock>
</template>
