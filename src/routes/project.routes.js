const express = require('express')
const router = express.Router()
const projectController = require('../controllers/project.controller');

// Retrieve all projects
router.get('/getAll', projectController.findAll);

// Create a new projects
router.post('/create', projectController.create);

// Retrieve a single project with id
router.get('/:id', projectController.findById);

// Update a project with id
router.put('/:id', projectController.update);

// Delete a project with id
router.delete('/:id', projectController.delete);

module.exports = router