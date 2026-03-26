<script setup lang="ts">
import { computed, onBeforeUnmount, watch } from 'vue'
import type { ModalWidth } from '../../../types/components'
import { UiButton } from '../button'
import { classNames } from '../../../utils/classNames'

defineOptions({
  name: 'UiModal',
})

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    title?: string
    description?: string
    width?: ModalWidth
    closeOnOverlay?: boolean
    confirmText?: string
    cancelText?: string
    showFooter?: boolean
  }>(),
  {
    title: '',
    description: '',
    width: 'md',
    closeOnOverlay: true,
    confirmText: '确认',
    cancelText: '取消',
    showFooter: false,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  confirm: []
  cancel: []
}>()

const panelClass = computed(() =>
  classNames(
    'w-full rounded-[32px] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-950/15 dark:border-slate-800 dark:bg-slate-950 dark:shadow-black/40',
    props.width === 'sm' && 'max-w-md',
    props.width === 'md' && 'max-w-2xl',
    props.width === 'lg' && 'max-w-4xl',
  ),
)

function close() {
  emit('update:modelValue', false)
  emit('cancel')
}

function confirm() {
  emit('confirm')
}

function syncBodyLock(open: boolean) {
  if (typeof document === 'undefined') {
    return
  }

  document.body.style.overflow = open ? 'hidden' : ''
}

watch(
  () => props.modelValue,
  (open) => {
    syncBodyLock(open)
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  syncBodyLock(false)
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4 py-8 backdrop-blur-sm"
        @click="closeOnOverlay ? close() : undefined"
      >
        <div :class="panelClass" @click.stop>
          <div class="mb-5 flex items-start justify-between gap-4">
            <div class="space-y-2">
              <h3
                v-if="title"
                class="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50"
              >
                {{ title }}
              </h3>
              <p v-if="description" class="text-sm leading-6 text-slate-500 dark:text-slate-400">
                {{ description }}
              </p>
            </div>
            <button
              type="button"
              class="inline-flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
              @click="close"
            >
              ×
            </button>
          </div>

          <div class="grid gap-4">
            <slot />
          </div>

          <div v-if="showFooter || $slots.footer" class="mt-6 flex flex-wrap justify-end gap-3">
            <slot name="footer">
              <UiButton variant="secondary" @click="close">{{ cancelText }}</UiButton>
              <UiButton @click="confirm">{{ confirmText }}</UiButton>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
