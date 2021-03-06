import { tinyAxios as axios, extractData } from "./common"
import uuidv1 from "uuid/v1"

const _ = console.log

export const ENDPOINT = "https://api.dialogflow.com/v1/query?v=20170712"

export const call = async ({ query, context, zaloEvent }) => {
  const contexts = context ? [context] : null
  const postData = {
    query,
    contexts,
    lang: "en",
    sessionId: uuidv1(),
    timezone: "Asia/Bangkok",
    originalRequest: { zaloEvent }
  }

  _("[posData]", postData)

  const res = await axios.post(ENDPOINT, postData)
  const { data, err } = extractData(res)
  return { data, err }
}
