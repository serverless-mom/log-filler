const readline = require('readline');
const fs = require('fs');


const readInterface = readline.createInterface({
    input: fs.createReadStream('time_free'),
    output: process.stdout,
    console: false
});

readInterface.on('line', function(line) {
    console.log(line);
});