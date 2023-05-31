import { useEffect, useState } from 'react'

import Chip from '@mui/material/Chip'

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
    <div>
      {gameRecords.length && <Chip label={gameRecords.length + ' Records'} />}
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
    </div>
  )
}

export default GameRecords
