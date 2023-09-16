const db = require("../models");
const ApprovedRequest = db.approvedRequests;

//create and save a approved request
exports.createApproveRequest = (req, res) => {
    //validate request
    if(!(req.body.userId && req.body.loanId && req.body.loanRequestId)){
        res.status(400).send("content cannot be empty");
        return;
    }

    //create a approved request
    const approvedRequest = new ApprovedRequest({
        userId : req.body.userId,
        loanId : req.body.loanId,
        loanRequestId : req.body.loanRequestId
        
    });

    //save approved request in the database
    ApprovedRequest
    .create(approvedRequest)
    .then(data =>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "error while creating approve request"
        });
    });

};

//retrieve all loan requests from database to a table
// exports.findAllRequests = (req, res) =>{
    
//     LoanRequest.find()
//     .populate("userId", {name:1})
//     .populate("loanId")
//     .then(data =>{
//         res.send(data);
//     })
//     .catch(err=>{
//         res.status(500).send({
//             message: err.message || "error while retrieving loan requests"
//         });
//     });


    
// };