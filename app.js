const express = require('express');
const mongoose = require('mongoose');
const app = express();
const taskRoutes = require('./routes/task.js');
const userRoutes = require('./routes/user.js');
require('dotenv').config();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(
	console.log('connect DB')
);

app.use(express.json());
app.use('/task', taskRoutes);
app.use('/user', userRoutes);


app.listen(3001, () => {
	console.log('Server is running on port 3001');
});