const datas = require('./datas.json');
const {httpPost} = require('../utils/httpPostDecode');
const {host, Cookie} = require('../basicOptions.json')
const options = {
  host: host,
  path: `/meditation.php`,
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

const collectRunes = (d) => d ? Promise.resolve(d) :httpPost(options, datas.collectRunes)
const getInitInfo = () => httpPost(options, datas.run)
const getRune = (d) => new Promise((res => {
  const data = d.data
  console.log(data)
  let n = 1;
  if(data&&data.NpcList) {
    n = data.NpcList.sort().pop()
  }
  setTimeout(
    () => res(httpPost(options, datas[n])), 300
  )
}))

let round = 0
const runRounds = (d) => {
  collectRunes(d)
  .then(d=>getRune(d))
  .then(d=>getRune(d))
  .then(d=>getRune(d))
  .then(d=>getRune(d))
  .then(d=>getRune(d))
  .then(d=>getRune(d))
  .then(d=>getRune(d))
  .then(d=>getRune(d))
  .then(d=>getRune(d))
  .then(d=>getRune(d))
  .then(d => {
    if (round > 5) {
      return 
    }
    runRounds()
  })
}

const run = () => {
  getInitInfo().then(d => {
    if(d.data.AwardList.length > 0) {
      runRounds()
    } else {
      runRounds(d)
    }
  })
}

run()
