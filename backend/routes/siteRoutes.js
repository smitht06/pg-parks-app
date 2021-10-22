import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Site from '../models/siteModel.js';

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
  
 

  export default router;