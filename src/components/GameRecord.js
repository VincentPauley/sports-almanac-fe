import { useState } from 'react'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import { DeleteGameRecord } from '../api/calls'

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

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          <p>ID: {record.id}</p>
        </Typography>

        <Button
          varient="contained"
          disabled={deleteInProgress}
          onClick={triggerDelete}
        >
          Delete
        </Button>

        <p>All details of a particular record.</p>
      </CardContent>
    </Card>
  )
}

export default GameRecord
