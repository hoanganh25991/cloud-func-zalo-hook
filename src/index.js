import { call } from "./dialogflow/call"
const _ = console.log

export const ORDER_EVENT = "orderEvent$"

export const zaloHook = async (req, res) => {
  const eventInfo = req.query
  _("[eventInfo]", eventInfo)

  // Only handle 2 type of event
  // message
  // order
  const { fromuid, oaid, message, order, event: eventName } = eventInfo
  const shouldHandle = message || order
  if (!shouldHandle) {
    res.send({ msg: "Obmit" })
    return
  }

  const query = order ? ORDER_EVENT : message

  const context = {
    name: "generic",
    paramaters: {
      fromuid,
      oaid,
      message,
      order,
      eventName,
      platform: "zalo"
    }
  }

  try {
    await call({ query, context, zaloEvent: eventInfo })
  } catch (err) {
    _("[call ERR]", err)
    res.send({ msg: "Send event fail" })
    return
  }

  res.send({ msg: "Event sent" })
}
