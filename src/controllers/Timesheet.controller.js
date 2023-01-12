const TimeSheet = require('../models/TimeSheet.model');

exports.findAll = function (req, res) {
    TimeSheet.findAll(function (err, leaves) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', leaves);
        res.send(leaves);
    });
};


exports.apply = function (req, res) {
    const new_leaves = new TimeSheet(req.body);

    //handles null error 
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        TimeSheet.create(new_leaves, function (err, leave) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "leaves applied successfully!", data: leave });
        });
    }
};


exports.findById = function (req, res) {
    TimeSheet.findById(req.params.TimeSheetId, function (err, leave) {
        if (err)
            res.send(err);
        res.json(leave);
    });
};


exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        TimeSheet.update(req.params.TimeSheetId, new TimeSheet(req.body), function (err, leave) {
            if (err)
                res.send(err);
            res.json({ leave: leave, error: false, message: 'leaves successfully updated' });
        });
    }

};


exports.delete = function (req, res) {
    TimeSheet.delete(req.params.TimeSheetId, function (err, employee) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Employee successfully deleted' });
    });
};


exports.month = function (req, res) {
    TimeSheet.month(req.params.employeeId, function (err, leave) {
        if (err)
            res.send(err);
        res.json(leave[0]);
    });
};

