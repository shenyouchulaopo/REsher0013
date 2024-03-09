// Import necessary libraries or modules
const express = require('express');
const axios = require('axios');

// Create an Express application
const app = express();

// Define a route to provide fundamental knowledge and explanations about cryptocurrencies
app.get('/crypto101', async (req, res) => {
    try {
        // Simulated data for Crypto101 content (replace this with actual content)
        const crypto101Content = {
            title: "Crypto101 - Beginner's Guide to Cryptocurrencies",
            content: "Welcome to Crypto101! Whether you're new to cryptocurrencies or looking to expand your knowledge, this guide provides fundamental information and explanations about Bitcoin, Ethereum, and other major cryptocurrencies. Learn about blockchain technology, decentralized finance (DeFi), digital wallets, and more.",
            topics: ["Introduction to cryptocurrencies", "Understanding blockchain technology", "Bitcoin: the first cryptocurrency", "Ethereum and smart contracts", "Other major cryptocurrencies"],
            resources: {
                books: ["Mastering Bitcoin by Andreas M. Antonopoulos", "The Internet of Money by Andreas M. Antonopoulos"],
                websites: ["https://bitcoin.org", "https://ethereum.org"],
                onlineCourses: ["Blockchain Basics on Coursera", "Ethereum Development Course on Udemy"]
            }
        };

        // Send Crypto101 content as JSON response
        res.json(crypto101Content);
    } catch (error) {
        console.error('Error providing Crypto101 content:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Crypto101 server is running on port ${PORT}`);
});
