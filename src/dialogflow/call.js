import { tinyAxios as axios, extractData } from "./common"
import uuidv1 from "uuid/v1"

export const ENDPOINT = "https://api.dialogflow.com/v1/query?v=20170712"

export const call = async ({ query, context, zaloEvent }) => {
  const postData = {
    query,
    lang: "en",
    sessionId: uuidv1(),
    timezone: "Asia/Bangkok",
    originalRequest: { zaloEvent },
    contexts: [context]
  }

  const res = await axios.post(ENDPOINT, postData)
  const { data, err } = extractData(res)
  return { data, err }
}
