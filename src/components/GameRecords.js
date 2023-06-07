import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCount } from '../store'

import Chip from '@mui/material/Chip'

import { GetGameRecords } from '../api/calls'

// components
import GameRecord from './GameRecord'

const GameRecords = () => {
  const dispatch = useDispatch()

  const [gameRecords, setGameRecords] = useState([])

  const count = useSelector(state => {
    return state.count
  })

  // dispatch(incrementCount())

  const getGameRecords = async () => {
    const gameRecords = await GetGameRecords()
    setGameRecords(gameRecords)
  }

  useEffect(() => {
    getGameRecords()
  }, [])

  const x = () => {
    dispatch(incrementCount())
  }

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={x}>Increase</button>
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
