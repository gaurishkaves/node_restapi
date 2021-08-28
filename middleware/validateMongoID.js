const mongoose = require('mongoose');

const validateMongoID = (req, res, next) =>
{

    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).send('Invalid ID' )
    }
    next()
}


module.exports = {
  validateMongoID,

}