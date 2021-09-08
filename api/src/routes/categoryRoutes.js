const express = require('express');
const requireAuth = require('../middleware/requireAuth');
const Category = require('../models/Category');

const router = express.Router();

router.use(requireAuth);

router.get('/categories', async (req, res) => {
	try {
		const categories = await Category.find();
		res.status(200).json(categories);
	} catch (err) {
		res.status(200).json(err);
	}
});

router.post('/category', async (req, res) => {
	const newCategory = new Category(req.body);

	try {
		const savedCategory = await newCategory.save();
		res.status(200).json(savedCategory);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
