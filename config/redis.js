'use strict'
const bluebird = require('bluebird')
const redis = require('redis')
bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  retry_strategy: function (options) {
    if (options.error.code === 'ECONNREFUSED') {

    }
  }
})

function setRedisVariable (key, value, expire) {
  if (!expire) {
    client.set(key, JSON.stringify(value), 'EX', 300) // expire in 5 min default
  } else {
    client.set(key, JSON.stringify(value), 'EX', expire)
  }
}

async function getRedisVariable (key) {
  return await client.getAsync(key).then(function (res) {
    return JSON.parse(res)
  }).catch(function (err) {
    console.log('REDIS FAILED:' + err.message)
  })
}

exports.setRedisVariable = setRedisVariable
exports.getRedisVariable = getRedisVariable
