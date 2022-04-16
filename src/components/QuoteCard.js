import axios from 'axios'
import React, { useState, useEffect } from 'react'

const QuotesTable = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getQuotes()
  }, [])

  const getQuotes = async () => {
    const response = await axios.get("/api/quotes")
    if(response.status ===200){
      setData(response.data)
    }
  }

  console.log(data)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Quotes</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((quote, id) => {
            return (
              <tr key={id}>
                <th></th>
                <td>{quote.text}</td>
                <td>{quote.author}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default QuotesTable