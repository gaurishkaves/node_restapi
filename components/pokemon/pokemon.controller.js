const pokemonDataAccess = require('./pokemon.dal')

exports.getAllPokemon = async (req ,res,next)=>{
    const pokemonData = await pokemonDataAccess.getAllPokemon()
    return res.send(pokemonData)
}


exports.getPokemon = async (req ,res,next)=>{
    let pokemonId = req.params.id;
    console.log(pokemonId)
    if(!pokemonId)
        return res.status(400).send("Invalid Pokemon id !")
    const pokemonData = await pokemonDataAccess.getPokemonByID(pokemonId)
    if(!pokemonData){
        return res.status(404).send("Pokemon not found !")
    }else{
        return res.send(pokemonData)
    }
}


exports.createPokemon = async(req,res,next)=>{
    let data ={};
    data.name = req.body.name
    data.description = req.body.description

    const pokemonData = await pokemonDataAccess.savePokemon(data)
    if(!pokemonData){
        return res.status(400).send("Error Adding New Pokemon!")
    }else{
        return res.send(pokemonData)
    }
}

exports.updatePokemon = async (req ,res,next)=>{
    let pokemonId = req.params.id;
    let data ={};
    data.name = req.body.name
    data.description = req.body.description

    if(!pokemonId)
        return res.status(400).send("Invalid Pokemon id !")
    const pokemonData = await pokemonDataAccess.updatePokemon(pokemonId,data)


    if(pokemonData==0){
        return res.status(404).send("Pokemon not update found !")
    }else{
        console.log(pokemonData)
        return res.send(pokemonData)
    }
}

exports.deletePokemon = async (req ,res,next)=>{
    let pokemonId = req.params.id;
    if(isNaN(pokemonId))
        return res.status(400).send("Invalid User id !")
    const pokemonData = await pokemonDataAccess.deletePokemon(pokemonId);
    if(!pokemonData){
        return res.status(404).send("Pokemon not found !")
    }else{
        return res.status(200).send("Pokemon deleted !")
    }
}
