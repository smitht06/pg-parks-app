import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import rentals from './data/rentals.js';
import sites from './data/sites.js';
import sitetypes from './data/sitetypes.js';
import connectDB from './config/db.js';
import Rental from './models/rentalModel.js';
import Site from './models/siteModel.js';
import SiteType from './models/siteTypeModel.js';
import User from './models/userModel.js';

dotenv.config();
connectDB();

const importData = async () => {
	try {
		await Rental.deleteMany();
		await User.deleteMany();
		await Site.deleteMany();
		await SiteType.deleteMany();

		const createdUsers = await User.insertMany(users);
		const adminUser = createdUsers[0]._id;
		const sampleSites = sites.map((site) => {
			return { ...site, user: adminUser };
		});

		const sampleSiteTypes = sitetypes.map((siteType) => {
			return { ...siteType, user: adminUser };
		});

		const sampleRentals = rentals.map((rental) => {
			return { ...rental, user: adminUser };
		});

		await SiteType.insertMany(sampleSiteTypes);
		await Site.insertMany(sampleSites);
		await Rental.insertMany(sampleRentals);
		console.log('Success! data imported');
		process.exit(1);
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await Site.deleteMany();
		await SiteType.deleteMany();
		await User.deleteMany();
		await Rental.deleteMany();

		console.log('Data Destroyed!'.red.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
