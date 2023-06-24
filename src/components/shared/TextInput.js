import TextField from '@mui/material/TextField'

const TextInput = props => {
  const { label, onUpdate } = props

  const handleChange = e => {
    const { value } = e.target
    onUpdate(value)
  }

  return <TextField label={label} varient="standard" onChange={handleChange} />
}

TextInput.defaultProps = {
  label: 'NO LABEL',
  onUpdate: () => null
}

export default TextInput
