import express from 'express';
import dotenv from 'dotenv';
import siteTypeRoutes from './routes/siteTypeRoutes.js';
import rentalRoutes from './routes/rentalRoutes.js'
import connectDB from './config/db.js';
import colors from 'colors';
import siteRoutes from './routes/siteRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.get('/', (req, res) => {
	res.send('API is running');
});

app.use('/api/sites', siteRoutes);

app.use('/api/sitetypes', siteTypeRoutes);

app.use('/api/rentals', rentalRoutes)

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
	)
);
