import React, { useState, useEffect } from 'react'
import { get, put } from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function EditQuote(props) {
  const initialState = {
    text: "",
    author: ""
}  
  const [quote, setQuote] = useState(initialState) 

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(
    function () {
        async function updateQuote() {
            try {
                const response = await get(`/api/quotes/${id}`);
                setQuote(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        updateQuote();
    },
    [props, id]
);

    function handleSubmit(event) {
        event.preventDefault()
        async function updateQuote(){
            try{
                await put(`/api/quotes/${quote.id}`, quote)
                navigate(`/`)
            } catch(error){
                console.log(error)
            }
        }
        updateQuote()
    }

    function handleChange(event){
        setQuote({ ...quote, [event.target.name]: event.target.value})
    }

    function handleCancel() {
		navigate(`/`);
	}
    
  return (
    <div className='container'>
        <h1>Edit quote</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Edit Quote</label>
                <input
                    name="text"
                    type="text"
                    value={quote.text}
                    onChange={handleChange}
                    className='form-control'
                    placeholder=''
                />
             </div>
             <div className='form-group'>
                <label>Edit Author</label>
                <input
                    name="author"
                    type="text"
                    value={quote.author}
                    onChange={handleChange}
                    className='form-control'
                />
             </div>
             <div className='btn-group'>
                 <button type="submit" className='btn btn-primary m-1 rounded'>
                     Update
                 </button>
                 <button type="button" onClick={handleCancel} className="btn btn-secondary m-1 rounded">
                    Cancel
                 </button>
             </div>
        </form>
    </div>
  )
}

export default EditQuote