const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/signup', async (req, res) => {
	const { username, email, password } = req.body;

	try {
		const user = new User({ username, email, password });
		await user.save();

		const token = jwt.sign({ userId: user._id }, 'MY_SECERET_KEY');
		const { password, ...others } = user._doc;
		res.status(200).json(others, token);
		// res.send({ token });
	} catch (err) {
		if (err.code === 11000) {
			return res
				.status(422)
				.send({ error: 'Email already in use, please enter another email.' });
		} else {
			return res.status(422).send({ error: err.message });
		}
	}
});

router.post('/signin', async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(422).send({ error: 'Must provide email and password.' });
	}

	const user = await User.findOne({ email });
	if (!user) {
		return res.status(404).send({ error: 'Invalid email or password.' });
	}

	try {
		await user.comparePassword(password);
		const token = jwt.sign({ userId: user._id }, 'MY_SECERET_KEY');
		const { password, ...others } = user._doc;
		res.status(200).json(others, token);
		// res.send({ token });
	} catch (err) {
		return res.status(404).send({ error: 'Invalid email or password.' });
	}
});

module.exports = router;
