import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Site from '../models/siteModel.js';
import Rental from '../models/rentalModel.js';

// @desc    Fetch all sites
// @route   GET /api/sites
// @access  Public
router.get(
    '/',
    asyncHandler(async (req, res) => {
      const sites = await Site.find({})
  
      res.json(sites)
    })
  )

// @desc    Fetch single site
// @route   GET /api/sites/:id
// @access  Public
router.get(
    '/:id',
    asyncHandler(async (req, res) => {
      const site = await Site.findById(req.params.id)
  
      if (site) {
        res.json(site)
      } else {
        res.status(404).json({ message: 'site not found' })
      }
    })
  )
  
 // @desc    Fetch single site
// @route   GET /api/sites/:id
// @access  Public
router.get(
	'/:id/rentals',
	asyncHandler(async (req, res) => {
    const site = await Site.findById(req.params.id);
		const rentalsFiltered = await Rental.find({site: site.name});
		res.json(rentalsFiltered);

		if (rentalsFiltered) {
			res.json(rentalsFiltered);
		} else {
			res.status(404).json({ message: 'sites not found' });
		}
	})
);

  export default router;