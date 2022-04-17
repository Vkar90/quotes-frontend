import React, {useState, useEffect } from 'react'
import QuoteService from '../services/QuoteService'
import { Link, useNavigate } from 'react-router-dom'

const QuotesList = () => {
  const [quotes, setQuotes] = useState([])
  const [currentQuote, setCurrentQuote] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(-1)
  
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
  const setActiveQuote = (quote, index) => {
    setCurrentQuote(quote)
    setCurrentIndex(index)
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
          {quotes && quotes.map((quote, index) => {
            return (
              <tr key={index} onClick={() => setActiveQuote(quote, index)}>
                <td>{quote.text}</td>
                <td>{quote.author}</td>
                <td>
                  <button className="btn btn-danger m-2">Edit</button>
                  <button
                  className="btn btn-danger m-2">
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