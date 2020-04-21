const moment = require('moment');

messagesHandler = (usuario,mensaje) => {
    return {
        usuario,
        mensaje,
        time: moment().format('h:mm a')
    }
}

module.exports = messagesHandler