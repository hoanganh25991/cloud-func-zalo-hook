import { checkMsgEvent } from "../checkMsgEvent"
import msgEvent1 from "./msgEvent.json"
import msgEvent2 from "./msgEvent.2.json"

const _ = console.log
const PASS = `\x1b[42m[PASS]\x1b[0m`
const FAIL = `\x1b[41m[FAIL]\x1b[0m`

_("")
;(async () => {
  const TEST_CASE = "Check Msg Event"
  let pass = true

  try {
    // Just silenece send it out
    pass = pass && checkMsgEvent(msgEvent1)
    pass = pass && checkMsgEvent(msgEvent2)
  } catch (err) {
    _(err)
    pass = false
  } finally {
    pass ? _(`${PASS} ${TEST_CASE}`) : _(`${FAIL} ${TEST_CASE}`)
  }
})()
