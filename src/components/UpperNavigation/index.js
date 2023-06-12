import { Link as RouterLink } from 'react-router-dom'
import Button from '@mui/material/Button'

const UpperNavigation = () => {
  return (
    <div>
      <Button component={RouterLink} to="/">
        Home
      </Button>
      <Button component={RouterLink} to="/records">
        Records
      </Button>
    </div>
  )
}

export default UpperNavigation
