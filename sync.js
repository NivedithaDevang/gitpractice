const fs = require("fs");

// Synchronous read
const data = fs.readFileSync('test.txt', 'utf-8');
console.log(data);
console.log("File read synchronously");


//writing on a file
fs.writeFileSync('test.txt', "\n This is Snchronously written");
console.log("File written synchronously");


//appending
fs.appendFileSync('test.txt', "\n This is appended");
console.log("Appended synchronously");


//deleting 
/*
fs.unlinkSync('test.txt');
console.log("File deleted");
*/
