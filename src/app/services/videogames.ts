import { API_URL } from '../config'

export async function getGames() {
  const res = await fetch(
    `${API_URL}/video-games?populate[platform][fields][0]=name&populate[cover][fields][0]=url`
  )
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  const { data } = await res.json()
  return data
}
