const DepartmentDetails = require('../models/departmentdetails.model');



exports.findAll = function(req, res) {
    DepartmentDetails.findAll(function(err, Details) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', Details);
    res.send(Details);
  });
};


exports.department = function(req, res) {
    const new_details = new DepartmentDetails(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        DepartmentDetails.create(new_details, function(err, detail) {
            if (err)
            res.send(err);
            res.json({error:false,message:"details inserted successfully!",data:detail});
        });
    }
};


exports.delete = function(req, res) {
    DepartmentDetails.delete( req.params.departmentId, function(err, Details) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'DepartmentDetails successfully deleted' });
  });
};
