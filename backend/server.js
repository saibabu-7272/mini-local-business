const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors({ origin: 'https://mini-local-business.vercel.app/' }));
app.use(express.json());

// Utility function to generate random headline
const getRandomHeadline = (name, location) => {
  const headlines = [
    `Why ${name} is ${location}'s Go-To Choice in 2025`,
    `Discover Why Everyone in ${location} Loves ${name}`,
    `Is ${name} the Best in ${location}? Find Out Now!`,
    `${name} — Transforming ${location} One Customer at a Time`,
    `Top Reasons to Visit ${name} in ${location} This Year`,
    `See Why ${name} is Rated #1 in ${location}`,
    `The Secret Behind ${name}'s Popularity in ${location}`,
    `${location}'s Hidden Gem: Experience ${name} Today`,
    `Why ${name} is ${location}'s Most Talked About Business`,
    `Find Out Why ${name} is Dominating the ${location} Scene`,
    `Locals Can't Get Enough of ${name} in ${location}`,
    `${name} — Setting New Standards in ${location}`,
    `${name}: A Must-Visit Spot for Everyone in ${location}`,
    `What Makes ${name} Stand Out in ${location}?`,
    `Your Search for Excellence in ${location} Ends at ${name}`
  ];

  const randomIndex = Math.floor(Math.random() * headlines.length);
  return headlines[randomIndex];
};

// Utility to generate random rating and reviews
const getRandomRating = () => (Math.random() * 1 + 4).toFixed(1); // Random between 4.0 to 5.0
const getRandomReviews = () => Math.floor(Math.random() * 450) + 50; // Random between 50 to 500

// POST /business-data
app.post('/business-data', (req, res) => {
  const { name, location } = req.body;

  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required.' });
  }

  const data = {
    rating: parseFloat(getRandomRating()),
    reviews: getRandomReviews(),
    headline: getRandomHeadline(name, location)
  };

  res.json(data);
});

// GET /regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;

  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required.' });
  }

  const headline = getRandomHeadline(name, location);
  res.json({ headline });
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
