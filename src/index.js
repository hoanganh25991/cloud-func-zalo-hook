const _ = console.log

export const zaloHook = async (req, res) => {
  const eventInfo = req.query
  _("[req]", req)
  _("[eventInfo]", eventInfo)
  return null
}
