var dbConn = require('./../../config/db.config');


var DepartmentDetails = function(Details){
    
   
    this.DepartmentName     = Details.DepartmentName;
    this.MailAlias      = Details.MailAlias;
    this.DepartmentLead          = Details.DepartmentLead;
    this.ParentDepartment          = Details.ParentDepartment;
    this.createdDate     = new Date();
    
};

DepartmentDetails.create = function (newLeaves, result) {    
    dbConn.query("INSERT INTO tbl_departmentdetails set ?", newLeaves, function (err, res) {
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


DepartmentDetails.findAll = function (result) {
    dbConn.query("Select * from tbl_departmentdetails", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Details : ', res);
            result(null, res);
        }
    });
};



DepartmentDetails.delete = function (departmentId, result) {
    dbConn.query("DELETE FROM tbl_departmentdetails WHERE departmentId = ?", [departmentId], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};


module.exports= DepartmentDetails;
