const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();

const deadlineRoute = require('./routes/deadline.route');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
	)
	.catch((error) => console.log(error.message));

app.use(express.json());
app.use(cors());

app.use('/deadlines', deadlineRoute);

module.exports = app;
