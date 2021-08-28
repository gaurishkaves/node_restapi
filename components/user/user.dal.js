const User = require('../../models/users')

exports.getAllUser = async () => {
  const userData = await User.find()
  return userData
}

exports.getUserByID = async (userId) => {
  const userData = await User.findOne({ _id: userId })
  return userData
}

exports.getUserByID = async (userId) => {
  const userData = await User.findOne({ _id: userId })
  return userData
}

exports.saveUser = async (data) => {
  const userData = await User.create(data)
  return userData
}

exports.updateUser = async (userId, data) => {
  const userData = await User.findOneAndUpdate({ _id: userId }, data, {
    returnOriginal: false
  })
  return userData
}

exports.deleteUser = async (userId) => {
  const userData = await User.deleteOne({ _id: userId } )
  return userData
}
