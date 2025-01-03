var express = require("express"); 
var https = require("https");
var path = require("path");
var fs = require("fs");


var app = express();
 
app.use(express.static('public'));
 
//make way for some custom css, js and images
app.use('/plugins', express.static(__dirname + '/public/plugins'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/scss', express.static(__dirname + '/public/scss'));

/*
const sslServer = https.createServer(
    { 
        key: fs.readFileSync(path.join(__dirname, 'certs', 'astrony.com.key')),
        cert: fs.readFileSync(path.join(__dirname, 'certs', 'astrony.com.crt')),
    },app
)
*/ 
var server = app.listen(80, function(){
    var port = server.address().port;
        console.log("Server started at http://localhost:%s", port);
});
