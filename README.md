# IMDb Trivia API

This repository contains a Node.js script that scrapes trivia data from IMDb and optionally translate it to Portuguese (or any other language if changed). It is designed to be deployed as an API on Vercel.

## Features

- Scrapes trivia data from IMDb for a given Movie or TV Show and transforms it into a JSON structured response.
- Optionally translates the trivia data to Portuguese (or any other language if changed).

## Usage

Deploy this repository directly on Vercel by clicking here: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftiagosilvadeveloper%2FIMDb-Trivia-API)

Once deployed, you can use the following endpoints:

`{https://myapi.vercel.com}/{imdbId}`
> (e.g. [https://imdb-trivia-api.vercel.app/tt0816692](https://imdb-trivia-api.vercel.app/tt0816692))

#### Translating Trivia to Portuguese (or any other language if changed)
`{https://myapi.vercel.com}/{imdbId}?translated=true`
> (e.g. [https://imdb-trivia-api.vercel.app/tt0816692?translated=true](https://imdb-trivia-api.vercel.app/tt0816692?translated=true))

## Configuration

In the `translator.js` file, you can change the [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) to which the trivia data is translated by modifying the `to` property in the options passed to the `translate` function. By default, it is set to translate to Portuguese (`to: 'pt'`). 

```javascript
const translatedText = await translate(trivia.text, { to: 'pt' }); // Change 'pt' to desired ISO 639-1 language code
```

## License

[MIT](https://github.com/tiagosilvadeveloper/IMDb-Trivia-API/blob/main/LICENSE)
