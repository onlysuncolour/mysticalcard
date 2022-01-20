const {httpPost} = require('../utils/httpPost')
const {host, path, Cookie, data, round = 1} = require('../basicOptions.json')

const datas = Array.from({length: round}).fill(data);

const options = {
  host: host,
  path: path,
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
const run = () => {
  const promises = []
  datas.forEach((d, i) => {
    options.headers['Content-Length'] = Buffer.byteLength(d)
    promises.push(httpPost(options, d, i))
  })
  // Promise.all(promises).then((resps) => {
  //   if (resps.every(r => r < 1000)) {
  //     return;
  //   } 
  //   run()
  // })
}

run();