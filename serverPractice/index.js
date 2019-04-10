var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(req, res){
    
    // res.writeHead('210', {
    //     "content-type" : "text/plain"
    // })
    // res.end("hello whirrled");

    // res.writeHead('307', {
    //     "Location" : "http://www.w3schools.com"
    // })
    // res.end("hello whirrled");
    var pathname = url.parse(req.url).pathname;
    console.log(pathname);

    // if (pathname === "/"){
    //     res.writeHead('200', {
    //         "content-type" : "text/plain"
    //     })
    //     res.end("index.html");
    // } else if (pathname === '/about.html'){
    //     res.writeHead('200', {
    //         "content-type" : "text/plain"
    //     })
    //     res.end("about.html");
    // } else {
    //     res.writeHead('404', {
    //         "content-type" : "text/plain"
    //     })
    //     res.end("page not found");
    // }
    var theFile;

    switch (pathname) {
        case '/about':
        case '/about.html':
            theFile = "about.html";
            break;
    
        default:
            theFile = "index.html";
    }
    fs.readFile(theFile, function(err,data){
        res.writeHead('200', {
            "content-type" : "text/html"
        })
        res.end(data);
    })
}).listen(3000);

console.log("Server Running");