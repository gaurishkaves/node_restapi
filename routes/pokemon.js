const express = require('express')
const router = express.Router()
const pokemonController = require('../components/pokemon/pokemon.controller')
const { verifyUser } = require('../components/auth/auth.service')

router.get('/', verifyUser, pokemonController.getAllPokemon)

router.get('/:id', pokemonController.getPokemon)

router.post('/', pokemonController.createPokemon)

router.put('/:id', pokemonController.updatePokemon)

router.delete('/:id', pokemonController.deletePokemon)

module.exports = router
