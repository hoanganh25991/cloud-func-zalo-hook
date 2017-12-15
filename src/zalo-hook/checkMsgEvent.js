// {
//   fromuid: '4024584047813887864',
//   phone: '',
//   appid: '',
//   msgid: 'e357827f8204ad5af415',
//   event: 'sendmsg',
//   pageid: '2314288753502995654',
//   message: 'Shop oi, zalo hook',
//   oaid: '2314288753502995654',
//   mac: 'f6d787c47891a505390b630f465b2e74686254ccbf7a270305871baa9a030b2b',
//   timestamp: '1513307209621'
// }
export const checkMsgEvent = eventInfo => {
  const { fromuid, oaid, message, msgid, event: type } = eventInfo
  const isMsgEvent = fromuid && oaid && message && msgid && type
  return isMsgEvent
}
