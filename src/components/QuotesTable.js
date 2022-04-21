import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function QuotesTable() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function getQuotes() {
      try {
        const response = await axios.get("/api/quotes");
        setQuotes(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    }
    getQuotes();
  }, []);

  return (
    <div className="container-lg">
      <div>
        <h2>All Quotes</h2>
        <p>
          <Link to="/add-quote" className="btn btn-primary">
            Add Quote
          </Link>
        </p>
      </div>
      <table className="table responsive container">
        <thead>
          <tr>
            <th>Quote</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {quotes &&
            quotes.map((quote) => {
              return (
                <tr key={quote.id}>
                  <td>{quote.text}</td>
                  <td>{quote.author}</td>
                  <td>
                    <Link
                      to={`/api/quotes/${quote.id}`}
                      className="btn btn-warning"
                    >
                      View
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/api/quotes/${quote.id}/edit`}
                      className="btn btn-success"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/api/quotes/${quote.id}/delete`}
                      className="btn btn-danger"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default QuotesTable;
