import mongoose from 'mongoose';

const rentalSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		site: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Site',
		},
	},
	{
		timestamps: true,
	}
);

const Rental = mongoose.model('Rental', rentalSchema);
export default Rental;
