const fs = require('fs');

fs.writeFileSync("data.txt","Hello, Welcome to Learn Node JS...");

const data = fs.readFileSync("data.txt", "utf-8");

console.log(data);