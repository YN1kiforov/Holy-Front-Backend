const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getTasks);

router.post('/', taskController.createTask);

router.get('/:id', taskController.getTaskById);

router.put('/:id', taskController.updateTaskById);

router.delete('/:id', taskController.deleteTaskById);

router.post('/submit', taskController.checkTask);


module.exports = router;