'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
var Designation = function(designation){
    this.designation_name     = designation.designation_name;
    this.employee_id      = designation.employee_id;
    this.company_id          = designation.company_id;
    this.mail_alias          = designation.mail_alias;
    this.added_by   = designation.added_by;
    this.modified_by    = designation.modified_by;
    this.status         = designation.status ? designation.status : 1;
    this.added_time     = new Date();
    this.modified_time     = new Date();
};

Designation.create = function (designation, result) {  

    dbConn.query("INSERT INTO designation set ?", designation, 
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
         
Designation.findById = function (id, result) {
    dbConn.query("Select * from designation where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Designation.findAll = function (result) {
    dbConn.query("Select * from designation", function (err, res) {
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
Designation.update = function(id, designation, result){
  dbConn.query
  ("UPDATE designation SET designation_name=?,mail_alias=? WHERE id = ?", 
  [designation.designation_name,designation.mail_alias ,id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Designation.delete = function(id, result){
     dbConn.query("DELETE FROM designation WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Designation;