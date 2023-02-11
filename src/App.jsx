import { useState } from 'react'
import BrainAPI from './components/BrainAPI'
import WikiAPI from './components/WikiAPI'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [ai, setAi] = useState('')

  return (
    <div className="App">
      <h1>Welcome to my api Tests</h1>
      <BrainAPI />
      <WikiAPI />
    </div>
  )
}

export default App

