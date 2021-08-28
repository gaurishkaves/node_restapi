# NodeJS MongoDB Rest API !
Rest API developed using 

 1. Node JS 
 2. Express  
 3. MongoDB 
 4. Moongose 
 5. JWT
 6. Express - Validator
 7. Redis - Caching
 

## Setup
Install dependencies

    npm install
    npm install --dev

Create .env file in root folder and below details

    WORKDIR="/var/www/html/node_mongo_api"  
    PORT=3000  
    MONGO_URL=mongodb://localhost:27017/pokemondb  
    SECRET="hellothisisajwtsecretstringvaluepleasechangeonproduction"
    REDIS_HOST='127.0.0.1'
    REDIS_PORT='6379'

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


##### API's
* GET /pokemon
* POST /pokemon
* GET /pokemon/:id
* PUT /pokemon/:id
* DELETE /pokemon/:id


##### Test
```
mocha testcases/users.js

mocha 

```

#### Coverage Test
```
    npm test
```







