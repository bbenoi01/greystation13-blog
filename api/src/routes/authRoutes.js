const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
	let userData;

	try {
		const user = new User(req.body);
		await user.save();
		const token = jwt.sign({ userId: user._id }, 'MY_SECERET_KEY');
		const { password, ...others } = user._doc;
		userData = { ...others, token };
		res.status(200).json(userData);
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
	let userData;

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
		userData = {
			profilePic: user._doc.profilePic,
			_id: user._doc._id,
			username: user._doc.username,
			email: user._doc.email,
			createdAt: user._doc.createdAt,
			updatedAt: user._doc.updatedAt,
			__v: user._doc.__v,
			token,
		};
		return res.status(200).json(userData);
	} catch (err) {
		return res.status(404).send({ error: 'Invalid email or password.' });
	}
});

module.exports = router;
