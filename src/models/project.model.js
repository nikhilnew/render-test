'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
var Project = function(project){
    this.project_owner     = project.project_owner;
    this.client      = project.client;
    this.project          = project.project;
    this.team_member          = project.team_member;
    this.role_id   = project.role_id;
    this.department_id    = project.department_id;
    this.status         = project.status ? project.status : 1;
    this.created_at     = new Date();
    this.updated_at     = new Date();
};

Project.create = function (newProject, result) {  

    dbConn.query("INSERT INTO project set ?", newProject, 
    function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res.insertId);
            //result(null, res);
            
        }
    });   
};
         
Project.findById = function (id, result) {
    dbConn.query("Select * from project where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Project.findAll = function (result) {
    dbConn.query("Select * from project", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('project : ', res);  
            result(null, res);
        }
    });   
};
Project.update = function(id, project, result){
  dbConn.query
  ("UPDATE project SET project_owner=?,client=?,project=? , team_member=? WHERE id = ?", 
  [project.project_owner,project.client, 
    project.project, 
    project.team_member,id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Project.delete = function(id, result){
     dbConn.query("DELETE FROM project WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Project;