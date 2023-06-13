const fs = require('fs');

function writeFile(filedata) {
    fs.writeFile('written.txt', filedata, (err) => {
        if (err) console.log(err);
    })
}


writeFile('Try this \nand try that');