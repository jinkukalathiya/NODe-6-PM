// let fs = require('fs');
// fs.writeFileSync("hello.txt", "Hello My Name is Jinkal...");

function sayHello(){
    console.log("Hello World...");
}

setTimeout(sayHello,8000);

setTimeout(() => {
    console.log("Hello Jinkal...");
},5000)

console.log(__filename);
console.log(__dirname);

function welCome(){
    console.log("Welcome to Learn Node JS...");
}

setInterval(welCome,1000);

clearInterval(welCome);