const axios = require('axios');

/**
 * Fetches AI news or research papers from specified third-party APIs.
 * @param {string} contentType - The type of content to fetch ('news' or 'research-papers').
 * @returns {Promise<Object>} - The fetched data or an error object.
 */
async function fetchContent(contentType) {
  let apiUrl = '';

  // Example URLs; Replace with actual API endpoints provided by the client
  if (contentType === 'news') {
    apiUrl = 'https://newsapi.org/v2/everything?q=+artificial+intelligence&sortBy=publishedAt&language=en&apiKey=${NEWS_API_KEY}';
  } else if (contentType === 'research-papers') {
    apiUrl = 'http://export.arxiv.org/api/query?search_query=all:ai&start=0&max_results=10&sortBy=submittedDate&sortOrder=descending'; 
  } else {
    console.error(`Invalid content type specified: ${contentType}`);
    return { error: 'Invalid content type specified' };
  }

  try {
    const response = await axios.get(apiUrl);
    console.log(`Successfully fetched ${contentType}:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${contentType}:`, error.toString());
    return { error: `Failed to fetch ${contentType}` };
  }
}

module.exports = { fetchContent };