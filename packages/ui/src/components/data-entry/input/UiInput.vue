<script setup lang="ts">
import { computed } from 'vue'
import type { InputValue } from '../../../types/components'
import { classNames } from '../../../utils/classNames'

defineOptions({
  name: 'UiInput',
})

const props = withDefaults(
  defineProps<{
    modelValue?: InputValue
    label?: string
    placeholder?: string
    hint?: string
    error?: string
    type?: string
    disabled?: boolean
    required?: boolean
    id?: string
  }>(),
  {
    modelValue: '',
    label: '',
    placeholder: '',
    hint: '',
    error: '',
    type: 'text',
    disabled: false,
    required: false,
    id: undefined,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: InputValue]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}>()

const inputClass = computed(() =>
  classNames(
    'w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500',
    props.error
      ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/10 dark:border-rose-500/40 dark:focus:border-rose-400 dark:focus:ring-rose-500/20'
      : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500/10 dark:border-slate-700 dark:focus:border-teal-400 dark:focus:ring-teal-500/20',
    props.disabled && 'cursor-not-allowed bg-slate-100 text-slate-400 dark:bg-slate-900 dark:text-slate-500',
  ),
)

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <label class="grid gap-2 text-sm text-slate-600 dark:text-slate-400">
    <span v-if="label" class="font-medium text-slate-700 dark:text-slate-200">
      {{ label }}
      <span v-if="required" class="text-rose-500">*</span>
    </span>
    <input
      :id="id"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :class="inputClass"
      @input="onInput"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    />
    <span v-if="error" class="text-xs text-rose-500 dark:text-rose-400">{{ error }}</span>
    <span v-else-if="hint" class="text-xs text-slate-400 dark:text-slate-500">{{ hint }}</span>
  </label>
</template>
