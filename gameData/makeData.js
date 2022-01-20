const {writeFile} = require('../utils/writeFile')

const type = 'contract'
const skillData = require('./fulldata/skill.json')    
let fullData, _myData
switch (type) {
  case 'card':
    fullData = require('./fulldata/card.json')    
    _myData = require('./mydata_o/card.json')    
    break;
  case 'contract':
    fullData = require('./fulldata/contract.json')    
    _myData = require('./mydata_o/contract.json')    
    break;
  case 'rune':
    fullData = require('./fulldata/rune.json')    
    _myData = require('./mydata_o/rune.json')    
    break;
  default:
    break;
}

if (type === 'card') {
  const myData = _myData.data.Cards
    .filter(c => c.Lock == 1 && parseInt(c.CardId) < 7000)
    .map(card => {
    const oCard = fullData.find(c => c.id == card.CardId)
    const skillNew = card.SkillNew != 0 ? skillData.find(s => s.id == card.SkillNew) : '';
    const _card = {
      id: oCard?.id,
      name: oCard?.name,
      SkillNew: skillNew?.name
    }
    let result = oCard?.name
    if (skillNew?.name) result += ` - ${skillNew?.name}`
    if (card.AwakingLevel != '0') {
      result += ` ${card.AwakingLevel}破`
      _card.AwakingLevel = card.AwakingLevel
    }
    _card.result = result
    return _card;
  }).filter(c => !!c.id).sort((a, b) => b.id - a.id).map(c => c.result);
  writeFile(`./mydata/${type}.json`, JSON.stringify(myData))
}
if (type === 'contract') {
  const myData = _myData.data.Cards.filter(c => c.ContractCondition != 0).map(card => {
    const oCard = fullData.find(c => c.id == card.CardId)
    const contractCondition = skillData.find(s => s.id == card.ContractCondition)
    const skillNew = card.SkillNew != 0 ? skillData.find(s => s.id == card.SkillNew) : '';
    const _card = {
      id: oCard?.id,
      name: oCard?.name,
      SkillNew: skillNew?.name,
      contractCondition: contractCondition?.name,
    }
    let result = `${oCard?.name} - ${contractCondition?.name}`
    if (_card.SkillNew) {
      result += ` - ${_card.SkillNew}`
    }
    _card.result = result
    return _card;
  }).filter(c => !!c.id).sort((a, b) => b.id - a.id).map(c => c.result);
  writeFile(`./mydata/${type}.json`, JSON.stringify(myData))
}


