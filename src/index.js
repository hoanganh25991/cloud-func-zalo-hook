import { call } from "./dialogflow/call"
const _ = console.log

export const ORDER_EVENT = "orderEvent$"

export const zaloHook = (req, res) => {
  const eventInfo = req.query
  _("[eventInfo]", eventInfo)

  // Only handle 2 type of event
  // message
  // order
  const { fromuid, oaid, message, order, event: eventName } = eventInfo
  const shouldHandle = message || order

  if (!shouldHandle) return _("[shouldHandle]", shouldHandle)

  const query = order ? ORDER_EVENT : message

  const context = {
    name: "zalo-event",
    parameters: {
      fromuid,
      oaid,
      message,
      order,
      eventName,
      platform: "zalo"
    }
  }

  _("[call] Sent to dialogflow")
  call({ query, context, zaloEvent: eventInfo })
  // return call({ query, context, zaloEvent: eventInfo })
  return null
}
