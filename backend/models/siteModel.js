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
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'SiteType',
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
