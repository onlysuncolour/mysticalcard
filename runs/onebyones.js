const {httpPost} = require('../utils/httpPost');
const {
  host, 
  Cookie,
  onebyoneS_Path,
  onebyoneS_Data,
  onebyoneS_SingleRound = 1,
  onebyoneS_Round = 1
} = require('../basicOptions.json')

const datas = Array.from({length: onebyoneS_SingleRound}).fill(onebyoneS_Data);

const options = {
  host: host,
  path: onebyoneS_Path,
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
  if (n > onebyoneS_Round) {
    return
  }
  n++
  setTimeout(
    () => {
      const promises = []
      datas.forEach((d, i) => {
        options.headers['Content-Length'] = Buffer.byteLength(d)
        promises.push(httpPost(options, d, i))
      })
      Promise.allSettled(promises).then(res => {
        if (res.some(r => r > 0 && r < 100)) {
          return;
        }
        runRound()
      })
    }, 200
  )
}

runRound()
