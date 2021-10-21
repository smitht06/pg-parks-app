import mongoose from 'mongoose';

const siteTypeSchema = mongoose.Schema(
	{
		image: {
			type: String,
			required: true,
		},
		name: {
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

const SiteType = mongoose.model('SiteType', siteTypeSchema);
export default SiteType;
