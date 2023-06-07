import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// TODO: name "setCount" too generic?
import { setCount } from '../store'

import { GetGameRecords } from '../api/calls'

// components
import GameRecordsHeader from './GameRecordsHeader'
import GameRecord from './GameRecord'

const GameRecords = () => {
  const dispatch = useDispatch()
  const [gameRecords, setGameRecords] = useState([])

  const getGameRecords = async () => {
    const gameRecords = await GetGameRecords()
    dispatch(setCount(gameRecords.length))
    setGameRecords(gameRecords)
  }

  useEffect(() => {
    getGameRecords()
  }, [])

  return (
    <div>
      <GameRecordsHeader />
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        {gameRecords.map(record => {
          return (
            <li key={record.id} style={{ marginTop: '3px' }}>
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
