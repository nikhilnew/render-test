const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const conn = require('./../../config/db.config').promise();
var nodemailer=require("nodemailer");
const express=require("express");
const app=express();
app.use(express.json());
exports.register = async(req,res,next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }

    try{

        // const [row] = await dbConn.execute(
          

            // "select 'Email'from `users` where `Email`=?",
        //     "select 'Email'from `invite_users` where `Email`=?",
        //     [req.body.Email]
        //   );

        // if (row.length > 0) {
        //     return res.status(201).json({
        //         message: "The E-mail already in use",
        //     });
        // }

        const hashPass = await bcrypt.hash(req.body.Password, 12);

       
        // const [rows] = await conn.execute('INSERT INTO `users`(`FirstName`,`LastName`,`Email`,`Password`)VALUES(?,?,?,?)',
        const [rows] = await conn.execute('INSERT INTO `invite_users`(`FirstName`,`LastName`,`Email`,`Password`)VALUES(?,?,?,?)',
        [
            //  req.body.InviteUserId,
           req.body.FirstName,
            req.body.LastName,
            req.body.Email,
            hashPass,
            // req.body.Password,
            // req.body.createdDate,
            // req.body.createdBy
            
       ]);

        if (rows.affectedRows === 1)
      {
                    //...............
            var transporter = nodemailer.createTransport({

                host: "smtp.gmail.com",
        
                port: 465,
        
                secure: true,
        
                requireTLS: true,
        
                auth: {
        
                //   user: "deependrajhariya@gmail.com",
        
                //   pass: "hdtbydueivagdhdu",
                
                   user: "ab308175@gmail.com",
        
                   pass: "avzpuhiwivqhsetb"

                 
        
                },
        
              });
        
        
              var mailOptions = {
        
                //  from: "deependrajhariya@gmail.com",
                 from:"ab308175@gmail.com",
               
                to: req.body.Email,
        
                subject: "Company Login Credentials",
        
                // html:"<h3>Hello:</h3> "+req.body.FirstName+"    "+req.body.LastName+" <br><br><h3>This is your Email id:</h3> "+req.body.Email+"<h1>Password is: </h1>"+req.body.Password
                // +"'<br><br><h1>please click on this link for completing your Pre-Onboarding Process:</h1>"+"http://welcomeemp.cylsys.com/"
                 
                html:"Hii"+" "+req.body.FirstName+","+"<br>"+

                "<br>This is a Invite details that has to be filled by you.<br>"+
                
                "<br>Please find the Login Credentials below for completing your Pre-Onboarding Process:<br>"+
                
                "<br>Display name:"+" "+ req.body.FirstName+"  "+"  "+req.body.LastName+ 
                "<br>Username:" +" "+ req.body.Email +
                "<br>Password:" +" "+req.body.Password+ "<br><br>"+
                
                "Login Url:"+" "+"http://angularhrms.cylsys.com"+"<br>"+
                
                "<br>Note: "+" Please let me know if you need any clarifications."+"<br>"+
                
                "<br>Thanks & Regards,<br>"+
                "Jagrati Thakur<br>"+
                "Team HR<br>"+
                "Cylsys Software Solutions Pvt. Ltd."
                
                
                
                
          
              };
        
        
              transporter.sendMail(mailOptions, function (error, info)
               {
        
                if (error)
                 {
        
                  console.log(error);
        
                } else 
                {
        
                  console.log("Email has been sent", info.response);
        
                }
        
              });

                  //................
            return res.status(201).json({
                message: "The user has been successfully inserted. and Email has been sent",
            });
        }
        
       }
       catch(err){
        next(err);
       }
    
}
