const express = require('express')
const router = express.Router()
const pokemonController = require('../components/pokemon/pokemon.controller')
const { pokemonValidationRules, validate } = require('../components/pokemon/pokemon.validation')
const { verifyUser } = require('../components/auth/auth.service')

router.get('/', verifyUser, pokemonController.getAllPokemon)

router.get('/:id', verifyUser, pokemonController.getPokemon)

router.post('/', verifyUser, pokemonValidationRules(), validate, pokemonController.createPokemon)

router.put('/:id', verifyUser, pokemonValidationRules(), validate, pokemonController.updatePokemon)

router.delete('/:id', verifyUser, pokemonController.deletePokemon)

module.exports = router
