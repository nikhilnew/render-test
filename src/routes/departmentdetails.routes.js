const express = require('express')
const router = express.Router()
const DepartmentDetailsController = require('../controllers/departmentdetails.controller');


// Create a new DepartmentDetails
router.post('/department', DepartmentDetailsController.department);

router.get('/getAll', DepartmentDetailsController.findAll);

router.delete('/:departmentId', DepartmentDetailsController.delete);


module.exports = router;

