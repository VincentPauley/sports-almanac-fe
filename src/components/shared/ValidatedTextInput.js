import { useState } from 'react'
import Box from '@mui/material/Box'
/**
 * this is a wrapper around text input component that visually indicates
 * if a user's entry is valid.
 */
import TextInput from './TextInput'
import ValidityIndicator from './ValidityIndicator'

const ValidatedTextInput = props => {
  const { label, validator, handler } = props

  const [isValid, setIsValid] = useState(false)

  const receiveValue = value => {
    const validEntry = validator(value)
    setIsValid(validEntry)
    handler({ value: value, valid: validEntry })
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <TextInput label={label} onUpdate={receiveValue} />
      <Box
        sx={{
          minWidth: '3rem',
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <ValidityIndicator valid={isValid} />
      </Box>
    </Box>
  )
}

export default ValidatedTextInput
