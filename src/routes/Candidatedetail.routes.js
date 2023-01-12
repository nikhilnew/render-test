const express = require('express')
const router = express.Router()
const CandidatedetailController = require('../controllers/Candidatedetail.controller');

// Retrieve all employees
router.get('/getAll', CandidatedetailController.findAll);

// Retrieve a single employee with id
router.get('/:email', CandidatedetailController.findById);

module.exports = router