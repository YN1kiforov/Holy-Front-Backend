const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  tags: { type: String[], required: true },
  tests: { type: Array, required: true },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;