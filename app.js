const express = require('express');
const mongoose = require('mongoose');
const app = express();
const taskRoutes = require('./routes/task.js');
const userRoutes = require('./routes/user.js');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(
	console.log('connect DB')
);

app.use('/task', taskRoutes);
app.use('/user', userRoutes);


app.listen(3000, () => {
	console.log('Server is running on port 3000');
});