const express = require('express')
const router = express.Router()
const applyleavesController = require('../controllers/applyleaves.controller');

// Retrieve all leaves
router.get('/getAll', applyleavesController.findAll);

// Create a new leaves
router.post('/apply', applyleavesController.apply);

// Retrieve a single leave with id
router.get('/:ApplyLeaveId', applyleavesController.findById);

// Update a applyleaves with id
router.put('/:ApplyLeaveId', applyleavesController.update);

// Delete a leave with id
router.delete('/:ApplyLeaveId', applyleavesController.delete);

module.exports = router;