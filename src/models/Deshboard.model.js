birthday = function (newLeaves, result) {    
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

leaves = function (newLeaves, result) {    
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


newHire = function (newLeaves, result) {    
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

knowledgeCenter = function (newLeaves, result) {    
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

approvalForRequests = function (newLeaves, result) {    
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


upcomingHolidays = function (newLeaves, result) {    
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



timesheet = function (newLeaves, result) {    
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




