import { API_URL, STRAPI_URL } from '../config'
import { APIResults, ProcessedData } from '../types'
import { formatDescription } from '../utils/formatDescription'

export async function getData() {
  const res = await fetch(
    `${API_URL}/video-games?populate[platform][fields][0]=name&populate[cover][fields][0]=url`
  )
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  const result: APIResults = await res.json()
  const { pagination } = result.meta

  const data: ProcessedData[] = result.data.map(({ attributes, id }) => {
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
