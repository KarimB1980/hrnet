module.exports = mongoose => {
  let schema = mongoose.Schema(
    {
      label: { type: String, required: true },
      value: { type: String, required: true }
    }
  )

  const Department = mongoose.model("department", schema)
  return Department
}