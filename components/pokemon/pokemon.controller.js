const pokemonDataAccess = require('./pokemon.dal')
const redis = require('../../config/redis')
const { validationResult } = require('express-validator')

exports.getAllPokemon = async (req, res, next) => {
  const redisData = await redis.getRedisVariable('all_pokemons')
  if (!redisData) {
    const pokemonData = await pokemonDataAccess.getAllPokemon()
    redis.setRedisVariable('all_pokemons', pokemonData)
    return res.send(pokemonData)
  } else {
    return res.send(redisData)
  }
}

exports.getPokemon = async (req, res, next) => {
  const pokemonId = req.params.id
  if (!pokemonId) { return res.status(400).send('Invalid Pokemon id !') }
  const redisData = await redis.getRedisVariable('pokemon_' + pokemonId)
  if (!redisData) {
    const pokemonData = await pokemonDataAccess.getPokemonByID(pokemonId)
    if (!pokemonData) {
      return res.status(404).send('Pokemon not found !')
    } else {
      redis.setRedisVariable('pokemon_' + pokemonId, pokemonData)
      return res.send(pokemonData)
    }
  } else {
    return res.send(redisData)
  }
}

exports.createPokemon = async (req, res, next) => {
  const data = req.body
  const pokemonData = await pokemonDataAccess.savePokemon(data)
  if (!pokemonData) {
    return res.status(400).send('Error Adding New Pokemon!')
  } else {
    return res.send(pokemonData)
  }
}

exports.updatePokemon = async (req, res, next) => {
  const pokemonId = req.params.id
  const data = req.body

  if (!pokemonId) { return res.status(400).send('Invalid Pokemon id !') }
  const pokemonData = await pokemonDataAccess.updatePokemon(pokemonId, data)

  if (pokemonData == 0) {
    return res.status(404).send('Pokemon not update found !')
  } else {
    return res.send(pokemonData)
  }
}

exports.deletePokemon = async (req, res, next) => {
  const pokemonId = req.params.id
  if (!pokemonId) { return res.status(400).send('Invalid Pokemon id !') }
  const pokemonData = await pokemonDataAccess.deletePokemon(pokemonId)
  if (!pokemonData) {
    return res.status(404).send('Pokemon not found !')
  } else {
    return res.status(200).send('Pokemon deleted !')
  }
}
