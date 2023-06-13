import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import GameRecords from './components/GameRecords'
import UpperNavigation from './components/UpperNavigation'

import { CreateRecords } from './routes'

function Records() {
  return <GameRecords />
}

function Home() {
  return <>WELCOME HOME</>
}

function App() {
  return (
    <Router>
      <UpperNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/records" element={<Records />} />
        <Route path="/create-records" element={<CreateRecords />} />
      </Routes>
    </Router>
  )
}

export default App
