module.exports = mongoose => {
  let schema = mongoose.Schema(
    {
      label: { type: String, required: true },
      value: { type: String, required: true }
    }
  )

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })

  const Department = mongoose.model("department", schema)
  return Department
}