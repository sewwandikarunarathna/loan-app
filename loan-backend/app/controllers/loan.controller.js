const db = require("../models");
const Loan = db.loans;

//create and save a loan
exports.create = (req, res) => {
    //validate request
    if(!req.body.type){
        res.status(400).send("content cannot be empty");
        return;
    }

    //create a loan
    const loan = new Loan({
        type: req.body.type,
        amount: req.body.amount,
        interest: req.body.interest,
        duration: req.body.duration
    });

    //save loan in the database
    loan
    .save(loan)
    .then(data =>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message | "error while creating loan"
        });
    });

};

//retrieve all loans from database
exports.findAll = (req, res) =>{
    const type = req.query.type; //to get query string from the Request and consider it as condition
    var condition = type ? {type: {$regex: new RegExp(type), $options: "i"}} : {};

    Loan.find(condition)
    .then(data =>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message | "error while retrieving loans"
        });
    });


    
};

//find a single loan with id
exports.findOne = (req,res) =>{
    const id =req.params.id;

    Loan.findById(id)
    .then(data=>{
        if (!data)
        res.status(404).send({ message: "Not found Loan with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: "Error retrieving Loan with id=" + id });
    });
};

//update a loan by id in the request
exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: "Data to update cannot be empty!"
        });
    }

    const id= req.params.id;

    Loan.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Loan with id=${id}. Maybe Loan was not found!`
          });
        } else res.send({ message: "Loan was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Loan with id=" + id
        });
      });
};

//delete a loan with a specified id in the request
exports.delete = (req, res) =>{
    const id= req.params.id;

    Loan.findByIdAndRemove(id)
    .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Loan with id=${id}. Maybe Loan was not found!`
          });
        } else res.send({ message: "Loan was deleted successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error deleting Loan with id=" + id
        });
      });
};

// Delete all loans from the database.
exports.deleteAll = (req, res) => {
  Loan.DeleteMany({})
  .then(data =>{
      res.send({
          message: `${data.deletedCount} Loans were deleted successfully!`
      });
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message | "error ocured while removing all loans"
        });
    });

};
