"use strict"
require("dotenv").config(".env");

const mongoose = require('mongoose');
const fs = require("fs");
const path = require("path");
const modelpath = process.env.WORKDIR + "/models";
mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	autoIndex: false,
	poolSize: 10,
	family: 4
})
mongoose.connection.on('connected', () =>{

console.log(`Connected to ${process.env.MONGO_URL}`)
    fs.readdirSync("./models/")
    .filter(file => {
        return (file.indexOf('.') !== 0);
    })
    .forEach(async file => {
    console.log(file)
        try {
            const model = require(path.join(modelpath, file))
            await model.syncIndexes()
        } catch (error) {
            console.log(error)
        }
    });
    process.exit(0);

} );
mongoose.connection.on('error', error => {
	console.error(error)
	process.exit(0);
});

mongoose.Promise = global.Promise;