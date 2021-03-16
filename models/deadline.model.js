const mongoose = require('mongoose');

const DeadlineSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	dueDate: {
		type: Date,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	important: Boolean,
	complete: {
		type: Boolean,
		required: true,
		default: false,
	},
});

module.exports = mongoose.model('Deadline', DeadlineSchema);
