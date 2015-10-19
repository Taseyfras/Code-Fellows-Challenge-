// Challenge: Create a simple http server using node. 
//This server should respond to a root-url request with a file called 
//index.html. Do not use ExpressJS. Your code should have error 
//checking and at least one callback. Put five or more html elements in 
//your index.html. One of the elements should be a link to an external 
//page. To complete this challenge, I read nodebeginner.org and modulus.io 
//and I completed a node.js tutorial on teamtreehouse.com. I also utilized
//stackoverflow.com and the node.js documentation.

//requires the http node module
var http = require("http");
//requires POSIX(Portable Operation System Interface) standard input/output functions 
var fs = require("fs");

/*http.createServer(request, response) creates a server that responds (and then 
serves up that response) upon request*/
http.createServer(function(request, response) { 
    /*fs.stat checks the url path and then returns either an error or a confirmation that
    the path exists. stats is a node object*/
    fs.stat('index.html', function (err, stats) {
        if (err) {
            response.writeHeader(404, {'Content-Type': 'text/plain'}); 
            response.end('file is not found');
        } else {
            console.log('file is found');
            /*fs.readFile(filename[, options], callback) points to the file index.html, checks 
            for errors, and then either displays an error or logs that program is working*/ 
            fs.readFile('index.html', function (err, html) {
                if (err) {
                    response.writeHeader(500, {'Content-Type': 'text/plain'});    
                    response.end('something is wrong');   
                } 
                else {    
                    console.log('index.html is live at port 8080');
                    /*response.writeHeader gives the status code for the request, in the header
                    and identifies what type of file it is serving(plain text, html, jpg, etc.)
                    response.end lets the server know the message is complete*/
                    response.writeHeader(200, {'Content-Type': 'text/html'});
                    response.write(html);     
                    response.end();  
                }
            });
        }
    });  
 //.listen(port) tells the server to serve index.html to the URL http://localhost:8080  
}).listen(8080);
