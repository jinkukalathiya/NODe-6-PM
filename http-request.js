const http = require('http');

const server = http.createServer((req, res)=>{
    res.write("Hello.... Welcome to Learn Node Js....!");
    res.write("My name is Jinkal Kalathiya...!");
    res.end();
});

server.listen(1000, () => {
    console.log("Server is Running on http://localhost:1000");
});