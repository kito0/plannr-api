const Deadline = require('../models/deadline.model');

// GET http://localhost:3000/users/:id/deadlines
exports.getDeadlines = async (req, res) => {
	try {
		const deadlines = await Deadline.find();

		return res.status(200).json({
			success: true,
			data: deadlines,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server error',
		});
	}
};

// POST http://localhost:3000/users/:id/deadlines
exports.addDeadline = async (req, res) => {
	try {
		const deadline = await Deadline.create(req.body);

		return res.status(201).json({
			success: true,
			data: deadline,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server error, could not add',
		});
	}
};

// PUT http://localhost:3000/users/:id/deadlines/:id
exports.updateDeadline = async (req, res) => {
	try {
		const deadline = await Deadline.findById(req.params.id);

		if (!deadline) {
			return res.status(404).json({
				success: false,
				error: 'Deadline not found',
			});
		}

		await Deadline.updateOne({ _id: req.params.id }, req.body);

		const updatedDeadline = await Deadline.findById(req.params.id);

		return res.status(200).json({
			success: true,
			data: updatedDeadline,
		});
	} catch (err) {
		return res.status(404).json({
			success: false,
			error: 'No deadline by that id found',
		});
	}
};

// DELETE http://localhost:3000/users/:id/deadlines/:id
exports.deleteDeadline = async (req, res) => {
	try {
		const deadline = Deadline.findById(req.params.id);

		if (!deadline) {
			return res.status(404).json({
				success: false,
				error: 'Deadline not found',
			});
		}

		await deadline.deleteOne();

		return res.status(200).json({
			success: true,
			data: {},
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server error, could not delete',
		});
	}
};
