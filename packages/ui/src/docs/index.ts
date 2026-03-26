import { uiButtonDoc } from '../components/feedback/button'
import { uiBadgeDoc } from '../components/feedback/badge'
import { uiModalDoc } from '../components/feedback/modal'
import { uiCardDoc } from '../components/layout/card'
import { uiInputDoc } from '../components/data-entry/input'
import { uiFormDoc } from '../components/data-entry/form'
import { uiTableDoc } from '../components/data-display/table'
import { metricPanelDoc } from '../components/patterns/metric-panel'
import { emptyPanelDoc } from '../components/patterns/empty-panel'

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

export const componentCatalog = componentDocs.map(
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
