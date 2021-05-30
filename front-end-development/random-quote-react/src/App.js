import React, { useEffect, useState } from 'react';
import classes from './App.module.scss';
import { FaTwitter, FaQuoteLeft } from 'react-icons/fa';

// create layout a
// fetch quotes
// populate quote
// select random quote and update state

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getRandomQuote = (quotes) => {
    const randomNum = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNum];
    setIsLoading(false);
    return randomQuote;
  };

  const sendRequest = () => {
    fetch(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    )
      .then((res) => res.json())
      .then((data) => {
        const randomQuote = getRandomQuote(data.quotes);
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  useEffect(() => {
    sendRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const content = isLoading ? (
    <div id={classes.loader}></div>
  ) : (
    <header>
      <FaQuoteLeft />
      <cite id='text'>{quote}</cite>
      <p id='author'> - {author}</p>
    </header>
  );

  return (
    <div className={classes.App} id='quote-box'>
      {content}
      <div>
        {' '}
        <a
          id='tweet-quote'
          target='_blank'
          rel='noreferrer'
          href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
        >
          <button>
            <FaTwitter />
          </button>{' '}
        </a>
        <button id='new-quote' onClick={sendRequest}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
