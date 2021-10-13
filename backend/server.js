import express from 'express';
import dotenv from 'dotenv';
import sites from './data/sites.js';
import rentals from './data/rentals.js';
import sitetypes from './data/sitetypes.js';
import connectDB from './config/db.js';
import colors from 'colors';

dotenv.config();
connectDB();

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

app.get('/api/sites/:id', (req, res) => {
	const site = sites.find((p) => p._id === req.params.id);
	res.json(site);
});

app.get('/api/rentals', (req, res) => {
	res.json(rentals);
});

app.get('/api/sitetypes/:id', (req, res) => {
	const sitetype = sitetypes.find((p) => p._id === req.params.id);
	res.json(sitetype);
});

app.get('/api/sitetypes/:id/sites', (req, res) => {
	const sitesFiltered = sites.filter((p) => p.type === req.params.id);
	res.json(sitesFiltered);
});


const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)