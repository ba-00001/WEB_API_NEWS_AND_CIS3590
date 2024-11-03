// netlify/functions/fetchNews.js
const fetch = require("node-fetch");

exports.handler = async function () {
    const apiKey = process.env.NEWS_API_KEY; // Access the API key stored as an environment variable in Netlify
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch news" }),
        };
    }
};
