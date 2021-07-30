const userDataAccess = require('./auth.dal')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.validateUser = async (data)=>{

    const user = await userDataAccess.findUser({'email':data.email});

        if(!user) return {"error":true,"error_msg":"User not found"};
        try{
            const hashedPassword = bcrypt.compareSync(data.password, user.password);
            if (!hashedPassword) return {"error":true,"error_msg":"Invalid Username & Password"}
            const token = jwt.sign({ id: user._id }, process.env.SECRET, {
                  expiresIn: 86400 // expires in 24 hours
                });

            return {"success":"true","token":token}

        }catch(e){
            console.log(e)
        }

}

exports.verifyUser = async (req,res,next)=>{

    var token = req.headers['x-access-token'];
      if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });

      // verifies secret and checks exp
      jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err)
          return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        // if everything is good, save to request for use in other routes
        req.userId = decoded.id;
        next();
      });

}