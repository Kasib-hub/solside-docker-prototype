import { useState } from 'react'
import BrainAPI from './components/brainAPI'
import WikiAPI from './components/wikiAPI'
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

