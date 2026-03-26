import { componentCategoryLabels, componentDocs } from './component-docs'

export type {
  ComponentCatalogCategory,
  ComponentCatalogEntry,
  ComponentCatalogStatus,
} from '../docs/types'

export { componentCategoryLabels }

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
