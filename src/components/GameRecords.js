import { useEffect, useState } from 'react'
import { GetGames } from '../api/GameAPI'

// import DeleteGameRecord from '../api/calls/DeleteGameRecord'
import { DeleteGameRecord } from '../api/calls'

import Button from '@mui/material/Button'

const GameRecords = () => {
  const [gameRecords, setGameRecords] = useState([])

  const getGameRecords = async () => {
    const gameRecords = await GetGames()

    setGameRecords(gameRecords)
  }

  const handleDelete = recordId => {
    // TODO: disable the specific record's interaction
    DeleteGameRecord(recordId)
  }

  useEffect(() => {
    getGameRecords()
  }, [])

  return (
    <div>
      <ul>
        {gameRecords.map(record => {
          return (
            // TODO: make a single component for each record
            <li key={record.id}>
              <Button
                varient="contained"
                onClick={() => handleDelete(record.id)}
              >
                Delete
              </Button>
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
