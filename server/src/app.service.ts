import { Injectable } from '@nestjs/common';
import { httpPost } from './app.post';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { host, Cookie } = require('../../basicOptions.json');

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
        Cookie: `_sid=${Cookie}`,
        'User-Agent':
          'UnityPlayer/2019.4.13f1 (UnityWebRequest/1.0, libcurl/7.52.0-DEV)',
        Accept: 'application/json',
        'Accept-Encoding': 'deflate, gzip',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Unity-Version': '2019.4.13f1',
        // 'Content-Length': Buffer.byteLength(data)
      },
    };
    return options;
  }
  makeBody(body) {
    return `z=${encodeURIComponent(body.z)}&b=${encodeURIComponent(body.b)}`;
  }
  Journey(body) {
    const _body = this.makeBody(body);
    const options = this.getOptions('Journey');
    return new Promise((res) => {
      httpPost(options, _body).then((data: any) => {
        if (
          data?.data?.journeyList?.journeyList &&
          data.data.journeyList.journeyList.find((j) => j.Status === 0)
        ) {
          data.data.journeyList.journeyList = [
            data.data.journeyList.journeyList.find((j) => j.Status === 0),
          ];
        } else if (data?.data?.journeyList?.journeyList) {
          data.data.journeyList.journeyList =
            data?.data?.journeyList?.journeyList.slice(0, 4);
        }
        res(data);
      });
    });
  }
}
