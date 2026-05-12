const http = require ('http');

const server = http.createserver((req, res) => {
    res.writeHead(200, { ' content_Type': 'text/plain'});
    res.end('Gello from ci/cd pripline! /n')
});

server.listen(3000, () => {
console.log( ' Server running on port 3000');
})