import type { App, Plugin } from 'vue'
import './global-components'
import EmptyPanel from './components/business/EmptyPanel.vue'
import MetricPanel from './components/business/MetricPanel.vue'
import UiBadge from './components/base/UiBadge.vue'
import UiButton from './components/base/UiButton.vue'
import UiCard from './components/base/UiCard.vue'
import UiModal from './components/base/UiModal.vue'
import UiTable from './components/base/UiTable.vue'
import UiForm from './components/form/UiForm.vue'
import UiInput from './components/form/UiInput.vue'

export { EmptyPanel, MetricPanel, UiBadge, UiButton, UiCard, UiForm, UiInput, UiModal, UiTable }
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

const components = [
  UiButton,
  UiCard,
  UiBadge,
  UiModal,
  UiTable,
  UiInput,
  UiForm,
  MetricPanel,
  EmptyPanel,
]

export const SunnyUIPlugin: Plugin = {
  install(app: App) {
    components.forEach((component) => {
      app.component(component.name ?? 'AnonymousComponent', component)
    })
  },
}

export default SunnyUIPlugin
