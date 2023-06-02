module.exports = mongoose => {
  let schema = mongoose.Schema(
    {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      dateOfBirth: { type: String, required: true },
      startDate: { type: String, required: true },
      department: { type: String, required: true },
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipCode: { type: Number, required: true }
    }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Employee = mongoose.model("employee", schema);
  return Employee;
};