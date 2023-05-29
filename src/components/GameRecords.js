import { useEffect, useState } from 'react'
import { GetGames } from '../api/GameAPI'

const GameRecords = () => {
  const [gameRecords, setGameRecords] = useState([])

  const getGameRecords = async () => {
    const gameRecords = await GetGames()

    setGameRecords(gameRecords)
  }

  useEffect(() => {
    getGameRecords()
  }, [])

  return (
    <div>
      <ul>
        {gameRecords.map(record => {
          console.log(record)
          return (
            <li key={record.id}>
              <p>{record.id}</p>
              <p>
                Game {record.game} ({record.month}/{record.day}/{record.year}),{' '}
                {record.awayTeam} @ {record.homeTeam}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default GameRecords
