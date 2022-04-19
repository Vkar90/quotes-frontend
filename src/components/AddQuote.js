import React, { useState } from 'react'
import { post } from 'axios'
import { useNavigate } from 'react-router-dom'

function AddQuote(props) {  
  const initialState = {
      text: "",
      author: ""
  }

  const [quote, setQuote] = useState(initialState)

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault();
    async function postQuote() {
        try {
            const response = await post("/api/quotes/", quote);
            navigate(`/quote/${response.data._id}`);
        } catch (error) {
            console.log("error", error);
        }
    }
    postQuote()
}


function handleChange(event) {
    setQuote({ ...quote, [event.target.name]: event.target.value });
}

function handleCancel() {
    navigate("/");
}


  return (
    <div className='container'>
        <h1>Add a new quote</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Quote</label>
                <input
                    name='text'
                    type='text'
                    required
                    value={quote.text}
                    onChange={handleChange}
                    className='form-control'
                 />
            </div>
            <div className='form-group'>
                <label>Author</label>
                <input
                    name='author'
                    type='text'
                    required
                    value={quote.author}
                    onChange={handleChange}
                    className='form-control'
                 />
            </div>
            <div className="btn-group my-3">
                <input type="submit" value="Submit" className="btn btn-primary rounded" />
                <button
                    type="button"
                    onClick={handleCancel}
                    className="btn btn-secondary mx-3 rounded"
                >
                    Cancel
                </button>
            </div>
        </form>
    </div>
  )
}

export default AddQuote