<script setup lang="ts">
import { UiButton } from '../../feedback/button'

defineOptions({
  name: 'UiForm',
})

withDefaults(
  defineProps<{
    title?: string
    description?: string
    submitText?: string
    cancelText?: string
    loading?: boolean
    showCancel?: boolean
    disabled?: boolean
  }>(),
  {
    title: '',
    description: '',
    submitText: '提交',
    cancelText: '取消',
    loading: false,
    showCancel: false,
    disabled: false,
  },
)

defineEmits<{
  submit: []
  cancel: []
}>()
</script>

<template>
  <form class="grid gap-5" @submit.prevent="$emit('submit')">
    <div v-if="title || description" class="grid gap-1.5">
      <h3 v-if="title" class="text-xl font-semibold tracking-tight text-slate-950">{{ title }}</h3>
      <p v-if="description" class="text-sm leading-6 text-slate-500">{{ description }}</p>
    </div>

    <div class="grid gap-4">
      <slot />
    </div>

    <div class="flex flex-wrap justify-end gap-3 pt-2">
      <UiButton v-if="showCancel" type="button" variant="secondary" @click="$emit('cancel')">
        {{ cancelText }}
      </UiButton>
      <slot name="actions">
        <UiButton type="submit" :loading="loading" :disabled="disabled || loading">
          {{ submitText }}
        </UiButton>
      </slot>
    </div>
  </form>
</template>
