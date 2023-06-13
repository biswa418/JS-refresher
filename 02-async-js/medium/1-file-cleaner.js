const fs = require('fs');

function write(file, data) {
    fs.writeFile(file, data, (err) => {
        if (err) {
            console.log(err)
            return;
        }

        console.log('file written');
    })
}


function cleanUp(file) {
    fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log(err)
            return;
        }

        //change the data
        data = data.split(' ').filter((word) => word !== '').join(' ');

        //send to write
        write(file, data)
    })
}



cleanUp('./file.txt')