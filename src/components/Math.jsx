import { useState } from "react"
import './WikiAPI.css'

function Math() {

  const [math, setMath] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className="math-home">
      
      <div className="math">
        <p>Let's simplify a function</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor='C1'>C1</label>
          <input id='C1' name='C1' type='number' placeholder="simplify" onChange={handleChange} /><br/>
          <input name='V1' type='number' placeholder="simplify" onChange={handleChange}/><br/>
          <input name='C2' type='number' placeholder="simplify" onChange={handleChange}/><br/>
          <input name='V2' type='number' placeholder="simplify" onChange={handleChange}/><br/>
          <input type='submit' value='Simplify' /> 
        </form>
        {!math ? <p></p> : <p>{math}</p>}
      </div>

      <div className="formula">
        <h1>C1 x V1 = C2 x V2</h1>
        <h1></h1>
      </div>
      

    </div>
  )
}

export default Math