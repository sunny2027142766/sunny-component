<script setup lang="ts">
import UiButton from '../base/UiButton.vue'
import UiCard from '../base/UiCard.vue'

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
    <div class="mx-auto grid size-16 place-items-center rounded-3xl bg-teal-50 text-3xl font-light text-teal-700">
      +
    </div>
    <div class="grid gap-2">
      <h3 class="text-2xl font-semibold tracking-tight text-slate-950">{{ title }}</h3>
      <p class="text-sm leading-7 text-slate-500">{{ description }}</p>
    </div>
    <UiButton v-if="actionLabel" variant="secondary" @click="$emit('action')">
      {{ actionLabel }}
    </UiButton>
  </UiCard>
</template>
