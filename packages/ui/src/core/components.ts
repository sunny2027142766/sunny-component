import { EmptyPanel } from '../components/patterns/empty-panel'
import { MetricPanel } from '../components/patterns/metric-panel'
import { UiBadge } from '../components/feedback/badge'
import { UiButton } from '../components/feedback/button'
import { UiModal } from '../components/feedback/modal'
import { UiTable } from '../components/data-display/table'
import { UiForm } from '../components/data-entry/form'
import { UiInput } from '../components/data-entry/input'
import { UiCard } from '../components/layout/card'

export const sunnyComponents = [
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

export { EmptyPanel, MetricPanel, UiBadge, UiButton, UiCard, UiForm, UiInput, UiModal, UiTable }
