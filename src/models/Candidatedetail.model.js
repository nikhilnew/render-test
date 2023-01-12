var dbConn = require('./../../config/db.config');




findById = function (email, result) {
    dbConn.query("SELECT emp.*,edu.*,exp.*,emp_add.* FROM employees emp INNER JOIN education AS edu ON emp.email = edu.email INNER JOIN experience exp ON exp.email = edu.email inner join employee_address emp_add on exp.email = emp_add.email where emp.email = ? limit 1", email, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};


findAll = function (result) {
    dbConn.query("SELECT emp.*,edu.*,exp.*, emp_add.* FROM employees emp INNER JOIN education AS edu ON emp.email = edu.email INNER JOIN experience exp ON exp.email = edu.email inner join employee_address emp_add on exp.email = emp_add.email ", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('employees : ', res);
            result(null, res);
        }
    });
};

module.exports = {findById, findAll };