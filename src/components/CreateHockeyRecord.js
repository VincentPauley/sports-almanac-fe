import { useState } from 'react'
import TextField from '@mui/material/TextField'

import TextInput from './shared/TextInput'

const CreateHockeyRecord = () => {
  const [homeTeam, setHomeTeam] = useState('')

  const handleChange = e => {
    setHomeTeam(e.target.value)
  }

  const TeamNameValidation = teamName => {
    return /^[a-z]{3,40}$/.test(teamName)
  }

  const awayTeamHandler = result => {
    console.log('-away team handler-')
    console.log(result)
  }

  return (
    <div>
      <p>{homeTeam}</p>
      <TextInput
        label="Away Team"
        isValid={TeamNameValidation}
        onUpdate={awayTeamHandler}
      />
      <TextField label="Home Team" varient="standard" onChange={handleChange} />
    </div>
  )
}

export default CreateHockeyRecord
