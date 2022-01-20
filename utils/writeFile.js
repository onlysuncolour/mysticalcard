const fs = require('fs')

const writeFile = function (filename, data) {
  fs.writeFile(filename, data,  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log(filename, "数据写入成功！");
  });
}
const mkdir = (path) => {
  fs.mkdir(path, err => {
    
  })
}

exports.writeFile = writeFile
exports.mkdir = mkdir