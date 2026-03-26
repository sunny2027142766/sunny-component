export type ComponentCatalogCategory =
  | 'layout'
  | 'data-entry'
  | 'data-display'
  | 'feedback'
  | 'patterns'

export type ComponentCatalogStatus = 'stable' | 'beta' | 'internal'

export interface ComponentDocImport {
  label: string
  code: string
}

export interface ComponentDocProp {
  name: string
  type: string
  default: string
  description: string
}

export interface ComponentDocEvent {
  name: string
  payload: string
  description: string
}

export interface ComponentDocSlot {
  name: string
  description: string
}

export interface ComponentDocExample {
  title: string
  description: string
  language: 'vue' | 'ts'
  code: string
}

export interface ComponentDocSectionColumn {
  key: string
  label: string
}

export interface ComponentDocSectionTable {
  title: string
  columns: ComponentDocSectionColumn[]
  rows: Record<string, string>[]
}

export interface ComponentCatalogEntry {
  name: string
  title: string
  slug: string
  category: ComponentCatalogCategory
  summary: string
  status: ComponentCatalogStatus
  docsPath: string
  importName: string
  importPath: string
}

export interface ComponentDoc extends ComponentCatalogEntry {
  description: string
  imports: ComponentDocImport[]
  props?: ComponentDocProp[]
  events?: ComponentDocEvent[]
  slots?: ComponentDocSlot[]
  examples?: ComponentDocExample[]
  sections?: ComponentDocSectionTable[]
}
