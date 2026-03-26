import { uiButtonDoc } from '../components/feedback/button/UiButton.docs.ts'
import { uiBadgeDoc } from '../components/feedback/badge/UiBadge.docs.ts'
import { uiModalDoc } from '../components/feedback/modal/UiModal.docs.ts'
import { uiCardDoc } from '../components/layout/card/UiCard.docs.ts'
import { uiInputDoc } from '../components/data-entry/input/UiInput.docs.ts'
import { uiFormDoc } from '../components/data-entry/form/UiForm.docs.ts'
import { uiTableDoc } from '../components/data-display/table/UiTable.docs.ts'
import { metricPanelDoc } from '../components/patterns/metric-panel/MetricPanel.docs.ts'
import { emptyPanelDoc } from '../components/patterns/empty-panel/EmptyPanel.docs.ts'

export const componentDocs = [
  uiButtonDoc,
  uiBadgeDoc,
  uiModalDoc,
  uiCardDoc,
  uiInputDoc,
  uiFormDoc,
  uiTableDoc,
  metricPanelDoc,
  emptyPanelDoc,
]

export const componentCategoryLabels = {
  layout: '布局容器',
  'data-entry': '数据录入',
  'data-display': '数据展示',
  feedback: '反馈交互',
  patterns: '业务组合',
} as const

export {
  emptyPanelDoc,
  metricPanelDoc,
  uiBadgeDoc,
  uiButtonDoc,
  uiCardDoc,
  uiFormDoc,
  uiInputDoc,
  uiModalDoc,
  uiTableDoc,
}
