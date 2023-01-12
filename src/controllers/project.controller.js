'use strict';

const Project = require('../models/project.model');

exports.findAll = function(req, res) {
    Project.findAll(function(err, project) {
    console.log('---Project controller---');
    console.log('Project Request', req)
    if (err)
    res.send(err);
    console.log('res', project);
    res.send(project);
  });
};


exports.create = function(req, res) {
    const new_project = new Project(req.body);
    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Project.create(new_project,  function(err, project) {
            if (err)
            res.send(err);
            res.json({project_id: project, error:false,message:"Project added successfully!",data:project});
        });
    }
};


exports.findById = function(req, res) {
    Project.findById(req.params.id, function(err, project) {
        if (err)
        res.send(err);
        res.json(project);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Project.update(req.params.id, new Project(req.body), function(err, project) {
            if (err)
            res.send(err);
            res.json({ project: project,error:false, message: 'Project successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
  Project.delete( req.params.id, function(err, project) {
    if (err)
    res.send(err);
    res.json({ project:project,error:false, message: 'Project successfully deleted' });
  });
};