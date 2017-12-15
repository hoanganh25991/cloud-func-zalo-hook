// {
//   fromuid: '8771322530203347483',
//   appid: '',
//   event: 'order',
//   oaid: '2314288753502995654',
//   mac: '06915e6d86888217841bfa3e77b91ac56966a996fcc762dcdf3f1b1149147a9e',
//   timestamp: '1513307650467',
//   order: '{"updatedTime":1513307650445,"productId":"5356e463c2262b787237","deliverAddress":"A13 chung cu bo cong an","userId":8771322530203347483,"customerName":"Ma No","numItem":1,"productName":"Gà lắc phô mai","customerPhone":841287590963,"productImage":"https:\\/\\/store-photo-s500.zdn.vn\\/fc80ddf64eb1a7effea0.jpg?version=1","price":25000,"deliverCity":"Hồ Chí Minh","paymentMethod":1,"createdTime":1513096365725,"orderCode":"#8ed32","id":"6152d755e3100a4e5301","oaId":2314288753502995654,"status":2}'
// }
export const checkOrderEvent = eventInfo => {
  const { fromuid, oaid, order, event: type } = eventInfo
  const isOrderEvent = fromuid && oaid && order && type
  return isOrderEvent
}
