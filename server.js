const express = require('express');
const multer = require("multer");
const bodyParser = require('body-parser');
// const doenv = require("dotenv");
const path = require("path");
const hbs = require("hbs");
const cookieParser = require("cookie-parser");
const dbConn = require("./config/db.config");

require("dotenv").config();

const nodemailer = require("nodemailer");


const routes = require('./src/routes/routes');




// create express app
const app = express();
app.set('view engine', 'ejs');



// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))




// parse requests of content-type - application/json
app.use(bodyParser.json())
// const Pending_report = require('./src/routes/PendingReport.routes')














// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require employee routes
const employeeRoutes = require('./src/routes/employee.routes');

const attachmentRoutes = require('./src/routes/attachment.routes');

const noteRoutes = require('./src/routes/notes.routes');

const applyLeaveRoutes = require('./src/routes/applyleaves.routes');

const companyholidaysRoutes = require('./src/routes/companyholidays.routes');

const authRoutes = require('./src/routes/auth.routes');

const departmentdetailsRoutes = require('./src/routes/departmentdetails.routes');

const designationdetailsRoutes = require('./src/routes/designationdetails.routes');

const customizebalanceRoutes = require('./src/routes/customizebalance.routes');

const configurepayperiodRoutes = require('./src/routes/configurepayperiod.routes');

const addscheduleRoutes = require('./src/routes/addschedule.routes');

const AddExitDetailsRoutes = require('./src/routes/AddExitDetails.routes');

const addleaveRoutes = require('./src/routes/Addleave.routes');

const PendingReportRoutes = require('./src/routes/PendingReport.routes');

const CandidatedetailControllerRoutes = require('./src/routes/Candidatedetail.routes');

const AddHolidayControllerRoutes = require('./src/routes/AddHoliday.routes');

const TimesheetRoutes = require('./src/routes/Timesheet.routes');

const projectRoutes = require('./src/routes/project.routes');

const knowledgeCenterRoutes = require('./src/routes/knowledgeCenter.routes');

const announcementsRoutes = require('./src/routes/Announcements.routes');

const designationRoutes = require('./src/routes/designation.routes');

//////////////////////

// app.use('/tbl_employee_info', tbl_employee_infoRoutes);


// app.use('/api/leave_status', Pending_report);
//////////////////////////////////


// using as middleware
app.use('/api/v1/employees', employeeRoutes);

app.use('/api/v1/project', projectRoutes);

app.use('/api/v1/file', attachmentRoutes);

app.use('/api/v1/notes', noteRoutes);

app.use('/api/v1/leaves', applyLeaveRoutes);

app.use('/api/v1/companyHoliday', companyholidaysRoutes);

app.use('/api/v1/auth', authRoutes);

app.use('/api/v1/details', departmentdetailsRoutes);

app.use('/api/v1/detail', designationdetailsRoutes);

app.use('/api/v1/balance', customizebalanceRoutes);

app.use('/api/v1/period', configurepayperiodRoutes);

app.use('/api/v1/schedule', addscheduleRoutes);

app.use('/api/v1/Details', AddExitDetailsRoutes);

app.use('/api/v1/leave', addleaveRoutes);

app.use('/api/v1/Pending', PendingReportRoutes);

app.use('/api/v1/Candidate', CandidatedetailControllerRoutes);

app.use('/api/v1/AddHoliday', AddHolidayControllerRoutes);

app.use('/api/v1/Timesheet', TimesheetRoutes);

app.use('/api/v1/knowledgeCenter', knowledgeCenterRoutes);

app.use('/api/v1/announcement', announcementsRoutes);

app.use('/api/v1/designation', designationRoutes); 




app.use((err, req, res, next) => {
  // console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});
app.use(routes);
// listen for requests

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
  next();
});



////////////////////////contact-us////////////////////////////////



app.use(bodyParser.json());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/send_email", function (req, response) {
  var guser = "mohitbhiranimohit@gmail.com";
  var from = guser;

  console.log(req.body);
  let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mohitbhiranimohit@gmail.com",
      pass: "yixhunqgerjzpnyz",
    },
  });
  const body = req.body;
  const bdyPrty = [body.Email, body.Message];
  var getQry =
    "INSERT INTO hrms.tbl_contactus (Email,Message) VALUES(?)";
  dbConn.query(getQry, [bdyPrty], (err, result) => {
    // if (err) {
    //   throw err;
    // } else {
    //   console.log(" addded succesfully");

    //   res.send({
    //     message: "check users list",
    //   });
    // }

    const { to, subject, text } = req.body;
    var mailOptions = {
      from: "mohitbhiranimohit@gmail.com",
      to: to,
      subject: subject,
      text: `<${body.Email}> \n${body.Message}`,
    };

    transport.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log("mail has sent.");
      }
      res.send(info);
    });
  });
});

app.get("/", (req, resp) => {
  var getQry = "SELECT * FROM tbl_contactus";
  dbConn.query(getQry, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log("database connected");
      resp.send({
        message: "check users list",
        data: result,
      });
    }
  });
});

app.post("/contact", async (req, res, next) => {
  const body = req.body;
  const bdyPrty = [body.CompanyID, body.Email, body.Message];
  var getQry =
    "INSERT INTO hrms.tbl_contactus (Email,Message) VALUES(?)";
  dbConn.query(getQry, [bdyPrty], (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(" addded succesfully");

      res.send({
        message: "check users list",
      });
    }
  });
});


// new hire.........
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, `image-${Date.now()}` + path.extname(file.originalname));
  },
});
var upload = multer({ storage: storage });
app.use("/api/v1/newhire", express.static("./src/uploads"));
app.get("/api/v1/newhire", upload.single("image"), (req, resp) => {
  var getQry = "SELECT * FROM hrms.tbl_new_hire";
  // var getQry =
  // "SELECT * FROM (SELECT * FROM tbl_new_hire ORDER BY Employee_id DESC LIMIT 5) Var1 ORDER BY Employee_id ASC";
  dbConn.query(getQry, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log("database connected", result);

      resp.send({
        result

      });
    }
  });
});
app.post("/api/v1/newhire", upload.single("image"), (req, resp) => {
  const body = req.body;
  const file = req.file;
  const bdyPrty = [
    body.CompanyID,
    body.name,
    body.email,
    body.joiningDate,
    body.designation,
    file.filename,
  ];
  var getQry =
    "INSERT INTO hrms.tbl_new_hire(CompanyID, name, email, joiningDate, designation,image) VALUES(?)";
  dbConn.query(getQry, [bdyPrty], (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(" addded succesfully");
      resp.send({
        message: "check users list",
      });
    }
  });
});






app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
