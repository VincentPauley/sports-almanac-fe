import API from './index'

export const GetGames = async () => {
  try {
    const games = await API.get('/games')
    return games
  } catch (e) {
    console.error(e)
  }
}
