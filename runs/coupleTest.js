const {httpPost} = require('../utils/httpPost')
const {host, Cookie} = require('../basicOptions.json')


const datas = 
[
  [
    "/collectCard.php",
    "z=1obmf75mqfgezeNodjkFLxDAUhP9LwF50S16SNm%2bFHJayoJf1IHrwIrFJtsFuGtISXcX%2fbtp3GJhvhsf8ksvPfCb3xEzq%2bN0POpzt86cfxyorAYxXcYhRHYJJkzerGdXbw3t3qmLulaixhhrarZc%2fFKOM7SjsqLwFvOGaryJoZUOfrnFR0hnUSJ0DsCioY1TuZbsHpKAdiobckUO%2f%2bOyX66MpmziVrLCX2aZOJ7MxENgwbGi5Em1TT%2farBNi0vJCYY%2fGvNs1%2bCmu%2fsKdow%2fqgG3zc0N8%2fYmlHcQ%3d%3d&b=ed3b6de88b38e16a699709e711339507"
  ],
  [
    "/cardExchange.php",
    "z=y2vgo12eNodzsuqwjAUheF3CZxOPJa900uqkIEUQSc6c%2bBEcqMNnJNs2lJv%2bO5GJwu%2bf7Se7P8xdmzNbJTbm%2blV6Fw2yxJ5nVFPJDfBDtHbD%2f7keXdpDxnNRpZ5k2OONfIiWUsOnC8BlyAW2PwUqvhMCZkLZrjTJCutYAUCsQauhShhxetGayNspSxWwH7Zxkx%2b9tN9b9Md0RQpdTHa8WueRDMd3PXkhtHHkBqmdiQXWjXYtvf0Ta83isg9Qg%3d%3d&b=824a418b5e9539f3de3cd891ae1cb692"
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

