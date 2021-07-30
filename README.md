# NodeJS MongoDB Rest API !
Rest API developed using 

 1. Node JS 
 2. Express  
 3. MongoDB 
 4. Moongose 
 5. JWT

## Setup
Install dependencies

    npm install

Create .env file in root folder and below details

    WORKDIR="/var/www/html/node_mongo_api"  
    PORT=3000  
    MONGO_URL=mongodb://localhost:27017/pokemondb  
    SECRET="hellothisisajwtsecretstringvaluepleasechangeonproduction"

Create mongo collections

    node scripts/createcollections.js

Add dummy data to collections

    node scripts/seed.js

Start server

    npm start
    npm test //running on dev on nodemon

http://127.0.0.1:3000/

### Code Style
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

``` 
npx standard --fix 
```

## Project Structure

### Components
- Users
- Pokemons
- Auth

### Demo 
##### Login 
POST - http://127.0.0.1:3000/login

* email - test@jerry.com
* passowrd - test123

* You will receive a token

##### Get Pokemon 
GET - 127.0.0.1:3000/pokemon/
* Header 
* x-access-token - pass token value received from login request





### Todo

 1. Validations 
 2. Caching 
 3. Error logging 
 4. Check seed data before insert
 5. JWT expiry or blacklist
 6. Passing and inserting data as array for fields
