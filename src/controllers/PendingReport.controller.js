const PendingReport = require('../models/PendingReport.model');

exports.findAll = function(req, res) {
    PendingReport.findAll(function(err, leaves) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', leaves);
    res.send(leaves);
  });
};


exports.apply = function(req, res) {
    const new_leaves = new PendingReport(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        PendingReport.create(new_leaves, function(err, leave) {
            if (err)
            res.send(err);
            res.json({error:false,message:"leaves applied successfully!",data:leave});
        });
    }
};


exports.findByAction = function(req, res) {
    PendingReport.findByAction(req.params.Action, function(err, leave) {
        if (err)
        res.send(err);
        res.json(leave);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        PendingReport.update(req.params.PendingReportID , new PendingReport(req.body), function(err, leave) {
            if (err)
            res.send(err);
            res.json({ leave : leave, error:false, message: 'leaves successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    PendingReport.delete( req.params.PendingReportID , function(err, employee) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Employee successfully deleted' });
  });
};