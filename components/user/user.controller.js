const userDataAccess = require('./user.dal')
var bcrypt = require('bcryptjs');

exports.getAllUser = async (req ,res,next)=>{

    return res.send(userData)
}


exports.getUser = async (req ,res,next)=>{
    let userId = req.params.id;
    console.log(userId)
    if(!userId)
        return res.status(400).send("Invalid User id !")
    const userData = await userDataAccess.getUserByID(userId)
    if(!userData){
        return res.status(404).send("User not found !")
    }else{
        return res.send(userData)
    }
}


exports.createUser = async(req,res,next)=>{

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    let data ={};
    data.name = req.body.name
    data.email = req.body.email
    data.password = hashedPassword

    const userData = await userDataAccess.saveUser(data)
    if(!userData){
        return res.status(400).send("Error Adding New User!")
    }else{
        return res.send(userData)
    }
}

exports.updateUser = async (req ,res,next)=>{
    let userId = req.params.id;
    let data ={};
    data.name = req.body.name
    data.description = req.body.description

    if(!userId)
        return res.status(400).send("Invalid User id !")
    const userData = await userDataAccess.updateUser(userId,data)


    if(userData==0){
        return res.status(404).send("User not update found !")
    }else{
        console.log(userData)
        return res.send(userData)
    }
}

exports.deleteUser = async (req ,res,next)=>{
    let userId = req.params.id;
    if(isNaN(userId))
        return res.status(400).send("Invalid User id !")
    const userData = await userDataAccess.deleteUser(userId);


    if(!userData){
        return res.status(404).send("User not found !")
    }else{
        return res.status(200).send("User deleted !")
    }
}
