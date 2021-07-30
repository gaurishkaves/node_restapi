const {Schema,model} = require('mongoose');

const pokemonSchema = new Schema({
    name : {type : String,required: true},
    maxcp : {type : Number},
    attack : {type : Number},
    defence : {type : Number},
    stamina : {type : Number},
    description : {type : String},
    family : {type : [String]},
    weaknesses : {type : [String]},
    resistances : {type : [String]},
},{timestamps: true});

module.exports = model('Pokemon',pokemonSchema);