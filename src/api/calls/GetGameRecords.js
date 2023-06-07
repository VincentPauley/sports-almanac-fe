import API from '../index'

const GetGameRecords = async () => {
  const games = await API.get('/games')

  return games

  // export const GetGames = async () => {
  //   try {
  //     const games = await API.get('/games')
  //     return games
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }
}

export default GetGameRecords
