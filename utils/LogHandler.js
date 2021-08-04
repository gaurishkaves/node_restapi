// Using simple-node-logger module
const env = process.env.NODE_ENV || 'development'

module.exports = {
  setLog: function (file, type, msg) {
    const log = require('simple-node-logger').createSimpleLogger({

      logFilePath: './logs/' + file + '.log',
      timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS'
    })
    log.setLevel(type)
    log.log(msg)
  }
}
