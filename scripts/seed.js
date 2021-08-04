'use strict'
require('dotenv').config('.env')

const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const modelpath = process.env.WORKDIR + '/models'
const seedpath = process.env.WORKDIR + '/seeds/'
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: false,
  poolSize: 10,
  family: 4
})
mongoose.connection.on('connected', () => {
  console.log(`Connected to ${process.env.MONGO_URL}`)
  fs.readdirSync('./seeds/')
    .filter(file => {
      return (file.indexOf('.') !== 0)
    })
    .forEach(async file => {
      try {
        const model = require(path.join(modelpath, file))
        const seed = fs.readFileSync(path.join(seedpath, file), { encoding: 'utf8', flag: 'r' })
        const parseData = JSON.parse(seed)

        for (const a of parseData) {
          const inserdata = await model.collection.findOne(a)
          if (inserdata === null) {
            model.collection.insertOne(a, function (err, res) {
              console.log(err)
              console.log(res)
            })
          }
        }
      } catch (error) {
        console.log(error)
      }
    })
    // process.exit(0);
})
mongoose.connection.on('error', error => {
  console.error(error)
  process.exit(0)
})

mongoose.Promise = global.Promise
