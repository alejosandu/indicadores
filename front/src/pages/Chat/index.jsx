import React from 'react'
import openSocket from 'socket.io-client'

const socket = openSocket(process.env.REACT_APP_SOCKET_SERVER)

class Chat extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            newMensaje: '',
            mensajes: []
        }
    }

    componentWillMount = () => {
        this.messagesHandler()
    }

    messagesHandler = () => {
        socket.on("mensaje", (data) => {
            this.setState({
                mensajes: [...this.state.mensajes, data]
            })
        })
    }

    onChange = (e) => {
        const { target: { name , value } } = e
        this.setState({ [name]: value })
    }

    handleEnviar = () => {
        // envia mensaje al servidor
        socket.emit('enviarMensaje',{
            usuario: this.state.usuario,
            mensaje: this.state.newMensaje
        })
        this.setState({ newMensaje: '' })
    }

    render() {
        return (
            <>
                <div>Chat!</div>
                <div>
                    <input type='text' name='usuario' value={this.state.usuario} onChange={this.onChange} placeholder='Usuario del chat' />
                    <input type='text' name='newMensaje' value={this.state.newMensaje} onChange={this.onChange} />
                    <button type='button' onClick={this.handleEnviar}>Enviar</button>
                </div>
                <br />
                <div>{this.state.mensajes.map((dataMensaje, key) => {
                    const { usuario, mensaje, time } = dataMensaje
                    return (<React.Fragment key={key}>{usuario} [{time}]: {mensaje}<br /></React.Fragment>)
                })}</div>
            </>
        )
    }
}

export default Chat