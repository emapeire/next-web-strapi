export interface APIResults {
  data: Datum[]
  meta: Meta
}

export interface Datum {
  id: number
  attributes: DatumAttributes
}

export interface DatumAttributes {
  title: string
  launch: null
  description: Description[]
  slug: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  cover: Cover
}

export interface Cover {
  data: Data
}

export interface Data {
  id: number
  attributes: DataAttributes
}

export interface DataAttributes {
  url: string
}

export interface Description {
  type: string
  children: Child[]
}

export interface Child {
  type: string
  text: string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  code?: boolean
  href?: string
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
