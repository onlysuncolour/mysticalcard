const http = require('http')
const zlib = require('zlib');

exports.httpPost = (options, data, i=0, timeout = 0) => {
  options.headers['Content-Length'] = Buffer.byteLength(data)
  return new Promise((_res, _rej) => {
    const send =  () => {
      const req = http.request(options, (res) => {
        console.log(`${i} STATUS: ${res.statusCode}`);
        let chunks = []
        res.on('data', (chunk) => {
          // console.log(JSON.stringify(chunk))
          chunks.push(chunk)
        });
        res.on('end', () => {
          var buffer = Buffer.concat(chunks);
          // console.log('buffer', buffer)
          // console.log('chunks', chunks)
          zlib.gunzip(buffer, function (err, decoded) {
            const resdata = decoded.toString();
            // console.log('resdata', resdata)
            _res(JSON.parse(resdata))
          });
        });
      });
      
      req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
        _rej(0)
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