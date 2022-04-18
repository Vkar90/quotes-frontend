import React, {useState, useEffect } from 'react'
import QuoteService from '../services/QuoteService'
import { Link } from 'react-router-dom'

const QuotesList = () => {
  const [quotes, setQuotes] = useState([])
  const [currentQuote, setCurrentQuote] = useState(null)
  // const [currentIndex, setCurrentIndex] = useState(-1)
  const [isEditing, setIsEditing] = useState(false)
  
  useEffect(() => {
    retrieveQuotes()
  }, [])

  const retrieveQuotes = () => {
    QuoteService.getAll()
      .then(response => {
        setQuotes(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  function handleDelete(e){
    QuoteService.remove().then(response => {
      console.log(response.data)
      setQuotes((data) => {
        return data.filter((quote) => quote.id !== e.target.value)
      })
    })
  }

  return (
    <div className='table-wrapper'>
      <h2 style={{textAlign:"center", marginBottom:"3rem"}}>Quote Management App</h2>
      <table>
        <thead>
          <tr>
            <th>Quote</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {quotes && quotes.map((quote, id) => {
            return (
              <tr key={quote.id}>
                <td>{quote.text}</td>
                <td>{quote.author}</td>
                <td>
                  <button className="btn btn-success m-2">Edit</button>
                  <button
                  className="btn btn-danger m-2"
                  oncClick={handleDelete}
                  >
                  Delete
                </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
        <div className='add-new-section'>
        <button className='btn btn-success'><Link to={"/add"}>Add a new Quote</Link></button>
        </div>
    </div>
  )
}

export default QuotesList