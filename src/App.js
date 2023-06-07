import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink
} from 'react-router-dom'
import Button from '@mui/material/Button'

import './App.css'

import GameRecords from './components/GameRecords'

function Records() {
  return <GameRecords />
}

function Home() {
  return <>WELCOME HOME</>
}

function App() {
  return (
    <Router>
      <Button component={RouterLink} to="/">
        Home
      </Button>
      <Button component={RouterLink} to="/records">
        Records
      </Button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </Router>
  )
}

export default App
