import type EmptyPanel from './components/business/EmptyPanel.vue'
import type MetricPanel from './components/business/MetricPanel.vue'
import type UiBadge from './components/base/UiBadge.vue'
import type UiButton from './components/base/UiButton.vue'
import type UiCard from './components/base/UiCard.vue'
import type UiModal from './components/base/UiModal.vue'
import type UiTable from './components/base/UiTable.vue'
import type UiForm from './components/form/UiForm.vue'
import type UiInput from './components/form/UiInput.vue'

declare module 'vue' {
  export interface GlobalComponents {
    EmptyPanel: typeof EmptyPanel
    MetricPanel: typeof MetricPanel
    UiBadge: typeof UiBadge
    UiButton: typeof UiButton
    UiCard: typeof UiCard
    UiForm: typeof UiForm
    UiInput: typeof UiInput
    UiModal: typeof UiModal
    UiTable: typeof UiTable
  }
}

export {}
