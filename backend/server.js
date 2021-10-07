const express = require('express');
const sites = require('./data/sites');
const rentals = require('./data/rentals');
const sitetypes = require('./data/sitetypes');
const app = express();

app.get('/', (req, res) => {
	res.send('API is running');
});

app.get('/api/sitetypes', (req, res) => {
	res.json(sitetypes);
});

app.get('/api/sites', (req, res) => {
	res.json(sites);
});

app.get('/api/rentals', (req, res) => {
	res.json(rentals);
});

app.listen(5000, console.log('Server running on port 5000'));
