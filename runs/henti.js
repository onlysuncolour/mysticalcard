const {httpPost} = require('../utils/httpPost')
const {hData, hTime, hToken, hDevice} = require('../hentiOptions.json')

const datas = Array.from({length: 100}).fill(hData);
const options = {
  method: 'POST',
  host: "hkgame.tsstudio2020.com",
  port: "8001",
  path: "/bastion.php",
  headers: {
    "TIME": hTime,
    HOST: "hkgame.tsstudio2020.com:8001",
    "TOKEN": hToken,
    "device": hDevice,
    "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; NOH-AN00 Build/HUAWEINOH-AN00)",
    "Accept-Encoding": "identity",
    charset: "utf-8",
    "Content-Type": "application/x-www-form-urlencoded",
  }
}
const run = () => {
  const promises = []
  datas.forEach((d, i) => {
    options.headers['Content-Length'] = Buffer.byteLength(d)
    promises.push(httpPost(options, d, i))
  })
  Promise.allSettled(promises).then(resps => {
    // do nothing
  })
}

run();