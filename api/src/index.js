require('./models/User');
require('./models/Category');
require('./models/Post');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const imageRoutes = require('./routes/imageRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const postRoutes = require('./routes/postRoutes');
const path = require('path');

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname + '/images')));

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: true,
});

mongoose.connection.on('connected', () => {
	console.log('Connected to mongo instance.');
});
mongoose.connection.on('error', (err) => {
	console.error('Error connecting to mongo.', err);
});

app.use(imageRoutes);
app.use(postRoutes);
app.use(authRoutes);
app.use(userRoutes);
app.use(categoryRoutes);

app.listen(process.env.PORT || 3005, () => {
	console.log('Listening on port 3005');
});
