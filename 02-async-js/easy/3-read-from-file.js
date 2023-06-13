const fs = require('fs');


function readFile() {
    fs.readFile('./test.txt', { encoding: 'utf-8' }, (err, data) => {
        console.log(data)
    })
}

readFile()

for (let i = 0; i < 1000000; i++) {
    if (i == 10000) console.log(i);
}