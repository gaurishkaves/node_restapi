const { body, validationResult } = require('express-validator')

const pokemonValidationRules = () => {
  return [
    // username must be an email
    body('name').not().isEmpty(),

    body('maxcp').if(body('maxcp').exists()).isNumeric(),
    body('attack').if(body('attack').exists()).isNumeric(),
    body('defence').if(body('defence').exists()).isNumeric(),
    body('stamina').if(body('stamina').exists()).isNumeric(),
    body('description').isLength(),
    body('family').if(body('family').exists()).isArray(),
    body('weaknesses').if(body('weaknesses').exists()).isArray(),
    body('resistances').if(body('resistances').exists()).isArray()

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
  pokemonValidationRules,
  validate
}
