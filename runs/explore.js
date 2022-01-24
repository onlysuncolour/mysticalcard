const {httpPost} = require('../utils/httpPost')
const {host, Cookie, exploreRound = 1, explore_13_11, explorePath, explore_5_9, exploreHardPath} = require('../basicOptions.json')


const datas = Array.from({length: exploreRound}).fill(explore_5_9)

const options = {
  host: host,
  path: exploreHardPath,
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
  Promise.all(promises).then((resps) => {
    console.log(resps)
    if (resps.some(r => r == 143)) {
      console.log('没有体力啦')
      console.log('没有体力啦')
      console.log('没有体力啦')
      return;
    }
    if (resps.every(r => r > 400)) {
      console.log('打怪啦')
      return;
    }
    run()
  })
}

run();