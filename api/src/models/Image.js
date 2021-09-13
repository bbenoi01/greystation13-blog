const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema(
	{
		fileName: {
			type: String,
			required: true,
		},
		path: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

mongoose.model('Image', imageSchema);
