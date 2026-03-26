<script setup lang="ts">
import { computed } from 'vue'
import type {
  ComponentDoc,
  ComponentDocEvent,
  ComponentDocProp,
  ComponentDocSectionTable,
  ComponentDocSlot,
} from '@sunny/ui'
import ApiTable from './ApiTable.vue'
import CodePanel from './CodePanel.vue'

const props = defineProps<{
  doc: ComponentDoc
}>()

const statusTone = computed(() => {
  if (props.doc.status === 'beta') {
    return 'warning'
  }

  if (props.doc.status === 'internal') {
    return 'neutral'
  }

  return 'success'
})

function propRows(items: ComponentDocProp[]) {
  return items.map((item) => ({
    name: item.name,
    type: item.type,
    default: item.default,
    description: item.description,
  }))
}

function eventRows(items: ComponentDocEvent[]) {
  return items.map((item) => ({
    name: item.name,
    payload: item.payload,
    description: item.description,
  }))
}

function slotRows(items: ComponentDocSlot[]) {
  return items.map((item) => ({
    name: item.name,
    description: item.description,
  }))
}

function sectionRows(section: ComponentDocSectionTable) {
  return section.rows
}
</script>

<template>
  <div class="grid gap-8">
    <UiCard :title="doc.title" :description="doc.description">
      <template #actions>
        <UiBadge :tone="statusTone">{{ doc.status }}</UiBadge>
      </template>
      <p class="text-sm leading-7 text-slate-500 dark:text-slate-400">{{ doc.summary }}</p>
    </UiCard>

    <section class="grid gap-4">
      <div class="space-y-1">
        <h2 class="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">在线 Demo</h2>
        <p class="text-sm leading-6 text-slate-500 dark:text-slate-400">
          演示真实交互效果，并与代码示例保持同步。
        </p>
      </div>
      <slot />
    </section>

    <section class="grid gap-4">
      <div class="space-y-1">
        <h2 class="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
          导入方式
        </h2>
        <p class="text-sm leading-6 text-slate-500 dark:text-slate-400">
          推荐优先使用文档中给出的导入路径，保持团队写法统一。
        </p>
      </div>
      <div class="grid gap-4">
        <CodePanel
          v-for="item in doc.imports"
          :key="item.label"
          :title="item.label"
          :code="item.code"
          language="ts"
        />
      </div>
    </section>

    <section v-if="doc.props?.length" class="grid gap-4">
      <div class="space-y-1">
        <h2 class="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">Props</h2>
        <p class="text-sm leading-6 text-slate-500 dark:text-slate-400">
          公共 API 尽量保持语义化，避免暴露与业务强耦合的样式细节。
        </p>
      </div>
      <ApiTable
        :columns="[
          { key: 'name', label: '属性' },
          { key: 'type', label: '类型' },
          { key: 'default', label: '默认值' },
          { key: 'description', label: '说明' },
        ]"
        :rows="propRows(doc.props)"
      />
    </section>

    <section v-if="doc.events?.length" class="grid gap-4">
      <div class="space-y-1">
        <h2 class="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
          Events
        </h2>
        <p class="text-sm leading-6 text-slate-500 dark:text-slate-400">
          事件命名遵循 Vue 社区习惯，优先表达用户行为与状态变化。
        </p>
      </div>
      <ApiTable
        :columns="[
          { key: 'name', label: '事件' },
          { key: 'payload', label: '载荷' },
          { key: 'description', label: '说明' },
        ]"
        :rows="eventRows(doc.events)"
      />
    </section>

    <section v-if="doc.slots?.length" class="grid gap-4">
      <div class="space-y-1">
        <h2 class="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">Slots</h2>
        <p class="text-sm leading-6 text-slate-500 dark:text-slate-400">
          在保证结构统一的前提下，通过插槽为业务场景保留扩展空间。
        </p>
      </div>
      <ApiTable
        :columns="[
          { key: 'name', label: '名称' },
          { key: 'description', label: '说明' },
        ]"
        :rows="slotRows(doc.slots)"
      />
    </section>

    <section v-for="section in doc.sections ?? []" :key="section.title" class="grid gap-4">
      <div class="space-y-1">
        <h2 class="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
          {{ section.title }}
        </h2>
      </div>
      <ApiTable :columns="section.columns" :rows="sectionRows(section)" />
    </section>

    <section v-if="doc.examples?.length" class="grid gap-4">
      <div class="space-y-1">
        <h2 class="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
          使用示例
        </h2>
        <p class="text-sm leading-6 text-slate-500 dark:text-slate-400">
          组件页中的示例代码与演示场景保持一致，便于业务应用直接参考。
        </p>
      </div>
      <div class="grid gap-4">
        <CodePanel
          v-for="example in doc.examples"
          :key="example.title"
          :title="example.title"
          :description="example.description"
          :code="example.code"
          :language="example.language"
        />
      </div>
    </section>
  </div>
</template>
