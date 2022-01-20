const http = require('http')

exports.httpPost = (options, data, i, timeout = 0) => {
  return new Promise(_res => {
    const send =  () => {
      const req = http.request(options, (res) => {
        console.log(`${i} STATUS: ${res.statusCode}`);
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => {
          rawData += chunk
        });
        res.on('end', () => {
          console.log(`${i} data length:`, `${rawData}`.length)
          _res(`${rawData}`.length)
        });
      });
      
      req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
        _res(0)
      });
      
      // Write data to request body
      req.write(data);
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