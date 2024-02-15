// import x from y  -> ES module method
// const express = require('express')   -> common js method.

const express = require("express");
//we got access to express function
const app = express();
//app is new express app object.

const PORT = 3000;

//1. using app object, bind it to a port for socket connection.

//let's define some endpoints
app.get('/ping', (req, res)=>{
    //if someone hits localhost:3000, we run this callback.
    //-> req contains details about incoming req, like query params, body params.
    //-> res object is what we send from here.
    console.log('Request received on /ping');
    return res.json({message: 'Heyyyaaa!!!'})
})


app.listen(3000, () => {
    console.log('Server started at port ', PORT);
});
/*
takes 2 params: 
 -> port number & 
 -> callback (runs when we successfully bind to our port and start listening for new connection.)useful for doing initial things like connecting to DB when server starts.
*/