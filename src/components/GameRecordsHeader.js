import { useSelector } from 'react-redux'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const GameRecordsHeader = () => {
  const recordCount = useSelector(state => state.records.count)

  return (
    <Grid container spacing={1}>
      <Grid item>
        <Typography variant="h5">Games Records</Typography>
      </Grid>
      <Grid item>{recordCount && <Chip label={recordCount} />}</Grid>
    </Grid>
  )
}

export default GameRecordsHeader
