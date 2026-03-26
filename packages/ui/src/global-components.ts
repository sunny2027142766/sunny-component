import type EmptyPanel from './components/patterns/empty-panel/EmptyPanel.vue'
import type MetricPanel from './components/patterns/metric-panel/MetricPanel.vue'
import type UiBadge from './components/feedback/badge/UiBadge.vue'
import type UiButton from './components/feedback/button/UiButton.vue'
import type UiCard from './components/layout/card/UiCard.vue'
import type UiModal from './components/feedback/modal/UiModal.vue'
import type UiTable from './components/data-display/table/UiTable.vue'
import type UiForm from './components/data-entry/form/UiForm.vue'
import type UiInput from './components/data-entry/input/UiInput.vue'

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
