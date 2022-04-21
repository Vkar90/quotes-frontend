import React, { useState, useEffect } from "react";
import axios from "axios";
import { DateTime } from "luxon";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RandomQuote = () => {
  const [randomQuote, setRandomQuote] = useState([]);
  const [show, setShow] = useState(false);

  //  const getRandomQuote = async () => {
  //     const response = await axios.get('/api/quotes/random')
  //     setRandomQuote(response.data)
  //  }

  async function getRandomQuote() {
    const response = await axios.get("/api/quotes/random");
    setRandomQuote(response.data);
  }

  const now = DateTime.utc().toLocal(); //get the user's local time
  const endOfDay = now.endOf("day"); //set interval to end of local timezone's day

  useEffect(() => {
    getRandomQuote();
    const interval = setInterval(() => {
      getRandomQuote();
    }, endOfDay);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-lg">
      <h2>Quote of the Day</h2>
      <Button
        type="button"
        className="btn btn-primary btn-md"
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
        onClick={() => setShow(!show)}
      >
        {show ? "Hide Quote" : "Reveal Quote"}
      </Button>
      {show && (
        <Card style={{ width: "90%", maxWidth: "40rem", marginTop: "1rem" }}>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>{randomQuote.text}</p>
              {randomQuote.author && (
                <footer className="blockquote-footer">
                  <cite title="Source Title">{randomQuote.author}</cite>
                </footer>
              )}
            </blockquote>
          </Card.Body>
          <Card.Footer>
            <mark>
              Come back <b>tomorrow</b> to see a new quote
            </mark>
          </Card.Footer>
        </Card>
      )}
    </div>
  );
};

export default RandomQuote;
