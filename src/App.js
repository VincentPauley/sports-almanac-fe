import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
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
      <Link to="/">Home</Link>
      <Link to="/records">Records</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </Router>
  )
}

export default App
