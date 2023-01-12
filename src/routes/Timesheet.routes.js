const express = require('express')
const router = express.Router()
const TimesheetController = require('../controllers/Timesheet.controller');

// Retrieve all leaves
router.get('/getAll', TimesheetController.findAll);

// Create a new leaves
router.post('/insert', TimesheetController.apply);

// Retrieve a single leave with id
router.get('/:TimeSheetId', TimesheetController.findById);

// Update a applyleaves with id
router.put('/:TimeSheetId', TimesheetController.update);

// Delete a leave with id
router.delete('/:TimeSheetId', TimesheetController.delete);


router.get('/time/:employeeId', TimesheetController.month);



module.exports = router;
