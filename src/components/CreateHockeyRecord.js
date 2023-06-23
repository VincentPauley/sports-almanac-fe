import { useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import CheckSharp from '@mui/icons-material/CheckSharp'
import Error from '@mui/icons-material/Error'

import TextInput from './shared/TextInput'
import ValidityIndicator from './shared/ValidityIndicator'

const CreateHockeyRecord = () => {
  const [homeTeam, setHomeTeam] = useState('')
  const [awayTeamValid, setAwayTeamValid] = useState(false)

  const handleChange = e => {
    setHomeTeam(e.target.value)
  }

  const TeamNameValidation = teamName => {
    return /^[a-z]{3,40}$/i.test(teamName)
  }

  const awayTeamHandler = result => {
    console.log('-away team handler-')
    console.log(result)

    const { valid } = result

    setAwayTeamValid(valid)
  }

  return (
    <div>
      <Grid container sx={{ maxWidth: '20rem' }}>
        <Grid item xs={8}>
          <TextInput
            label="Away Team"
            isValid={TeamNameValidation}
            onUpdate={awayTeamHandler}
          />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around'
          }}
        >
          {/* {awayTeamValid ? <CheckSharp /> : <Error />} */}
          <ValidityIndicator valid={awayTeamValid} />
        </Grid>
      </Grid>
      <p>{homeTeam}</p>

      <TextField label="Home Team" varient="standard" onChange={handleChange} />
    </div>
  )
}

export default CreateHockeyRecord
