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

const RouteList = [
  { path: '/', title: 'Home' },
  { path: '/records', title: 'Records' },
  { path: '/create-records', title: 'Create Records' }
]

const UpperNavigation = () => {
  const location = useLocation()

  const { pathname } = location
  return (
    <Box
      sx={{
        padding: '1rem 0'
      }}
    >
      {RouteList.map(route => {
        return pathname === route.path ? (
          <ColoredRouteButton
            key={route.path}
            title={route.title}
            route={route.path}
          />
        ) : (
          <Button key={route.path} component={RouterLink} to={route.path}>
            {route.title}
          </Button>
        )
      })}
    </Box>
  )
}

export default UpperNavigation
