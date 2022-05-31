const http = require('http');
const hostname = '192.168.100.142';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hola desde el server v2')
});

server.listen(port,hostname, () => {
    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`);
});

const msgPrueba = "mensaje de prueba";