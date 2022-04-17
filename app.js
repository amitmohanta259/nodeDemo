const http = require('http');
const server = http.createServer((req,res)=>{
    // res.write("Welcome to home page");
    // console.log(res);
    // res.end();
    if(req.url === '/'){
        res.end('Welcome to home page');
    }
    if(req.url ==="/about"){
        res.end("Welcome to about page");
    }
    res.end(`<h1>Opps Page Not Found</h1>`)
});

server.listen(3000);