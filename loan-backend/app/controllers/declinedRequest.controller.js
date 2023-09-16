const db = require("../models");
const DeclinedRequest = db.declinedRequests;

//create and save a approved request
exports.createDeclineRequest = (req, res) => {
    //validate request
    if(!(req.body.userId && req.body.loanId && req.body.loanRequestId)){
        res.status(400).send("content cannot be empty");
        return;
    }

    //create a approved request
    const declinedRequest = new DeclinedRequest({
        userId : req.body.userId,
        loanId : req.body.loanId,
        loanRequestId : req.body.loanRequestId
        
    });

    //save declined request in the database
    DeclinedRequest
    .create(declinedRequest)
    .then(data =>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "error while creating decline request"
        });
    });

};

//retrieve all declined loan requests from database to a table
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