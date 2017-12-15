import dotenv from "dotenv"
import axios from "axios"

dotenv.config()
const { DIALOGFLOW_TOKEN: token } = process.env
const _ = console.log

export const tinyAxios = axios.create({
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  },
  validateStatus(status) {
    return status !== 500
  }
})

export const extractData = res => {
  const { status, data } = res
  if (status !== 200) {
    _("[res data.status]", data.status)
    return { err: data }
  }

  return { data }
}
