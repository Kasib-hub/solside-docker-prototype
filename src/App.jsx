import { useState } from 'react'
import WikiAPI from './components/WikiAPI'
import Math from './components/Math'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [ai, setAi] = useState('')

  return (
    <div className="App">
      <h1>Welcome to my api Tests</h1>
      <WikiAPI />
      <Math />
    </div>
  )
}

export default App

