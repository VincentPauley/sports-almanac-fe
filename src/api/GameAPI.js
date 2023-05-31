import API from './index'

export const GetGames = async () => {
  try {
    const results = await API.get('/games')
    const { data } = results

    return data
  } catch (e) {
    console.error(e)
  }
}
