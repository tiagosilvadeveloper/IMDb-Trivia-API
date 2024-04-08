const { translate } = require('@vitalets/google-translate-api');

async function translateToPortuguese(triviaData) {
  try {
    const translatedTriviaData = [];
    for (const trivia of triviaData) {
      const translatedText = await translate(trivia.text, { to: 'pt' });
      translatedTriviaData.push({ id: trivia.id, text: translatedText.text });
    }
    return translatedTriviaData;
  } catch (error) {
    console.error('Error translating trivia to Portuguese:', error);
    return [];
  }
}

module.exports = translateToPortuguese;
