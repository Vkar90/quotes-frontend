import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

function DeleteQuote(props) {
  const [quote, setQuote] = useState({}) 

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(
    function () {
        async function deleteQuoteById() {
            try {
                const response = await axios.get(`/api/quotes/${id}`);
                setQuote(response.data);
            } catch (error) {
                console.log("error", error);
            }
        }
        deleteQuoteById();
    },
    [id]
)

async function handleDelete() {
    try {
        await axios.delete(`/api/quotes/${id}`);
        
    } catch (error) {
        console.error(error);
    }
    navigate("/");
}

  return (
    <div className='container'>
        <h2>Delete quote</h2>
        <p>
				<b>Quote</b>: {quote.text}
			</p>
			<p>
				<b>Author</b>: {quote.author}
			</p>
            <div className="btn-group">
				<button onClick={handleDelete} className="btn btn-danger m-1 rounded">
					Delete
				</button>
				<Link to="/api/quotes" className="btn btn-secondary m-1 rounded">
					Cancel{" "}
				</Link>
			</div>
    </div>
  )
}

export default DeleteQuote