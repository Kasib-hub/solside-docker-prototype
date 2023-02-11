import { useState, useEffect } from "react"
import './WikiAPI.css'

// goal here is to get input from user, make call to wikipedia to return an article based on input, thinking, input with onChange then onSubmit, pass to the api call and return result in a p tag

function WikiAPI() {

  const [wiki, setWiki] = useState('')

  const handleChange = (event) => {
    setWiki(event.target.value)
  }

  return (
    <div className="wiki">
      <h3>wikiAPI Component</h3> 
      <form>
        <input type='text' placeholder="search an article" onChange={handleChange}/>
        <p>You entered {wiki}</p>
      </form> 
    </div>
  )
}

export default WikiAPI