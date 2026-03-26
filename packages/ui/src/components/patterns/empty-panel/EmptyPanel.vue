<script setup lang="ts">
import { UiButton } from '../../feedback/button'
import { UiCard } from '../../layout/card'

defineOptions({
  name: 'EmptyPanel',
})

withDefaults(
  defineProps<{
    title: string
    description: string
    actionLabel?: string
  }>(),
  {
    actionLabel: '',
  },
)

defineEmits<{
  action: []
}>()
</script>

<template>
  <UiCard class="text-center">
    <div
      class="mx-auto grid size-16 place-items-center rounded-3xl bg-teal-50 text-3xl font-light text-teal-700 dark:bg-teal-500/12 dark:text-teal-300"
    >
      +
    </div>
    <div class="grid gap-2">
      <h3 class="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
        {{ title }}
      </h3>
      <p class="text-sm leading-7 text-slate-500 dark:text-slate-400">{{ description }}</p>
    </div>
    <UiButton v-if="actionLabel" variant="secondary" @click="$emit('action')">
      {{ actionLabel }}
    </UiButton>
  </UiCard>
</template>
