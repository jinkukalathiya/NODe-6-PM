const http = require('http');
const port = 9000;
const fs = require('fs');

const requestHandler = (req, res) => {
    let fileName = "";
    switch(req.url){
        case '/':
            fileName = "./home.html";
            break;
        case '/about':
            fileName = "./about.html";
            break;
        case '/service':
            fileName = "./service.html";
            break;
        default:
            fileName = "./404-page.html";
            break;
    }   
    fs.readFile(fileName,(err,result) => {
        if(!err){
            res.end(result);
        }
    })
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if(err){  
        console.log("Problem to Start Server");
    }
    // console.log("Server Start on Port :", port);
    // console.log("Server Start on Port :"+port);
    console.log(`Server Start on Port ${port}`);
})