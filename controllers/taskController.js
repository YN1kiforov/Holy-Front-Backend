const Task = require('../models/task');

exports.createTask = async (req, res) => {
	try {
		console.log(req.body)
		const task = new Task(req.body);

		await task.save();

		res.status(201).json({ success: true, task });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

exports.getTasks = async (req, res) => {
	try {
		const tasks = await Task.find();

		res.status(200).json({ success: true, tasks });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

exports.getTaskById = async (req, res) => {
	console.log(req.params)
	try {
		const { id } = req.params;

		const task = await Task.findById(id);

		if (!task) {
			return res.status(404).json({ success: false, error: 'Task not found' });
		}

		res.status(200).json({ success: true, task });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

exports.updateTaskById = async (req, res) => {
	try {
		const { id } = req.params;

		const task = await Task.findByIdAndUpdate(id, req.body, { new: true });

		if (!task) {
			return res.status(404).json({ success: false, error: 'Task not found' });
		}

		res.status(200).json({ success: true, task });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

exports.deleteTaskById = async (req, res) => {
	try {
		const { id } = req.params;

		const task = await Task.findByIdAndDelete(id);

		if (!task) {
			return res.status(404).json({ success: false, error: 'Task not found' });
		}

		res.status(200).json({ success: true, message: 'Task deleted' });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

exports.checkTask = async (req, res) => {
	const runCode = require('../utils/runCode')
	try {
		const { id, code } = req.body;

		const task = await Task.findById(id);

		if (!task) {
			return res.status(404).json({ success: false, error: 'Task not found' });
		}
		const result = runCode(code, task.tests)
		res.status(200).json({ success: true, result });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

