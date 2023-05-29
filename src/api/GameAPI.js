import axios from 'axios'

export const GetGames = async () => {
  try {
    const results = await axios.get('http://127.0.0.1:3030/games')
    const { data } = results

    return data
  } catch (e) {
    console.error(e)
  }

  // axios
  //   .get('http://127.0.0.1:3030/')
  //   .then(r => {
  //     console.log(r)
  //   })
  //   .catch(e => {
  //     console.log(e)
  //   })

  // console.log('Called Get Games...')
}
