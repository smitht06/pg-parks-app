import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Rental from '../models/rentalModel.js';

router.get(
    '/',
    asyncHandler(async (req, res) => {
      const rentals = await Rental.find({})
  
      res.json(rentals)
    })
  )

  router.get(
    '/:id',
    asyncHandler(async (req, res) => {
      const rental = await Rental.findById(req.params.id)
  
      if (rental) {
        res.json(rental)
      } else {
        res.status(404).json({ message: 'rental not found' })
      }
    })
  )

  export default router;