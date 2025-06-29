// Week 1 - Example of reading a file asynchronously in Node.js : Ugly way

const fs = require('fs');

function myStuff(cb){
    return new Promise((resolve) => {
    fs.readFile('Week 1/Week_1.2.txt', 'utf-8', function(err, data) {
        if (err) {
            console.error("Error reading file:", err);
            cb(null);  // Or handle differently
            return;
        }
        resolve(data);
    });
    });

}

function onDone(data) {
    if (data === null) {
        console.log("No data received.");
    } else {
        console.log(data);
    }
}

myStuff().then(onDone);
