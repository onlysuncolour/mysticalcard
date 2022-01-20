const http = require('https')

exports.httpGet = (url, i=0, timeout = 0) => {
  return new Promise(_res => {
    const send =  () => {
      const req = http.get(url, (res) => {
        console.log(`${i} STATUS: ${res.statusCode}`);
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => {
          rawData += chunk
        });
        res.on('end', () => {
          console.log(rawData)
          _res(JSON.parse(rawData))
          // console.log(`${i} data length:`, `${rawData}`.length)
          // _res(`${rawData}`.length)
        });
      });
      
      req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
        _res(0)
      });
      
      // Write data to request body
      req.end();
      console.log(`${i} req sent`)
    }
    if (timeout) {
      setTimeout(() => {
        send()
      }, timeout * 300)
    } else {
      send()
    }
  })
}