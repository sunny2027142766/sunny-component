import {
  componentCategoryLabels,
  componentDocs,
  emptyPanelDoc,
  metricPanelDoc,
  uiBadgeDoc,
  uiButtonDoc,
  uiCardDoc,
  uiFormDoc,
  uiInputDoc,
  uiModalDoc,
  uiTableDoc,
} from '../registry/component-docs'

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
  componentCategoryLabels,
  componentDocs,
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
