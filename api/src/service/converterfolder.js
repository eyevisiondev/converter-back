
const fs = require('fs');

converter = (filename) => {


  fs.mkdir(process.env.PATH_FOLDER + '/' + `${filename}`, function (err) {
    if (err) {
      console.log('failed to create directory', err);
    } else {
      console.log('create folder')
    }
  });

  fs.chown(process.env.PATH_FOLDER + '/' + `${filename}`, 1000, 1000, function (err) {
    if (err) {
      console.log('failed to add permission to victor', err);
    } else {
      console.log('create permission to victor')
    }
  })

}

module.exports = converter;