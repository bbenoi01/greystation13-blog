const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middleware/requireAuth');
const multer = require('multer');
const uuid = require('uuid').v4;
const Image = mongoose.model('Image');

const router = express.Router();

router.use(requireAuth);

let fileName;
let path;

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'images');
	},
	filename: (req, file, cb) => {
		const id = uuid();
		const { originalname } = file;
		fileName = `${originalname}`;
		path = `${id}-${originalname}`;
		cb(null, path);
	},
});

const upload = multer({ storage });

router.post('/images', upload.single('image'), async (req, res) => {
	try {
		const image = new Image({
			fileName,
			path: `images/${path}`,
			username: req.user.username,
		});
		const savedImage = await image.save();
		res.status(200).json(savedImage);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.get('/images', async (req, res) => {
	const images = await Image.find();
	res.send(images);
});

router.get('/images/:id', async (req, res) => {
	const image = await Image.find({ _id: req.params.id });
	res.send(image);
});

module.exports = router;
