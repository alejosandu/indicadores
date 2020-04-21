const express = require("express")
const http = require("http")
const socketio = require('socket.io');
const messagesHandler = require('./messagesHandler');

const app = express()
const server = http.createServer(app)
const socketServer = socketio(server)

const PORT = 4000 || process.env.PORT

const botName = 'Chat!'

socketServer.on('connection',(socket) => {
    console.log("nuevo cliente conectado",socket.id);
    //cuando cualquiera se conecta
    socket.emit('mensaje', messagesHandler(botName,'Bienvenido al servidor de prueba de sockets para mensajería instantanea.'))
    //cuando alguien en específico se conecta
    socket.broadcast.emit('mensaje',messagesHandler(botName,'Alguien se acaba de conectar'))
    //cuando cualquiera se desconecta
    socket.on('disconnect',() => {
        //mensaje para todos
        socketServer.emit('mensaje',messagesHandler('Usuario','Alguien se ha ido'))
    })

    // escucha mensajes desde el cliente
    socket.on('enviarMensaje',(mensaje) => {
        socketServer.emit('mensaje',messagesHandler(mensaje.usuario,mensaje.mensaje))
    })

})

server.listen(PORT, () => {
    console.log(`servidor corriendo en puerto ${PORT}`);
})