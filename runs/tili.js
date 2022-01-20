const {httpPost} = require('../utils/httpPost')
const {host, Cookie, tili, tiliPath} = require('../basicOptions.json')

const datas = [tili]

const options = {
  host: host,
  path: tiliPath,
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
// let n = 0
// const run = () => {
//   const promises = []
//   datas.forEach((d, i) => {
//     n++
//     options.headers['Content-Length'] = Buffer.byteLength(d)
//     promises.push(httpPost(options, d, i))
//   })
//   // Promise.all(promises).then((resps) => {
//   //   if (resps.all(r => r.length < 1000)) {
//   //     return
//   //   } 
//   //   run()
//   // })
//   console.log('n' ,n)
// }

exports.tili = () => {
  let n = 0
  return new Promise(res => {
    const run = () => {
      const promises = []
      datas.forEach((d, i) => {
        n++
        options.headers['Content-Length'] = Buffer.byteLength(d)
        promises.push(httpPost(options, d, i))
      })
      Promise.all(promises).then((resps) => {
        // if (n >= 25) {
          res(true);
          return
        // }
        // run()
      })
      console.log('体力' ,n)
    }
    run()
  })
}

// run();
// setInterval(run, 5000)