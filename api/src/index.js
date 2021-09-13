require('./models/User');
require('./models/Image');
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
const requireAuth = require('./middleware/requireAuth');

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.static('images'));
app.use(authRoutes);
app.use(imageRoutes);
app.use(userRoutes);
app.use(categoryRoutes);
app.use(postRoutes);

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
	console.log('Connected to mongo instance.');
});
mongoose.connection.on('error', (err) => {
	console.error('Error connecting to mongo.', err);
});

app.get('/', requireAuth, (req, res) => {
	res.send(`Your email: ${req.user.email}`);
});

app.listen(process.env.PORT || 3005, () => {
	console.log('Listening on port 3005');
});
