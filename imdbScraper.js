const axios = require('axios');
const cheerio = require('cheerio');

const headers = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
    '(KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
};

async function scrapeIMDbTrivia(url) {
  try {
    const response = await axios.get(url, { headers });
    const html = response.data;
    const $ = cheerio.load(html);

    const triviaItems = $('.ipc-html-content-inner-div');
    const triviaData = [];

    triviaItems.each((index, element) => {
      const triviaText = $(element).text().trim();
      triviaData.push({ id: index + 1, text: triviaText });
    });

    return triviaData;
  } catch (error) {
    console.error('Error scraping IMDb trivia');
    return [];
  }
}

module.exports = scrapeIMDbTrivia;
