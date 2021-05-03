import React, {useState, useEffect} from "react";
import './App.css';

function App() {

// 1
// on first load, inject a random quote in element #text 
// on first load, inject author respectives name in #author
// 2
// when the #new-quote btn is clicked, fetch new quote and display in #text
// when the #new-quote btn is clicked fetch new author and display in #author
// 3
// tweet the current quote clicking on the #tweet-quote
// 4
  
  const [quotes, setQuotes] = useState("");
  const [hex, setHex] = useState("#fff");

  const randomizedHex = () => {
    var letters = '0123456789ABCDEF';
    var color = '#'; 
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      setHex(color);
    }

  };



  const getQuote = () =>{
    fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then(data => {
      let randomQuote = Math.floor(Math.random() * data.length);
      setQuotes(data[randomQuote]);
    })
  }

  useEffect(() => {
    getQuote()
  }, [])


  
  return (
    
    <body style={{backgroundColor: `${hex}`}}>
    <div id="quote-box">
        <p style={{color: `${hex}`}} id="text">"{quotes.text}"</p>
        <p style={{color: `${hex}`}} id="author">Author: {quotes.author}</p>
        <button style={{backgroundColor: `${hex}`}} onClick={() => {getQuote(); randomizedHex()}} id="new-quote">new quote</button>
        <a style={{color: `${hex}`}} id="tweet-quote" href={`https://twitter.com/intent/tweet/${quotes.text}`}>tweet</a>
      </div>
    </body>

  );
}

export default App;
