<script setup lang="ts">
import { reactive, ref } from 'vue'

const saving = ref(false)
const form = reactive({
  project: '',
  owner: '',
})

async function submit() {
  saving.value = true
  await new Promise((resolve) => window.setTimeout(resolve, 450))
  saving.value = false
  form.project = ''
  form.owner = ''
}
</script>

<template>
  <DemoBlock title="在线 Demo" description="Form 管理动作区，字段本身继续由 Input 等组件承载。">
    <div class="max-w-xl">
      <UiForm
        title="创建项目"
        description="适合页内轻量录入，也适合放进 Modal。"
        submit-text="提交表单"
        :loading="saving"
        :disabled="!form.project || !form.owner"
        @submit="submit"
      >
        <UiInput v-model="form.project" label="项目名称" required />
        <UiInput v-model="form.owner" label="负责人" required />
      </UiForm>
    </div>
  </DemoBlock>
</template>
