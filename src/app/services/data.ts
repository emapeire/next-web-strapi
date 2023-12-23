import { API_URL, STRAPI_URL } from '../config'
import { APIResults, Datum, Pagination } from '../types'
import { formatDescription } from '../utils/formatDescription'

export interface PaginationParams
  extends Pick<Pagination, 'page' | 'pageSize'> {}

export async function getData({ page, pageSize }: PaginationParams) {
  const res = await fetch(
    `${API_URL}/video-games?populate[platform][fields][0]=name&populate[cover]
    [fields][0]=url&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  )
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  const result: APIResults = await res.json()
  const { pagination } = result.meta

  const data = result.data.map(({ attributes, id }: Datum) => {
    const { title } = attributes
    const descriptionHTML = attributes.description
      .map(({ children }) => `<p>${formatDescription(children)}</p>`)
      .join('')
    const { url: cover } = attributes.cover.data.attributes
    return {
      id,
      title,
      description: descriptionHTML,
      cover: `${STRAPI_URL}${cover}`
    }
  })

  return {
    data,
    pagination
  }
}
