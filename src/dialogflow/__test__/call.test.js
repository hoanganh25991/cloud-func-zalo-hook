import { call } from "../call"
import queryObj from "./queryObj.json"
import queryObj2 from "./queryObj.2.json"
import queryObj3 from "./queryObj.3.json"

const _ = console.log
const PASS = `\x1b[42m[PASS]\x1b[0m`
const FAIL = `\x1b[41m[FAIL]\x1b[0m`

_("")
;(async () => {
  const TEST_CASE = "Call dialogflow query"
  let pass = true

  try {
    const { data, err } = await call(queryObj)
    _("data, err", data, err)
    if (err) return (pass = false)

    const { data: data2, err: err2 } = await call(queryObj2)
    _("data2, err2", data2, err2)
    if (err2) return (pass = false)

    const { data: data3, err: err3 } = await call(queryObj3)
    _("data3, err3", data3, err3)
    if (err3) return (pass = false)
  } catch (err) {
    _(err)
    pass = false
  } finally {
    pass ? _(`${PASS} ${TEST_CASE}`) : _(`${FAIL} ${TEST_CASE}`)
  }
})()
