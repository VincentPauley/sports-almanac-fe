import { useState } from 'react'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import { DeleteGameRecord } from '../api/calls'
import ObjectReadout from './ObjectReadout'

const GameRecord = props => {
  const [deleteInProgress, setDeleteInProgress] = useState(false)
  const [value, setValue] = useState(0)

  const { record } = props

  const triggerDelete = () => {
    console.log('trigger delete for record: ', record.id)

    setDeleteInProgress(true)

    setTimeout(() => {
      DeleteGameRecord(record.id)
    }, 3000)
  }

  const TabPanel = props => {
    const { children, value, index, ...other } = props

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }

  const handleTabChange = (e, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <CardContent>
        <Tabs value={value} onChange={handleTabChange}>
          <Tab label="Pretty" />
          <Tab label="Raw" />
        </Tabs>
        <TabPanel value={value} index={0}>
          Game {record.game}: {record.awayTeam} @ {record.homeTeam}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ObjectReadout obj={record} />
        </TabPanel>

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
