'user strict';
var dbConn = require('./../../config/db.config');

// Documents object create
var Documents = function(doc){
    this.name     = doc.name;
    this.type      = doc.type;
    this.description  = doc.description;
    this.size          = doc.size;
    this.updated_by   = doc.updated_by;
    this.updated_at    = new Date();
};

Documents.findAll = function (result) {
    dbConn.query("Select * from Documents", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
           console.log('Documents : ', res); 
            result(null, res);
        }
    });  
};


Documents.findById = function (email, result) {
    dbConn.query("Select * from Documents where email = ? ORDER BY created_at DESC LIMIT 2", email, function (err, res) {             
        if(err) {
            console.log("error: ", err);
           // result(err, null);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });   
};

Documents.delete = function(id, result){
    dbConn.query("DELETE FROM Documents WHERE id = ?", [id], function (err, res) {
       if(err) {
           console.log("error: ", err);
           result(null, err);
       }
       else{
           result(null, res);
       }
   }); 
};



module.exports= Documents;
