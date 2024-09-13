import './App.css'
import Home from './Pages/Home/Home.jsx'
import "./Store/Store.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
