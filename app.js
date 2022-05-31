
const express = require('express');
const app = express();

const port = 3000;

app.set('view engine','ejs');
app.set('views',__dirname+'/views');

app.use(express.static(__dirname + '/public'));


app.get('/', (req,res) => {
    res.render("index",{titulo:"mi titulo dinamico"})
});

app.get('/servicios', (req,res) => {
    res.render("servicios",{tituloServicios:"Este es un titulo de serviciso"})
});

app.use((req,res,next) => {
    res.status(404).render("404" ,{
        titulo : "404",
        descripcion : "Titulo del sitio web"
    })
});

app.listen(port, () => {
    console.log('servidor escuchando en el puerto ',port)
});







/* 

const http = require("http");
const { hostname } = require('os');
const server = http.createServer((req,res) =>{
    res.end('respuesta a la solicitud v.2')
});

const puerto = 3000;
server.listen(puerto, () => {
    console.log('escuchando solicitudes')
})
*/















/*
const {frutas, dinero} = require('./frutas');
frutas.forEach(item => {
    console.count(item)
});

const cowsay = require("cowsay");
console.log(cowsay.say({
    text:"Hola",
    e: "oO",
    T: "T"
})); 

console.log(dinero);*/
