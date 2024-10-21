var http = require('http');
const port = 3000;
http.createServer(function(request,reponse) {
    reponse.writeHead(200, {'content-type': 'text/plain'});
    reponse.end('<h1>Bonjour Node !!!!</h1>\n');
}).listen(port);
console.log('Serveur en cours sur http://localhost:3000/')