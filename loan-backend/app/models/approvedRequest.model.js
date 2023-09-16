module.exports = mongoose => {
    var schema = mongoose.Schema(
    
            {
              userId : {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
              },
              loanId : {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "Loan"
              },
              loanRequestId : {
                type: mongoose.Schema.Types.ObjectId,
                ref: "LoanRequest"
            }
            },
            {timestamps: true}
        
    );

    
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const ApprovedRequest = mongoose.model("ApprovedRequest", schema);
    return ApprovedRequest;
};