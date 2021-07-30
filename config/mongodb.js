'use strict'
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: false,
  poolSize: 10,
  family: 4
})
mongoose.connection.on('connected', () => console.log(`Connected to ${process.env.MONGO_URL}`))
mongoose.connection.on('error', error => {
  console.error(error)
  process.exit(0)
})
if (process.env.CENV == 'development') {
  mongoose.set('debug', (collectionName, method, query) => {
    console.log(`${collectionName}.${method}`, JSON.stringify(query) + '\n')
  })
}
mongoose.Promise = global.Promise
