require('./models/User');
require('./models/Generic');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const requireAuth = require('./middleware/requireAuth');

const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'images');
	},
	filename: (req, file, cb) => {
		cb(null, req.body.name);
	},
});

const upload = multer({ storage: storage });
app.post('/upload', upload.single('file'), (req, res) => {
	res.status(200).json('File has been uploaded');
});

app.use(cors());
app.use(express.json());
app.use(authRoutes);
app.use(categoryRoutes);
app.use(postRoutes);
app.use(userRoutes);

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
