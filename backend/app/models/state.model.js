module.exports = mongoose => {
  let schema = mongoose.Schema(
    {
      label: { type: String, required: true },
      value: { type: String, required: true }
    }
  )

  const State = mongoose.model("state", schema)
  return State
}