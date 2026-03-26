<template>
  <DemoBlock title="在线 Demo" description="MetricPanel 适合仪表盘中的 KPI 区块。">
    <div class="grid gap-4 md:grid-cols-3">
      <MetricPanel
        title="本周线索量"
        value="18,450"
        trend="+12%"
        hint="线索节奏稳定提升。"
        tone="success"
      />
      <MetricPanel
        title="自动化处理率"
        value="81%"
        trend="+7.4%"
        hint="重复操作持续减少。"
        tone="info"
      />
      <MetricPanel
        title="交付稳定性"
        value="99.2%"
        trend="稳定"
        hint="核心链路运行正常。"
        tone="warning"
      />
    </div>
  </DemoBlock>
</template>
