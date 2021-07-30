var express = require('express');
var router = express.Router();
var pokemonController = require("../components/pokemon/pokemon.controller")
var {verifyUser} = require("../components/auth/auth.service")


router.get("/",verifyUser,pokemonController.getAllPokemon);

router.get("/:id",pokemonController.getPokemon);

router.post("/",pokemonController.createPokemon);

router.put("/:id",pokemonController.updatePokemon);

router.delete("/:id",pokemonController.deletePokemon);


module.exports = router;
