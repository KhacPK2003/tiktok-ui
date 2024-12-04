import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GlobalStyles from './components/GlobalStyles'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Following from './pages/Following'
function App() {

  return (
    <>
    <Router>
      <div className='App'>
      <Routes>
      <Route path='/following' element={<Following/>}/>
      </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
