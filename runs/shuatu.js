const {httpPost} = require('../utils/httpPost')
const { tili } = require('./tili')
const {host, Cookie, shuatu_18_11, shuatuPath, shuatuRound, shuatuTotalRound = 0} = require('../basicOptions.json')


const datas = Array.from({length: shuatuRound}).fill(shuatu_18_11)

const options = {
  host: host,
  path: shuatuPath,
  method: 'POST',
  headers: {
    "Cookie": `_sid=${Cookie}`,
    "User-Agent": "UnityPlayer/2019.4.13f1 (UnityWebRequest/1.0, libcurl/7.52.0-DEV)",
    "Accept": "application/json",
    "Accept-Encoding": "deflate, gzip",
    "Content-Type": "application/x-www-form-urlencoded",
    "X-Unity-Version": "2019.4.13f1",
    // 'Content-Length': Buffer.byteLength(data)
  }
}
let n = 0
const run = () => {
  let t = 0
  const promises = []
  datas.forEach((d, i) => {
    n++
    options.headers['Content-Length'] = Buffer.byteLength(d)
    promises.push(httpPost(options, d, i, t++))
    console.log('n' ,n)
  })
  if (n > shuatuTotalRound) {
    return;
  }
  Promise.all(promises).then((resps) => {
    if (resps.every(r => r < 1000)) {
      if (shuatuTotalRound) {
        tili().then(run)
      }
      return;
    }
    run()
  })
}

run();