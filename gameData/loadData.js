const {httpGet} = require('../utils/httpGet')
const {writeFile} = require('../utils/writeFile')

let page =1, max, result = [],
  type="contract" // card , skill , contract , rune 
let makeUrl = (_page = page, _type=type) => {
  return `https://wiki.mysticalcard.com/mysticalcard/v2/data/indices/?keyword=&server=x&type=${_type}&page=${_page}`
}
httpGet(makeUrl()).then(data => {
  max = data.count;
  result.push(...data.items);
  let promises = []
  while(page < max) {
    page++;
    promises.push(httpGet(makeUrl(page), page - 1))
  }
  Promise.all(promises).then(datas => {
    datas.forEach(d => result.push(...d.items))
    writeFile(`gameData/fulldata/${type}.json`, JSON.stringify(result))
  })
})