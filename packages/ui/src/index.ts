import type { App, Plugin } from 'vue'
import EmptyPanel from './components/business/EmptyPanel.vue'
import MetricPanel from './components/business/MetricPanel.vue'
import UiBadge from './components/base/UiBadge.vue'
import UiButton from './components/base/UiButton.vue'
import UiCard from './components/base/UiCard.vue'
import UiModal from './components/base/UiModal.vue'
import UiTable from './components/base/UiTable.vue'
import UiForm from './components/form/UiForm.vue'
import UiInput from './components/form/UiInput.vue'

export { default as UiButton } from './components/base/UiButton.vue'
export { default as UiCard } from './components/base/UiCard.vue'
export { default as UiBadge } from './components/base/UiBadge.vue'
export { default as UiModal } from './components/base/UiModal.vue'
export { default as UiTable } from './components/base/UiTable.vue'
export { default as UiInput } from './components/form/UiInput.vue'
export { default as UiForm } from './components/form/UiForm.vue'
export { default as MetricPanel } from './components/business/MetricPanel.vue'
export { default as EmptyPanel } from './components/business/EmptyPanel.vue'
export { useClipboard } from './hooks/useClipboard'
export { useToggle } from './hooks/useToggle'
export { classNames } from './utils/classNames'
export { formatCompactNumber, formatDate, formatPercent } from './utils/formatters'
export type {
  ButtonSize,
  ButtonVariant,
  InputValue,
  ModalWidth,
  TableAlign,
  TableColumn,
  TableRow,
} from './types/components'

const components = [UiButton, UiCard, UiBadge, UiModal, UiTable, UiInput, UiForm, MetricPanel, EmptyPanel]

export const GridEditUIPlugin: Plugin = {
  install(app: App) {
    components.forEach((component) => {
      app.component(component.name ?? 'AnonymousComponent', component)
    })
  },
}
