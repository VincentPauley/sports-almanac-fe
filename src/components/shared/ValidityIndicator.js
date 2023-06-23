import CheckSharp from '@mui/icons-material/CheckSharp'
import Error from '@mui/icons-material/Error'

const ValidityIndicator = props => {
  return props.valid ? <CheckSharp /> : <Error />
}

export default ValidityIndicator
