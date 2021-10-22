import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import SiteType from '../models/siteTypeModel.js';
import Site from '../models/siteModel.js';

// @desc    Fetch all sites
// @route   GET /api/sites
// @access  Public
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const sitetypes = await SiteType.find({});
		res.json(sitetypes);
	})
);

// @desc    Fetch single site
// @route   GET /api/sites/:id
// @access  Public
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const siteType = await SiteType.findById(req.params.id);

		if (siteType) {
			res.json(siteType);
		} else {
			res.status(404).json({ message: 'site not found' });
		}
	})
);

router.get(
	'/:id/sites',
	asyncHandler(async (req, res) => {
    const siteType = await SiteType.findById(req.params.id);
		const sitesFiltered = await Site.find({type: siteType.name});
		res.json(sitesFiltered);

		if (sitesFiltered) {
			res.json(sitesFiltered);
		} else {
			res.status(404).json({ message: 'sites not found' });
		}
	})
);

export default router;
