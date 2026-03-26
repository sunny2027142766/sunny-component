import { uiButtonDoc } from '../components/feedback/button/UiButton.docs'
import { uiBadgeDoc } from '../components/feedback/badge/UiBadge.docs'
import { uiModalDoc } from '../components/feedback/modal/UiModal.docs'
import { uiCardDoc } from '../components/layout/card/UiCard.docs'
import { uiInputDoc } from '../components/data-entry/input/UiInput.docs'
import { uiFormDoc } from '../components/data-entry/form/UiForm.docs'
import { uiTableDoc } from '../components/data-display/table/UiTable.docs'
import { metricPanelDoc } from '../components/patterns/metric-panel/MetricPanel.docs'
import { emptyPanelDoc } from '../components/patterns/empty-panel/EmptyPanel.docs'

export type {
  ComponentCatalogCategory,
  ComponentCatalogEntry,
  ComponentCatalogStatus,
} from '../docs/types'

const registryDocs = [
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

export const componentCatalog = registryDocs.map(
  ({ name, title, slug, category, summary, status, docsPath, importName, importPath }) => ({
    name,
    title,
    slug,
    category,
    summary,
    status,
    docsPath,
    importName,
    importPath,
  }),
)
