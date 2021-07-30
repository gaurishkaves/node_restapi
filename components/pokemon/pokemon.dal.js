const Pokemon = require('../../models/pokemons')

exports.getAllPokemon = async ()=>{
    const pokemonData = await Pokemon.find()
    return pokemonData;

}

exports.getPokemonByID = async (pokemonId)=>{
    const pokemonData = await Pokemon.findOne({'_id':pokemonId})
    return pokemonData;

}

exports.savePokemon = async (pokemonId)=>{
    const pokemonData = await Pokemon.insert(data);
    return pokemonData;

}

exports.savePokemon = async (pokemonId,data)=>{
    const pokemonData = await Pokemon.findOneAndUpdate({'_id':pokemonId},data,{
                                                                                    returnOriginal: false
                                                                                  })
    return pokemonData;

}

exports.deletePokemon = async (pokemonId)=>{
    const pokemonData = await Pokemon.destroy({where:{'user_id':pokemonId}})
    return pokemonData;

}