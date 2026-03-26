<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import {
  MetricPanel,
  UiBadge,
  UiButton,
  UiCard,
  UiForm,
  UiInput,
  UiModal,
  UiTable,
  formatCompactNumber,
  formatPercent,
  type TableColumn,
  type TableRow,
} from '@grid-edit/ui'

const open = ref(false)
const search = ref('')
const saving = ref(false)

const leads = ref<TableRow[]>([
  { id: 1, customer: '华南门店升级', owner: 'Luna', amount: '￥128,000', status: '进行中' },
  { id: 2, customer: '物流看板重构', owner: 'Milo', amount: '￥86,500', status: '已报价' },
  { id: 3, customer: '合同流程自动化', owner: 'Aster', amount: '￥54,000', status: '待跟进' },
])

const draft = reactive({
  customer: '',
  owner: '',
  amount: '',
})

const columns: TableColumn[] = [
  { key: 'customer', title: '项目' },
  { key: 'owner', title: '负责人', width: '140px' },
  { key: 'amount', title: '预算', align: 'right', width: '140px' },
  { key: 'status', title: '阶段', align: 'center', width: '120px' },
]

const filteredRows = computed(() =>
  leads.value.filter((row) => String(row.customer).toLowerCase().includes(search.value.toLowerCase())),
)

const metrics = [
  {
    title: '本周线索量',
    value: formatCompactNumber(18450),
    trend: '+12%',
    hint: '通过统一组件与表单能力，新页面交付周期更稳定。',
    tone: 'success' as const,
  },
  {
    title: '自动化处理率',
    value: formatPercent(0.81),
    trend: '+7.4%',
    hint: '表格与表单在业务应用中直接复用，无需二次包装。',
    tone: 'info' as const,
  },
  {
    title: '交付稳定性',
    value: '99.2%',
    trend: '稳定',
    hint: 'Turbo 缓存与 workspace 联调把重复构建压到最低。',
    tone: 'warning' as const,
  },
]

async function submitLead() {
  saving.value = true

  await new Promise((resolve) => window.setTimeout(resolve, 480))

  leads.value.unshift({
    id: Date.now(),
    customer: draft.customer,
    owner: draft.owner,
    amount: draft.amount || '待确认',
    status: '新建',
  })

  draft.customer = ''
  draft.owner = ''
  draft.amount = ''
  saving.value = false
  open.value = false
}
</script>

<template>
  <div class="grid gap-6">
    <section class="grid gap-4 xl:grid-cols-3">
      <MetricPanel
        v-for="metric in metrics"
        :key="metric.title"
        :title="metric.title"
        :value="metric.value"
        :trend="metric.trend"
        :hint="metric.hint"
        :tone="metric.tone"
      />
    </section>

    <section class="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <UiCard title="销售漏斗总览" description="Dashboard 页面直接展示 UI 库里的 Button、Input、Table、Form、Modal、Card。">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div class="w-full max-w-md">
            <UiInput v-model="search" label="搜索项目" placeholder="输入项目名过滤表格" hint="表格数据会实时联动。" />
          </div>
          <div class="flex flex-wrap gap-3">
            <UiButton variant="secondary" @click="search = ''">重置过滤</UiButton>
            <UiButton @click="open = true">新建线索</UiButton>
          </div>
        </div>
        <UiTable :columns="columns" :rows="filteredRows" />
      </UiCard>

      <UiCard tone="soft" title="交付视角" description="把组件沉淀成 package 后，业务侧只关心组合，不再关心底层样式重复劳动。">
        <div class="grid gap-4 text-sm text-white/70">
          <div class="rounded-3xl bg-white/10 p-5">
            <p class="mb-2 text-xs uppercase tracking-[0.24em] text-white/45">Workspace</p>
            <p class="leading-7">
              `apps/web` 与 `apps/docs` 都消费同一份 `packages/ui` 源码，调一个组件，两个入口同时看到结果。
            </p>
          </div>
          <div class="flex flex-wrap gap-2">
            <UiBadge tone="info">Turbo</UiBadge>
            <UiBadge tone="success">Tailwind</UiBadge>
            <UiBadge tone="warning">VitePress</UiBadge>
          </div>
          <div class="rounded-3xl bg-white/10 p-5">
            <p class="mb-2 text-xs uppercase tracking-[0.24em] text-white/45">组件策略</p>
            <p class="leading-7">
              基础组件统一抽象为 `Button / Input / Modal / Card / Table / Form`，业务组件继续建立在这层之上。
            </p>
          </div>
        </div>
      </UiCard>
    </section>

    <section class="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <UiCard title="快速录入表单" description="UiForm + UiInput 作为应用内最常见组合，直接复用。">
        <UiForm
          title="新增客户线索"
          description="这是业务页内嵌表单，适合侧栏、卡片或页内轻量录入。"
          submit-text="保存线索"
          :loading="saving"
          :disabled="!draft.customer || !draft.owner"
          @submit="submitLead"
        >
          <UiInput v-model="draft.customer" label="项目名称" placeholder="例如：区域库存驾驶舱" required />
          <UiInput v-model="draft.owner" label="负责人" placeholder="例如：Mina" required />
          <UiInput v-model="draft.amount" label="预算范围" placeholder="例如：￥50,000" hint="这里故意保持简单，适合继续抽象成更高级表单字段。" />
        </UiForm>
      </UiCard>

      <UiCard title="工程结构" description="现在项目已经具备真实前端仓库最核心的三层组织。">
        <div class="grid gap-4 md:grid-cols-3">
          <div class="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
            <p class="mb-2 text-xs uppercase tracking-[0.24em] text-slate-400">packages</p>
            <h3 class="text-lg font-semibold text-slate-950">UI Library</h3>
            <p class="mt-2 text-sm leading-6 text-slate-500">统一导出、支持按需子路径、保留完整 TypeScript 类型。</p>
          </div>
          <div class="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
            <p class="mb-2 text-xs uppercase tracking-[0.24em] text-slate-400">apps/web</p>
            <h3 class="text-lg font-semibold text-slate-950">Dashboard</h3>
            <p class="mt-2 text-sm leading-6 text-slate-500">一个真实业务入口，直接消费公共库和共享样式约束。</p>
          </div>
          <div class="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
            <p class="mb-2 text-xs uppercase tracking-[0.24em] text-slate-400">apps/docs</p>
            <h3 class="text-lg font-semibold text-slate-950">VitePress</h3>
            <p class="mt-2 text-sm leading-6 text-slate-500">组件说明、Props 表与在线 Demo 同步维护。</p>
          </div>
        </div>
      </UiCard>
    </section>

    <UiModal
      v-model="open"
      title="创建新线索"
      description="这里复用和页内一致的表单组件，但放进 Modal 做流程入口。"
      width="md"
    >
      <UiForm
        title="销售录入"
        description="这个弹层用于演示 Modal + Form + Input 的组合方式。"
        submit-text="立即创建"
        cancel-text="关闭"
        show-cancel
        :loading="saving"
        :disabled="!draft.customer || !draft.owner"
        @submit="submitLead"
        @cancel="open = false"
      >
        <UiInput v-model="draft.customer" label="项目名称" placeholder="输入线索名称" required />
        <UiInput v-model="draft.owner" label="负责人" placeholder="输入负责人" required />
        <UiInput v-model="draft.amount" label="预算范围" placeholder="输入预算范围" />
      </UiForm>
    </UiModal>
  </div>
</template>
