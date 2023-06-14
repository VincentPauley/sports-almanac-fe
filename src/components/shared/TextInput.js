import TextField from '@mui/material/TextField'

const TextInput = props => {
  const { label, isValid, onUpdate } = props

  const handleChange = e => {
    const { value } = e.target
    onUpdate({ value, valid: isValid(value) })
  }

  return (
    <div>
      <TextField label={label} varient="standard" onChange={handleChange} />
    </div>
  )
}

TextInput.defaultProps = {
  label: 'NO LABEL',
  isValid: () => true,
  onUpdate: () => null
}

export default TextInput
