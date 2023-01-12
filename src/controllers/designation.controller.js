'use strict';

const Designation = require('../models/designation.model');

exports.findAll = function(req, res) {
    Designation.findAll(function(err, project) {
    console.log('---Designation controller---');
    console.log('Project Request', req)
    if (err)
    res.send(err);
    console.log('res', project);
    res.send(project);
  });
};


exports.create = function(req, res) {
    const new_designation = new Designation(req.body);
    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Designation.create(new_designation,  function(err, designation) {
            if (err)
            res.send(err);
            res.json({designation_id: designation, error:false,message:"Designation added successfully!",data:designation});
        });
    }
};


exports.findById = function(req, res) {
    Designation.findById(req.params.id, function(err, designation) {
        if (err)
        res.send(err);
        res.json(designation);
    });
};


// exports.update = function(req, res) {
//     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//         res.status(400).send({ error:true, message: 'Please provide all required field' });
//     }else{
//         Designation.update(req.params.id, new Project(req.body), function(err, designation) {
//             if (err)
//             res.send(err);
//             res.json({ designation: designation,error:false, message: 'Designation successfully updated' });
//         });
//     }
  
// };

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Designation.update(req.params.id, new Designation(req.body), function(err, designation) {
            if (err)
            res.send(err);
            res.json({ designation : designation, error:false, message: 'Designation successfully updated' });
        });
    }
  
};

exports.delete = function(req, res) {
  Designation.delete( req.params.id, function(err, designation) {
    if (err)
    res.send(err);
    res.json({ designation:designation,error:false, message: 'Designation successfully deleted' });
  });
};