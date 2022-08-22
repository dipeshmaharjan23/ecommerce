import React, { useState ,useEffect} from 'react'
import './App.css'
import Bottom from './components/bottom/Bottom'
import Top from './components/top/Top'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {

  const [ image ,setImage] = useState([]);

  const api = async()=>{
    const getApi =await fetch('https://fakestoreapi.com/products')
    const res =await getApi.json();
    console.log(res.title)

  }

  useEffect(()=>{
    api()
  },[])
  return (
    <>
      <Router className="App">
        <Top />
        <Bottom />
      </Router>
    </>
  )
}

export default App