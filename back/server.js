require('dotenv').config();
const express = require("express")
const http = require("http")
const mongoose = require('mongoose');
const Schemma = mongoose.Schema

const indicadoresSchemma = new Schemma({
    indicadorNombre:  String
})

const indicadoresModel = mongoose.model('indicadores', indicadoresSchemma)

const conn = mongoose.connect(process.env.MONGO_DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
})
.then((res) => {
    console.log("Conectado a mongoDB:", process.env.MONGO_DB_CONNECTION);

    const doc =  indicadoresModel.find().exec()

    doc.then((res) => {
        console.log("indicadoresModel: ",res);
    }).catch((err) => {
        console.log(err);
    })

    return res
})
.catch((err) => {
    console.log("Error al conectar MongoDB", err.reason);
});

const socketio = require('socket.io');

const messagesHandler = require('./messagesHandler');

const app = express()
const server = http.createServer(app)
// const socketServer = socketio(server)

const PORT = 4000 || process.env.PORT

const botName = 'Chat!'

let timeout = null

// socketServer.of("/chat").on('connection',(socket) => {
//     console.log("nuevo cliente conectado",socket.id);
//     //cuando cualquiera se conecta
//     socket.emit('mensaje', messagesHandler(botName,'Bienvenido al servidor de prueba de sockets para mensajería instantanea.'))
//     //cuando alguien en específico se conecta
//     socket.broadcast.emit('mensaje',messagesHandler(botName,'Alguien se acaba de conectar'))
//     //cuando cualquiera se desconecta
//     socket.on('disconnect',() => {
//         //mensaje para todos
//         socketServer.of("/chat").emit('mensaje',messagesHandler('Usuario','Alguien se ha ido'))
//     })

//     // escucha mensajes desde el cliente
//     socket.on('enviarMensaje',(mensaje) => {
//         socketServer.of("/chat").emit('mensaje',messagesHandler(mensaje.usuario,mensaje.mensaje))
//     })

//     // mensaje directo a socket
//     // const clientes = Object.keys(socketServer.of("/chat").sockets)
//     // clearTimeout(timeout)
//     // timeout = setTimeout(() => {
//     //     socketServer.of("/chat").sockets[clientes[clientes.length -1]].emit("mensaje",messagesHandler(botName,'Eres el último en llegar'))
//     // }, 2000)

// })

server.listen(PORT, () => {
    console.log(`servidor corriendo en puerto ${PORT}`);
})