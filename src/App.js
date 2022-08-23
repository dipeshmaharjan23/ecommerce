import React from 'react'
import './App.css'
import Bottom from './components/bottom/Bottom'
import Main from './components/main/Main.js'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Router>
        <div className="App">
          <Main />
          <Bottom />
        </div>
      </Router>
    </>
  )
}

export default App