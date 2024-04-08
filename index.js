const express = require('express');
const cors = require('cors');
const scrapeIMDbTrivia = require('./src/imdbScraper');
const translateToPortuguese = require('./src/translator');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the IMDb Trivia Scraper API!');
});

app.get('/:imdbId', async (req, res) => {
  try {
    const imdbId = req.params.imdbId;
    const imdbTriviaURL = `https://www.imdb.com/title/${imdbId}/trivia/`;

    const triviaData = await scrapeIMDbTrivia(imdbTriviaURL);

    if (req.query.translated === 'true') {
      const translatedTriviaData = await translateToPortuguese(triviaData);
      res.json(translatedTriviaData);
    } else {
      res.json(triviaData);
    }
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
