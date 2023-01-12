var dbConn = require('./../../config/db.config');

//balance object create
var customizebalance = function(balance){
    this.Employee     = balance.Employee;
    this.createdDate     = new Date();
  
    
};
customizebalance.create = function (newbalance, result) {    
    dbConn.query("INSERT INTO tbl_customizebalance set ?", newbalance, function (err, res) {
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

customizebalance.findById = function (CustomizeBalanceID, result) {
    dbConn.query("Select * from tbl_customizebalance where CustomizeBalanceID = ? ", CustomizeBalanceID, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

customizebalance.findAll = function (result) {
    dbConn.query("Select * from tbl_customizebalance", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('balance : ', res);  
            result(null, res);
        }
    });   
};

customizebalance.update = function(CustomizeBalanceID, balance, result){
 
  dbConn.query("UPDATE tbl_customizebalance SET Employee=?, WHERE CustomizeBalanceID =?",
  [balance.Employee,CustomizeBalanceID], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};

customizebalance.delete = function(CustomizeBalanceID, result){
     dbConn.query("DELETE FROM tbl_customizebalance WHERE CustomizeBalanceID = ?", [CustomizeBalanceID], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= customizebalance;



// const dbPool = require('../../config/db.config');

// const getAllUsers = () => {
//     const SQLQuery = 'SELECT * FROM tbl_customizebalance';

//     return dbPool.execute(SQLQuery);
// }


// const getbyid = (CustomizeBalanceID) => {

//     const SQLQuery = `SELECT * FROM tbl_customizebalance  WHERE CustomizeBalanceID = ${CustomizeBalanceID}`;

//     return dbPool.execute(SQLQuery);
// }


// const createNewUser = (body) => {
//     const SQLQuery = `INSERT INTO tbl_customizebalance (CompanyID,Employee) 
//                         VALUES ('${body.CompanyID}','${body.Employee}')`;

//     return dbPool.execute(SQLQuery);
// }

// const updateUser = (body, idUser) => {
//     const SQLQuery = `  UPDATE users 
//                         SET name='${body.name}', email='${body.email}', address='${body.address}' 
//                         WHERE id=${idUser}`;

//     return dbPool.execute(SQLQuery);
// }

// const deleteUser = (CustomizeBalanceID) => {
//     const SQLQuery = `DELETE FROM tbl_customizebalance  WHERE CustomizeBalanceID=${CustomizeBalanceID}`;

//     return dbPool.execute(SQLQuery);
// }

// module.exports = {
//     getAllUsers,
//     createNewUser,
//     updateUser,
//     deleteUser,
//     getbyid
// }