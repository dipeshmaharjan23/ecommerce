import React from 'react'
import './App.css'
import Bottom from './components/bottom/Bottom'
import Top from './components/top/Top'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Router>
        <div className="App">
          <Top />
          <Bottom />
        </div>
      </Router>
    </>
  )
}

export default App