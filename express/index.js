// import x from y  -> ES module method
// const express = require('express')   -> common js method.

const express = require("express");
//we got access to express function
const bodyParser = require('body-parser');

//import dotenv
const dotenv = require("dotenv");
dotenv.config();    //loads the variables from .env

const app = express();
//app is new express app object.
app.use(bodyParser.json())  //for parsing application/json
app.use(bodyParser.urlencoded({extended: true}))    // for parsing application/x-www-form-urlencoded
const PORT = process.env.PORT

//1. using app object, bind it to a port for socket connection.

//let's define some endpoints
app.get('/ping', (req, res)=>{
    //if someone hits localhost:3000, we run this callback.
    //-> req contains details about incoming req, like query params, body params.
    //-> res object is what we send from here.
    console.log('Request received on /ping');

    console.log('data coming from client in body', req.body);

    console.log('data from client in query', req.query);
    return res.json({message: 'Heyyyaaa Ajeet!!!'})
})

app.post('/ping/:name', (req, res) => {
    console.log('post req received in ping with data', req.params); //post req received in ping with data { name: 'ajeet' }

    return res.json({message: 'data received'});
})


app.listen(PORT, () => {
    console.log('Server started at port ', PORT);
});
/*
takes 2 params: 
 -> port number & 
 -> callback (runs when we successfully bind to our port and start listening for new connection.)useful for doing initial things like connecting to DB when server starts.
*/

/**
 * three ways some client can send us data
 * 1. URL params: /ping/2 or /products/34 or /user/ajeet
 * 2. query params: /phones?sort=ascending&rating=3         -> can we defined in runtime
 * 3. body params: an object passes in req with API which can contain data in different forms.
 * 
 * 1,2 are security risk prone, they're public.
 */

/**
 * we can't receive data from client directly because the value and data format of body is totally defined by client which can be unsecure also, hence we use middleware to parse it before using..
 * so initially body is undefined then populated by middleware like body-parser or multer.
 */


/**
 * passing dynamic data in URL params
 * /ping/user/:id
 * value after : is dynamic.
 * 
 * --> we can pass something in headers as well and access that in req.headers
 */

/**
 * process, is a global object, specifically for environment variables, it has a property named env. it looks up in operating system, it picks variables from there, if not found there, then it looks up in our project env file. so OS is > local.
 */