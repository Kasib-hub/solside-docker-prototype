import { useState } from "react"
import './WikiAPI.css'

// goal here is to get input from user, make call to wikipedia to return an article based on input, thinking, input with onChange then onSubmit, pass to the api call and return result in a p tag

function WikiAPI() {

  const [searchTerm, setSearchTerm] = useState('')
  const [wikiArticle, setWikiArticle] = useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&titles=${searchTerm}&&format=json&exsentences=2&explaintext=1&formatversion=2&origin=*`)
    .then(response => response.json())
    .then(data => setWikiArticle(data.query.pages[0].extract));
  }


  return (
    <div className="wiki">
      <h3>wikiAPI Component</h3> 

      <form onSubmit={handleSubmit}>
        <input name='article' type='text' placeholder="search an article" onChange={handleChange}/>
        <input type='submit' value='Find Article' />
        <p>You entered {searchTerm}</p>
      </form>
      {!wikiArticle ? <p></p> : <p>{wikiArticle}</p>}
    </div>
  )
}

export default WikiAPI