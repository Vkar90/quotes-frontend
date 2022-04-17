import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import QuoteService from "../services/QuoteService";

const Quote = props => {
    const { id }= useParams();
    let navigate = useNavigate();
    const initialQuoteState = {
      id: null,
      text: '',
      author: ''
    }

    const [currentQuote, setCurrentQuote] = useState(initialQuoteState)

    const getQuote = id => {
        QuoteService.get(id)
            .then(response => {
                setCurrentQuote(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
      if(id)
      getQuote(id)
    }, [id])

    const handleInputChange = event => {
        const { name, value } = event.target
        setCurrentQuote({...currentQuote, [name]: value})
    }

    const updateQuote = () => {
        QuoteService.update(currentQuote.id, currentQuote)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const deleteQuote = () => {
        QuoteService.remove(currentQuote.id)
            .then(response => {
                console.log(response.data)
                navigate("/api/quotes")
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            {currentQuote ? (
                <div className="edit-form">
                    <h4>Quote</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="text">Quote</label>
                            <input
                                type="text"
                                className="form-control"
                                id="text"
                                name="text"
                                value={currentQuote.text}
                                onChange={handleInputChange}
                             />
                        </div>
                        <div className="form-group">
                            <label htmlFor="author">Author</label>
                            <input
                                type="text"
                                className="form-control"
                                id="author"
                                name="author"
                                value={currentQuote.author}
                                onChange={handleInputChange}
                             />
                        </div>
                        <div className="form-group">
                            <buton  
                                type="submit"
                                className="badge badge-success"
                                onClick={updateQuote}
                                >
                                Update
                             </buton>
                             <button className="badge badge-danger mr-2" onClick={deleteQuote}>
                                Delete
                            </button>
                        </div>
                    </form>
                </div>
            ): (
            <p>Please select a Quote...</p>                
            )} 
        </div>
    ) 
  }

export default Quote