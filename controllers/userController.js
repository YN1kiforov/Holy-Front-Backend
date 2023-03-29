const User = require('../models/user');

exports.createUser = async (req, res) => {
	try {
		const user = new User(req.body);

		await user.save();

		res.status(201).json({ success: true, user });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

exports.getUsers = async (req, res) => {
	try {
		const users = await User.find();

		res.status(200).json({ success: true, users });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

exports.getUserById = async (req, res) => {
	try {
		const { id } = req.params;

		const user = await User.findById(id);

		if (!user) {
			return res.status(404).json({ success: false, error: 'User not found' });
		}

		res.status(200).json({ success: true, user });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

exports.updateUserById = async (req, res) => {
	try {
		const { id } = req.params;

		const user = await User.findByIdAndUpdate(id, req.body, { new: true });

		if (!user) {
			return res.status(404).json({ success: false, error: 'User not found' });
		}

		res.status(200).json({ success: true, user });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};

exports.deleteUserById = async (req, res) => {
	try {
		const { id } = req.params;

		const user = await User.findByIdAndDelete(id);

		if (!user) {
			return res.status(404).json({ success: false, error: 'User not found' });
		}

		res.status(200).json({ success: true, message: 'User deleted' });
	} catch (error) {
		res.status(400).json({ success: false, error: error.message });
	}
};