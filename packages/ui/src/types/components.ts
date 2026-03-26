export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type ModalWidth = 'sm' | 'md' | 'lg'
export type TableAlign = 'left' | 'center' | 'right'
export type InputValue = string | number

export interface TableRow {
  [key: string]: unknown
}

export interface TableColumn<T extends TableRow = TableRow> {
  key: keyof T | string
  title: string
  width?: string
  align?: TableAlign
  formatter?: (value: unknown, row: T, index: number) => string | number
}
