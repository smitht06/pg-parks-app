import mongoose from 'mongoose';

const siteSchema = mongoose.Schema(
	{
		image: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
			
		},
        description: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Site = mongoose.model('Site', siteSchema);
export default Site;
