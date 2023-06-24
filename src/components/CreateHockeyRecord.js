import { useState } from 'react'
import TextField from '@mui/material/TextField'

import ValidatedTextInput from './shared/ValidatedTextInput'

const CreateHockeyRecord = () => {
  const [homeTeam, setHomeTeam] = useState('')

  const handleChange = e => {
    setHomeTeam(e.target.value)
  }

  const TeamNameValidation = teamName => {
    return /^[a-z]{3,40}$/i.test(teamName)
  }

  const awayTeamHandler = result => {
    const awayTeam = result

    console.log({ awayTeam })
  }

  return (
    <div>
      <ValidatedTextInput
        label="Away Team"
        validator={TeamNameValidation}
        handler={awayTeamHandler}
      />

      <p>{homeTeam}</p>

      <TextField label="Home Team" varient="standard" onChange={handleChange} />
    </div>
  )
}

export default CreateHockeyRecord
