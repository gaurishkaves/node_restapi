const userDataAccess = require('./user.dal')
const bcrypt = require('bcryptjs')

exports.getAllUser = async (req, res, next) => {
   const userData = await userDataAccess.getAllUser()
  return res.send(userData)
}

exports.getUser = async (req, res, next) => {
  const userId = req.params.id

  if (!userId) { return res.status(400).send('Invalid User id !') }
  const userData = await userDataAccess.getUserByID(userId)
  if (!userData) {
    return res.status(404).send('User not found !')
  } else {
    return res.send(userData)
  }
}

exports.createUser = async (req, res, next) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8)

  const data = {}
  data.name = req.body.name
  data.email = req.body.email
  data.password = hashedPassword

  const userData = await userDataAccess.saveUser(data)
  if (!userData) {
    return res.status(400).send('Error Adding New User!')
  } else {
    return res.send(userData)
  }
}

exports.updateUser = async (req, res, next) => {
  const userId = req.params.id
  const data = {}
  data.name = req.body.name
  data.description = req.body.description

  if (!userId) { return res.status(400).send('Invalid User id !') }
  const userData = await userDataAccess.updateUser(userId, data)

  if (userData == null) {
    return res.status(404).send('User not update found !')
  } else {

    return res.send(userData)
  }
}

exports.deleteUser = async (req, res, next) => {
  const userId = req.params.id
  if (!userId) { return res.status(400).send('Invalid User id !') }
  const userData = await userDataAccess.deleteUser(userId)

  if (!userData) {
    return res.status(404).send('User not found !')
  } else {
    return res.status(200).send('User deleted !')
  }
}
