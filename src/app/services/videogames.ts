import { API_URL, STRAPI_URL } from '../config'
import { Datum, ProcessedGame } from '../types.d'

export async function getGames(): Promise<ProcessedGame[]> {
  const res = await fetch(
    `${API_URL}/video-games?populate[platform][fields][0]=name&populate[cover][fields][0]=url`
  )
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  const { data } = await res.json()

  return data.map(({ attributes, id }: Datum) => {
    const { title } = attributes
    const { text: description } = attributes.description[0].children[0]
    const { url: cover } = attributes.cover.data.attributes
    return {
      id,
      title,
      description,
      cover: `${STRAPI_URL}${cover}`
    }
  })
}
