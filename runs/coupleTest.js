const {httpPost} = require('../utils/httpPost')
const {host, Cookie} = require('../basicOptions.json')

const datas = 
[
  [
    "/collectCard.php",
    "z=86bq77ksjrmkreNodjrFqwzAQht9FEC9tjE6yZKmgIZhAsyRDaYcuxZHUWNSRhWzcJqXv3rNvOPi%2b%2fzj%2bX3K9jxfyRNxg9j%2b2a%2bPFv3yFvi9moyvNi9SlZHbR5SG4BXrz%2fvzRHIs0W1OVqqQlCK0q5LNhlMEW2JaxB6g3vAXAxWTho823NBn9qQA0WGolSKjPDJQSVDlfO2W1kuSR7OwU5jDdDg47cQoa3evoc9NmtzrgtRCSURyM1qpH%2f42BFBVHk%2baE%2fObzGIa43KM7JR%2bXB00X0qr%2b%2fgFT40dT&b=b21e6d09b9791cba55ede6a2aeceaa8b"
  ],
  [
    "/cardExchange.php",
    "z=8uzsq6kba3xceNodzsGKwjAUheF3CdiNWpJrbW%2bFLKQIzkZ3s3AjNTdtA5pc2lJ1xHc34%2bbA96%2fOS9z%2bhlZsBAW9e5iu9q1NJl1miAl3zHrrqQ%2bO%2fnHVp%2f25OiQ8GZ2lmMpUrUvMoi8aJKilgiXAXBWzVa1UHMgT603%2f5FFbA4aQmlxaAqDVJUeJSLbIVF3KJhcLsTWjm9z4%2fKF4p1hjTG0INHwNUTzxwd5%2fbT%2b44GNTsR3Z%2bqruqeocf9P7AwMxPmA%3d&b=409c339f6bf9c9d0dbdf1d4cea0e7904"
  ],
]

const options = {
  hostname: host,
  // path: '/maze.php',
  method: 'POST',
  headers: {
    'Host': host,
    'User-Agent': "UnityPlayer/2019.4.13f1 (UnityWebRequest/1.0, libcurl/7.52.0-DEV)",
    'Accept': "*/*",
    'Accept-Encoding': "deflate, gzip",
    'Cookie': `_sid=${Cookie}`,
    'Content-Type': "application/x-www-form-urlencoded",
    'X-Unity-Version': "2019.4.13f1",
    // 'Content-Length': Buffer.byteLength(data),
  }
}
const run = () => {
  datas.forEach((data, i) => {
    options.headers['Content-Length'] = Buffer.byteLength(data[1])
    options.path = data[0]
    httpPost(options, data[1], i)
  })
}
run()
// setInterval(() => {
//   run()
// }, 5000)

// httpPost(options, data)

