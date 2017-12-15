const _ = console.log

export const zaloHook = async (req, res) => {
  const eventInfo = req.query
  _("[eventInfo]", eventInfo)
  res.status(200).send({ msg: "Event sent" })
}
