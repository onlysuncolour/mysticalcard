const {httpPost} = require('../utils/httpPost');
const {
  host, 
  Cookie,
  onebyonePath,
  onebyoneData,
  onebyoneRound = 1
} = require('../basicOptions.json')
const data = onebyoneData;

const options = {
  host: host,
  path: onebyonePath,
  method: 'POST',
  headers: {
    "Cookie": `_sid=${Cookie}`,
    "User-Agent": "UnityPlayer/2019.4.13f1 (UnityWebRequest/1.0, libcurl/7.52.0-DEV)",
    "Accept": "*/*",
    "Accept-Encoding": "deflate, gzip",
    "Content-Type": "application/x-www-form-urlencoded",
    "X-Unity-Version": "2019.4.13f1",
    "Connection": "keep-alive",
    // 'Content-Length': Buffer.byteLength(data)
  }
}

let n = 0

const runRound = () => {
  n++
  if (n > onebyoneRound) {
    return
  }
  setTimeout(
    () => httpPost(options, data, n)
      .then(res => {
        if (res < 100) {
          return;
        }
        runRound()
      }, runRound), 200
  )
}

runRound()
