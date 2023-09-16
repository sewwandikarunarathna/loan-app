module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            userId: {
                type : mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            address: String,
            phoneNumber: String,
            nic: String
        }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });

      const Profile = mongoose.model("Profile", schema);
      return Profile;
};