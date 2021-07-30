
const authService = require('./auth.service')

exports.login = async (req ,res,next)=>{
    const data ={}
    data.email = req.body.email
    data.password = req.body.password
    const user = await authService.validateUser(data)
    return res.send(user)
}