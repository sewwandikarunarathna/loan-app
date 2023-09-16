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
                status:{
                    type: Boolean,
                    default: false
                }
            },
            {timestamps: true}
        
    );

    
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const LoanRequest = mongoose.model("LoanRequest", schema);
    return LoanRequest;
};