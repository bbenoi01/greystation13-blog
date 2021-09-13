const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middleware/requireAuth');

const Post = mongoose.model('Post');

const router = express.Router();

router.use(requireAuth);

router.get('/posts', async (req, res) => {
	const username = req.query.user;
	const category = req.query.category;
	let posts;

	try {
		if (username) {
			posts = await Post.find(username);
		} else if (category) {
			posts = await Post.find({
				categories: {
					$in: [category],
				},
			});
		} else {
			posts = await Post.find();
		}
		res.status(200).json(posts);
	} catch (err) {
		res.status(500).json(err);
	}

	res.send(posts);
});

router.get('/post/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.status(200).json(post);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/post', async (req, res) => {
	const newPost = new Post(req.body);

	try {
		const savedPost = await newPost.save();
		res.status(200).json(savedPost);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.put('/post/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.username === req.body.username) {
			try {
				const updatedPost = await Post.findByUdAndUpdate(
					req.params.id,
					{ $set: req.body },
					{ new: true }
				);
				res.status(200).json(updatedPost);
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(401).json('You can only update your posts!');
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/post/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.username === req.body.username) {
			try {
				await post.delete();
				res.status(200).json('Post has been deleted...');
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(401).json('You can only delete your own post!');
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
