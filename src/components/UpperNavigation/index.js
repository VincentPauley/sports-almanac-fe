import { Link as RouterLink, NavLink, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { amber } from '@mui/material/colors'

const ColoredRouteButton = props => {
  const { title, route } = props

  return (
    <Button
      sx={{
        backgroundColor: amber[500],
        '&:hover': {
          backgroundColor: amber[700]
        },
        color: 'black'
      }}
      varient="contained"
      component={RouterLink}
      to={route}
    >
      {title}
    </Button>
  )
}

const UpperNavigation = () => {
  const location = useLocation()

  const { pathname } = location
  return (
    <Box
      sx={{
        padding: '1rem 0'
      }}
    >
      {pathname === '/' ? (
        <ColoredRouteButton title="Home" route="/" />
      ) : (
        <Button component={RouterLink} to="/">
          Home
        </Button>
      )}
      {pathname === '/records' ? (
        <ColoredRouteButton title="Records" route="/records" />
      ) : (
        <Button component={RouterLink} to="/records">
          Records
        </Button>
      )}
    </Box>
  )
}

export default UpperNavigation
