const { body, validationResult,param } = require('express-validator')
const mongoose = require('mongoose');

const userValidationRules = () => {
  return [
    // username must be an email

    mongoose.Types.ObjectId.isValid(param('id'))



  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors
  })
}

module.exports = {
  userValidationRules,
  validate
}
