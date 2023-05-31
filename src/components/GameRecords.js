import { useEffect, useState } from 'react'
import { GetGames } from '../api/GameAPI'

import GameRecord from './GameRecord'

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
    <ul>
      {gameRecords.map(record => {
        return (
          <li key={record.id}>
            {/* TODO: handle record being deleted from the list */}
            <GameRecord record={record} />
          </li>
        )
      })}
    </ul>
  )
}

export default GameRecords
