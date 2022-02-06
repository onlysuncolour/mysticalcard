const fs = require('fs')
const {httpPost} = require('../utils/httpPost')

const Run = () => {

  fs.readFile("./henti.txt",'utf-8',(err, body) =>{ 
    if(err) {
      throw err; 
    }
    const dataObj = {}
    body.split('\n').forEach(d => {
      if (d.startsWith('TOKEN:')) {
        dataObj.token = d.split('TOKEN: ')[1]
      } else if (d.startsWith('device:')) {
        dataObj.device = d.split('device: ')[1]
      } else if (d.startsWith('TIME:')) {
        dataObj.time = d.split('TIME: ')[1]
      } else if (d.startsWith('data=')) {
        dataObj.data = d
      }
    })
    const datas = Array.from({length: 150}).fill(dataObj.data);
    const options = {
      method: 'POST',
      host: "hkgame.tsstudio2020.com",
      port: "8001",
      path: "/bastion.php",
      headers: {
        "TIME": dataObj.time,
        HOST: "hkgame.tsstudio2020.com:8001",
        "TOKEN": dataObj.token,
        "device": dataObj.device,
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; NOH-AN00 Build/HUAWEINOH-AN00)",
        "Accept-Encoding": "identity",
        charset: "utf-8",
        "Content-Type": "application/x-www-form-urlencoded",
      }
    }
    console.log(dataObj)
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
  });
}

Run()
