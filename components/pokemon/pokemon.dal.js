const Pokemon = require('../../models/pokemons')
const logger = require('../../utils/LogHandler')

exports.getAllPokemon = async () => {
  try {
    const pokemonData = await Pokemon.find()
    return pokemonData
  } catch (e) {
    logger.setLog('pokemon', 'error', 'getAllPokemon ' + e)
    return false
  }
}

exports.getPokemonByID = async (pokemonId) => {
  try {
    const pokemonData = await Pokemon.findOne({ _id: pokemonId })
    return pokemonData
  } catch (e) {
    logger.setLog('pokemon', 'error', 'getPokemonByID ' + e)
    return false
  }
}

exports.savePokemon = async (data) => {
  try {
    const pokemonData = await Pokemon.create(data)
    return pokemonData
  } catch (e) {
    logger.setLog('pokemon', 'error', 'savePokemon ' + e)
    return false
  }
}

exports.updatePokemon = async (pokemonId, data) => {
  try {
    const pokemonData = await Pokemon.findOneAndUpdate({ _id: pokemonId }, data, {
      returnOriginal: false
    })
    return pokemonData
  } catch (e) {
    logger.setLog('pokemon', 'error', 'updatePokemon ' + e)
    return false
  }
}

exports.deletePokemon = async (pokemonId) => {
  try {
    const pokemonData = await Pokemon.deleteOne({ _id: pokemonId })
    return pokemonData
  } catch (e) {
    logger.setLog('pokemon', 'error', 'deletePokemon ' + e)
    return false
  }
}
