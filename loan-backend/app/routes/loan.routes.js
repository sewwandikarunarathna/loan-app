module.exports = (app) =>{
 const loans = require("../controllers/loan.controller.js");

 var router = require("express").Router();

  // Create a new Loan
  router.post("/", loans.create);

  // Retrieve all Loans
  router.get("/", loans.findAll);


  // Retrieve a single Loan with id
  router.get("/:id", loans.findOne);

  // Update a Loan with id
  router.put("/:id", loans.update);

  // Delete a Loan with id
  router.delete("/:id", loans.delete);

  // delete all Loans
  router.delete("/", loans.deleteAll);

  app.use('/api/loans', router);
};