import fs from "fs"
import cpr from "child_process"

const _ = console.log
const args = process.argv.slice(2)

const run = ({ args }) => {
  _("[INFO] Build")
  _(cpr.execSync(`babel src --out-dir=dist`).toString())

  _("[INFO] Zip")
  _(cpr.execSync(`7z a zalo-hook.zip dist index.js package.json .env`).toString())
}

try {
  run({ args })
} catch (err) {
  _("[run ERR]", err)
}
