import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import QuoteService from '../services/QuoteService'

const AddQuote = () => {     
    const initialQuoteState = {
        id: null,
        text: '',
        author: ''
    }

    const [quote, setQuote] = useState(initialQuoteState)
    const [submitted, setSubmitted] = useState(false)

    const handleInputChange = event => {
        const { name, value } = event.target
        setQuote({ ...quote, [name]: value})
    }

    const saveQuote = () => {
        let data = {
            text: quote.text,
            author: quote.author
        }
        QuoteService.create(data)
            .then(response => {
                setQuote({
                    id:response.data.id,
                    text:response.data.text,
                    author:response.data.author
                })
                setSubmitted(true)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const newQuote = () => {
        setQuote(initialQuoteState)
        setSubmitted(false)
    }  
    return (
        <div className='submit-form'>
            {submitted ? (
                <div>
                    <h4>You submitted successfully</h4>
                    <button className='btn btn-success' onClick={newQuote}><Link to={"/"}>Back to Quotes</Link></button>
                </div>
            ): (
                <div>
                    <h2 style={{marginTop:"3rem"}}>Add a new Quote</h2>
                    <div className='form-group'>
                        <label htmlFor='text'>Quote</label>
                        <input
                            type="text"
                            className="form-control"
                            id="text"
                            required
                            value={quote.text}
                            onChange={handleInputChange}
                            name="text"
                         />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='text'>Author</label>
                        <input
                            type="text"
                            className="form-control"
                            id="author"
                            value={quote.author}
                            onChange={handleInputChange}
                            name="author"
                         />
                    </div>
                    <button onClick={saveQuote} className="btn btn-success">Submit</button>
                </div>
            )}
        </div>
     ) 
    }

export default AddQuote