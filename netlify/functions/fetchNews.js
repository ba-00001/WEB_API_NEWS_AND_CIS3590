// netlify/functions/fetchNews.js
const fetch = require("node-fetch");

exports.handler = async function () {
    const apiKey = "b8f481ac86764640bc0a3e7e6cd7fbc7"; // Replace with your actual API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
        }
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch news data" }),
        };
    }
};
