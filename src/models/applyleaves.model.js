const bigInt = require("big-integer");
var dbConn = require('./../../config/db.config');

//Leaves object create
var ApplyLeaves = function(leaves){
    this.employee_id     = leaves.employee_id;
    this.leave_type      = leaves.leave_type;
    this.email          = leaves.email;
    this.date_from          = leaves.date_from;
    this.date_to         = leaves.date_to;
    this.reporting_manager   = leaves.reporting_manager;
    this.reason_for_leave    = leaves.reason_for_leave;
    this.additional_email = leaves.additional_email;
    this.Time_Added     = new Date();
   // this.updated_at     = new Date();
    
    
};
ApplyLeaves.create = function (newLeaves, result) {    
    dbConn.query("INSERT INTO leaves set ?", newLeaves, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};

ApplyLeaves.findById = function (ApplyLeaveId, result) {
    dbConn.query("Select * from leaves where ApplyLeaveId = ? ", ApplyLeaveId, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

ApplyLeaves.findAll = function (result) {
    dbConn.query("Select * from leaves", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Leaves : ', res);  
            result(null, res);
        }
    });   
};

ApplyLeaves.update = function(ApplyLeaveId, leave, result){
   // const idint = bigInt(id).value;
  dbConn.query("UPDATE leaves SET employee_id=?,leave_type=?,email=?,date_from=?,date_to=?,reporting_manager=?,reason_for_leave=?, additional_email=?, WHERE ApplyLeaveId =?",
  [leave.employee_id,leave.leave_type,leave.email,leave.date_from,leave.date_to,leave.reporting_manager,leave.reason_for_leave, leave.additional_email,ApplyLeaveId], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};

ApplyLeaves.delete = function(ApplyLeaveId, result){
     dbConn.query("DELETE FROM leaves WHERE ApplyLeaveId = ?", [ApplyLeaveId], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= ApplyLeaves;