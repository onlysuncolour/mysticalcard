import { Injectable } from '@nestjs/common';
import { httpPost } from './app.post';
const {host, Cookie} = require('../basicOptions.json')

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getOptions(path) {
    const options = {
      host: host,
      path: `/${path}.php`,
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
    return options
  }
  makeBody(body) {
    return `z=${encodeURIComponent(body.z)}&b=${encodeURIComponent(body.b)}`
  }
  Journey(body) {
    let _body = this.makeBody(body)
    const options = this.getOptions('Journey')
    return new Promise((res) => {
      httpPost(options, _body).then((data :any)=> {
        if(data?.data?.journeyList?.journeyList && data.data.journeyList.journeyList.find(j => j.Status === 0)) {
          data.data.journeyList.journeyList = [data.data.journeyList.journeyList.find(j => j.Status === 0)]
        } 
        res(data);
      })
    })
  }
  getMedition(n = 1000) {
    let i = 0
    return new Promise((res) => {
      let run = () => {
        this.getRunesFull().then(() => {
          if(++i < n) {
            run()
          } else {
            res(true)
          }
        })
      }
      run();
    })
  }
  getRunesFull() {
    const runes = [
      'z=7j65v8makbg6m7eNodjrEOgjAUAP%2bliSwK6SttKSYdDA5OuDm4mEKLkGB5KQajxn%2b3ulxyN92b3F7zlWyJnfTemTFZtARVJNgj6p23YRrsT0Z9PlyqOsGl1TxTGc1AlIpHbzSjDFJgKWNrKFa5AYhgMnG%2bDU%2b864ZKKfNOtExIC10pWOGEMsYKLnlOJdkQXLB2j5ML8zD5eAOxHdH5ygRb9QP%2b0%2bcLTl8yRw%3d%3d&b=863f10859e97d936b5fc26d36f5efc4b',
    ]
    const options = this.getOptions('meditation')
    return new Promise(res => {
      httpPost(options, runes[0]).then(resp => {
        let i = 0, _resp = resp
        let run = () => {
          i++
          this.getRunes(_resp).then(r => {
            _resp = r;
            if (i < 10) {
              run()
            } else {
              res(true)
            }
          })
        }
        run();
      })
    })
  }
  getRunes(data) {
    const runes = [
      'z=7j65v8makbg6m7eNodjrEOgjAUAP%2bliSwK6SttKSYdDA5OuDm4mEKLkGB5KQajxn%2b3ulxyN92b3F7zlWyJnfTemTFZtARVJNgj6p23YRrsT0Z9PlyqOsGl1TxTGc1AlIpHbzSjDFJgKWNrKFa5AYhgMnG%2bDU%2b864ZKKfNOtExIC10pWOGEMsYKLnlOJdkQXLB2j5ML8zD5eAOxHdH5ygRb9QP%2b0%2bcLTl8yRw%3d%3d&b=863f10859e97d936b5fc26d36f5efc4b',
      'z=8xxka5nx17leNotjrEKwjAURf8lYBZtyUtjE4UM0kWXujm4SJpEW9D0kUpFxX83FZfLPWe5901ur%2bFC1sT1ukZLR12ClBRbRL0JLvadm%2bCqj9tTVVMcrRa5ylkOy5USiRvNGYcMeMb5HOSsMAApeEl9sPGJd%2b3kuZCiVOAtK5yRAEKKpWka01imBJAFScs7l05MHUes%2fePg49D14e%2f26ENloqvaDn%2fq8wV7gzVZ&b=53376c3ba38b13372774bf0c31dc95aa',
      'z=kakkz1ceNodjrEKwjAURf8lYBZt6UtqkgoZpIsudXNwkSYv2IK2j1QqKv670eVyz1nufbPba7qwDcPRNuT5bBUY4NQR2e2AcezxB1d72p3rhtPsbZmbvMhhXZkysbOiEJCByIRYgl7IFiCFUDwMPj7pboVxqHQolVdSoy%2bCcV62DmUVsDDasRVLy3tMJ0TqNFMTHscQp34ckoPkDhSGuo1Ydz391ecLovY1%2bg%3d%3d&b=9915c0283795abfccff0025ac20ceeb5',
      'z=zsexp3kbeeNodjrEOgjAURf%2bliSwK6XulQE06GBZdcHNwMbUtQqLwUgxGjf9udbm55yz3vtntNV3YmrlRN2STWRegZEIdkd4MLoy9%2b8FVH7enuklotjrPqoxnIFWVRz5r5AgpYIq4hHIhDEAMLBI%2f2PCkuzattTy3okUPxgirSvCuEtKgRA5csRWLyzsXT4jYaabGPw4%2bTP04RAfR7ckPtQmu7nr6q88XlCk1gw%3d%3d&b=a5d2a1dcb2db077caf5fd4e23449be2b',
      'z=gym4l76evi5cpeNodjrEOgjAURf%2bliV0U0vegUEw6GBZdcHNwMdBWIdHyUgxGjf9udbm55yz3vtntNV3YmtlRN2T4rAsUklNPpDfehnGwP7jq4%2fZUN5xmo%2fNUpSIFWak8cqdRICSACeISykXWAsTAgjtvwpPuGttMdkKpUpXnDKCQwsnCSmVbha4ykq1YXN7ZeCKPnWZq3OPgwjSMPjqIbk%2fO122wdT%2fQX32%2bU2s04A%3d%3d&b=17122ef7564fc24c2747f512263ccb00',
    ]
    const options = this.getOptions('meditation')
    console.log('data',data)
    const npc = data?.NpcList?.pop ? data?.NpcList?.pop() : 1
    return httpPost(options, runes[npc])
  }
}
