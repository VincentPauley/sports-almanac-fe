import { useState } from 'react'

import ValidatedTextInput from './shared/ValidatedTextInput'

const CreateHockeyRecord = () => {
  const [homeTeam, setHomeTeam] = useState('')
  const [awayTeam, setAwayTeam] = useState('')

  const TeamNameValidation = teamName => {
    return /^[a-z]{3,40}$/i.test(teamName)
  }

  const homeTeamHandler = result => {
    const homeTeam = result

    setHomeTeam(homeTeam.value)

    console.log({ homeTeam })
  }

  const awayTeamHandler = result => {
    const awayTeam = result

    setAwayTeam(awayTeam.value)

    console.log({ awayTeam })
  }

  return (
    <div>
      <p>{awayTeam ? awayTeam : 'No Entry'}</p>
      <ValidatedTextInput
        label="Away Team"
        validator={TeamNameValidation}
        handler={awayTeamHandler}
      />

      <p>{homeTeam ? homeTeam : 'No Entry'}</p>
      <ValidatedTextInput
        label="Home Team"
        validator={TeamNameValidation}
        handler={homeTeamHandler}
      />

      {/* TODO: ranged number inputs */}
    </div>
  )
}

export default CreateHockeyRecord
