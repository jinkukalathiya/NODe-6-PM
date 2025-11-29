const url = require('url');

const myUrl = new URL("https://demo.com/Home?name=Jinkal");

console.log(myUrl.hostname);
console.log(myUrl.host);
console.log(myUrl.pathname);
console.log(myUrl.href);
console.log(myUrl.username);
console.log(myUrl.searchParams.get('name'));
