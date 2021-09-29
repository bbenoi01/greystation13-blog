const express = require('express');
const mongoose = require('mongoose');

const Category = mongoose.model('Category');

const router = express.Router();

router.get('/categories', async (req, res) => {
	const categories = await Category.find();

	res.send(categories);
});

router.post('/category', async (req, res) => {
	const newCategory = new Category(req.body);

	try {
		const savedCategory = await newCategory.save();
		res.status(200).json(savedCategory);
	} catch (err) {
		res.status.send({ error: err.message });
	}
});

module.exports = router;
