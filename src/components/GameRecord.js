import { useState } from 'react'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import { DeleteGameRecord } from '../api/calls'
import ObjectReadout from './ObjectReadout'

const GameRecord = props => {
  const [deleteInProgress, setDeleteInProgress] = useState(false)

  const { record } = props

  const triggerDelete = () => {
    console.log('trigger delete for record: ', record.id)

    setDeleteInProgress(true)

    setTimeout(() => {
      DeleteGameRecord(record.id)
    }, 3000)
  }

  console.log(Object.keys(record))

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          <p>ID: {record.id}</p>
        </Typography>
        <ObjectReadout obj={record} />

        <Button
          varient="contained"
          disabled={deleteInProgress}
          onClick={triggerDelete}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  )
}

export default GameRecord
