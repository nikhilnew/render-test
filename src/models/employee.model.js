'user strict';
var dbConn = require('./../../config/db.config');

//Employee object create
var Employee = function (employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    //this.experience     = employee.experience;
    this.official_email = employee.official_email;
    this.source_of_hire = employee.source_of_hire;
    this.tentative_joining_date = employee.tentative_joining_date;
    this.skill_set = employee.skill_set;
    //this.occupation = employee.occupation;
    this.highest_qualification = employee.highest_qualification;
    //this.currently_work_here = employee.currently_work_here;
    this.additional_information = employee.additional_information;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
};

/*con.query("INSERT INTO TransactionDescription SET ? ON DUPLICATE KEY UPDATE Description= VALUES(Description)", trandesc, function(err, res) {
    if (err) throw err;
    // res.insertId from above query as second query parameter
    con.query("INSERT INTO Transaction SET ? ", res.insertId, function(err, res) {
      if (err) throw err;
    });
  }); */
Employee.create = function (newEmp, education, experience, address, docs, result) {
    let educationValues = [];
    let experienceValues = [];
    let addressValues = [];
    let docsValues = [];

    for (let i = 0; i < education.length; i++) {
        educationValues.push([
            education[i].institute_name,
            education[i].degree,
            education[i].date_of_completion,
            education[i].field_of_study,
            newEmp.email
        ])
    }

    for (let i = 0; i < experience.length; i++) {
        experienceValues.push([
            experience[i].occupation,
            experience[i].company,
            experience[i].summary,
            newEmp.email,

            experience[i].currently_work_here])
    }

    for (let i = 0; i < address.length; i++) {
        addressValues.push([
            address[i].country,
            address[i].state,
            address[i].city,
            address[i].pin_code,
            address[i].street_address,
            newEmp.email,
            address[i].address

        ])
    }
    for (let i = 0; i < docs.length; i++) {
        docsValues.push([
            // docs[i].pan_card, 
            // docs[i].addhar_card , 
            // docs[i].driving_license, 
            // docs[i].passport,
            docs[i].id_type,
            docs[i].id_number,
            newEmp.email
        ])
    }
    dbConn.query("INSERT INTO employees set ?", newEmp,
        function (err, res) {
            if (err)
                throw err;
            console.log("EMP of records inserted: " + res.affectedRows);

            //dbConn.query("INSERT INTO education set ?", [educationValues], 
            dbConn.query("INSERT INTO education VALUES ?", [educationValues],
                function (err, res) {
                    if (err) throw err;
                    console.log("Education of records inserted: " + res.affectedRows);

                    dbConn.query("INSERT INTO experience VALUES ?", [experienceValues],
                        function (err, res) {
                            if (err)
                                throw err;
                            console.log("exp of records inserted: " + res.affectedRows);
                            //else 

                        });
                    dbConn.query("INSERT INTO employee_address VALUES ?", [addressValues],
                        function (err, res) {
                            if (err) throw err;
                            console.log("address of records inserted: " + res.affectedRows);

                            dbConn.query("INSERT INTO employee_documents VALUES ?", [docsValues],
                                function (err, res) {
                                    if (err) throw err;
                                    console.log("docs of records inserted: " + res.affectedRows);
                                    //dbConn.query("INSERT INTO experience set ?", [experienceValues], 
                                });
                        });
                });
            result(null, res.insertId);
        });
    //  result(null, res.insertId);
};




Employee.findById = function (id, result) {
    dbConn.query("Select * from employees where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Employee.findAll = function (result) {
    dbConn.query("Select * from employees", function (err, res) {
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
Employee.update = function (id, employee, result) {
    dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=?, experience=?, WHERE id = ?", [employee.first_name, employee.last_name, employee.email, employee.phone, employee.organization, employee.designation, employee.salary, employee.experience, employee.additional_information, employee.currently_work_here, employee.designation, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Employee.delete = function (id, result) {
    dbConn.query("DELETE FROM employees WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};

module.exports = Employee;