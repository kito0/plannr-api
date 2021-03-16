const router = require('express').Router();
const {
	getDeadlines,
	addDeadline,
	updateDeadline,
	deleteDeadline,
} = require('../controllers/deadline.controller');

router.route('/').get(getDeadlines).post(addDeadline);

router.route('/:id').put(updateDeadline).delete(deleteDeadline);

module.exports = router;
