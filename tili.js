const {httpPost} = require('./httpPost')

const datas = 
[
  "z=58ewc12eNodjkELgjAYhv%2fLIC%2bV%2bG26zWCHEKGT3Tp0CXNTBzU%2fphgW%2ffdm8PLA85zeD3m%2bx44ciB5Uqe1UOuO7JZoV5zmNsEdUR6f9YPUqD3U93YoqwrlRaSxiGkMmsjz4XdGEwh7Cki0kG1anbAVExjV%2bwUk1tM0kE6JuQUrgRqfiLnkTYCRQpsmO4IyVeV2MH%2b3gwicI7YzGFbXXRW%2fxn74%2fEHE1KQ%3d%3d&b=04204e6278ba255eab679bb8aa6d6e40",
  // "z=58ewc12eNodjkELgjAYhv%2fLIC%2bV%2bG26zWCHEKGT3Tp0CXNTBzU%2fphgW%2ffdm8PLA85zeD3m%2bx44ciB5Uqe1UOuO7JZoV5zmNsEdUR6f9YPUqD3U93YoqwrlRaSxiGkMmsjz4XdGEwh7Cki0kG1anbAVExjV%2bwUk1tM0kE6JuQUrgRqfiLnkTYCRQpsmO4IyVeV2MH%2b3gwicI7YzGFbXXRW%2fxn74%2fEHE1KQ%3d%3d&b=04204e6278ba255eab679bb8aa6d6e40",
  // "z=58ewc12eNodjkELgjAYhv%2fLIC%2bV%2bG26zWCHEKGT3Tp0CXNTBzU%2fphgW%2ffdm8PLA85zeD3m%2bx44ciB5Uqe1UOuO7JZoV5zmNsEdUR6f9YPUqD3U93YoqwrlRaSxiGkMmsjz4XdGEwh7Cki0kG1anbAVExjV%2bwUk1tM0kE6JuQUrgRqfiLnkTYCRQpsmO4IyVeV2MH%2b3gwicI7YzGFbXXRW%2fxn74%2fEHE1KQ%3d%3d&b=04204e6278ba255eab679bb8aa6d6e40",
  // "z=58ewc12eNodjkELgjAYhv%2fLIC%2bV%2bG26zWCHEKGT3Tp0CXNTBzU%2fphgW%2ffdm8PLA85zeD3m%2bx44ciB5Uqe1UOuO7JZoV5zmNsEdUR6f9YPUqD3U93YoqwrlRaSxiGkMmsjz4XdGEwh7Cki0kG1anbAVExjV%2bwUk1tM0kE6JuQUrgRqfiLnkTYCRQpsmO4IyVeV2MH%2b3gwicI7YzGFbXXRW%2fxn74%2fEHE1KQ%3d%3d&b=04204e6278ba255eab679bb8aa6d6e40",
  // "z=58ewc12eNodjkELgjAYhv%2fLIC%2bV%2bG26zWCHEKGT3Tp0CXNTBzU%2fphgW%2ffdm8PLA85zeD3m%2bx44ciB5Uqe1UOuO7JZoV5zmNsEdUR6f9YPUqD3U93YoqwrlRaSxiGkMmsjz4XdGEwh7Cki0kG1anbAVExjV%2bwUk1tM0kE6JuQUrgRqfiLnkTYCRQpsmO4IyVeV2MH%2b3gwicI7YzGFbXXRW%2fxn74%2fEHE1KQ%3d%3d&b=04204e6278ba255eab679bb8aa6d6e40",
  // "z=58ewc12eNodjkELgjAYhv%2fLIC%2bV%2bG26zWCHEKGT3Tp0CXNTBzU%2fphgW%2ffdm8PLA85zeD3m%2bx44ciB5Uqe1UOuO7JZoV5zmNsEdUR6f9YPUqD3U93YoqwrlRaSxiGkMmsjz4XdGEwh7Cki0kG1anbAVExjV%2bwUk1tM0kE6JuQUrgRqfiLnkTYCRQpsmO4IyVeV2MH%2b3gwicI7YzGFbXXRW%2fxn74%2fEHE1KQ%3d%3d&b=04204e6278ba255eab679bb8aa6d6e40",
  // "z=58ewc12eNodjkELgjAYhv%2fLIC%2bV%2bG26zWCHEKGT3Tp0CXNTBzU%2fphgW%2ffdm8PLA85zeD3m%2bx44ciB5Uqe1UOuO7JZoV5zmNsEdUR6f9YPUqD3U93YoqwrlRaSxiGkMmsjz4XdGEwh7Cki0kG1anbAVExjV%2bwUk1tM0kE6JuQUrgRqfiLnkTYCRQpsmO4IyVeV2MH%2b3gwicI7YzGFbXXRW%2fxn74%2fEHE1KQ%3d%3d&b=04204e6278ba255eab679bb8aa6d6e40",
  // "z=58ewc12eNodjkELgjAYhv%2fLIC%2bV%2bG26zWCHEKGT3Tp0CXNTBzU%2fphgW%2ffdm8PLA85zeD3m%2bx44ciB5Uqe1UOuO7JZoV5zmNsEdUR6f9YPUqD3U93YoqwrlRaSxiGkMmsjz4XdGEwh7Cki0kG1anbAVExjV%2bwUk1tM0kE6JuQUrgRqfiLnkTYCRQpsmO4IyVeV2MH%2b3gwicI7YzGFbXXRW%2fxn74%2fEHE1KQ%3d%3d&b=04204e6278ba255eab679bb8aa6d6e40",
]

const options = {
  host: 'x1.mysticalcard.com',
  path: '/user.php',
  method: 'POST',
  headers: {
    "Cookie": "_sid=sajnskf8miroh4huvr40nicla2",
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