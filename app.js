const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.json());
app.use(bodyParser.json());

var db = require('./database.js');

const morgan = require("morgan");



//get routes
const postRoutes = require('./routes/post');


//custom middleware
const myOwnMiddleWare = (req,res,next)=> {
    console.log("Middleware applied");
    next();
} 

//middlewares
app.use(morgan('dev'));
app.use(myOwnMiddleWare);
app.use(bodyParser.json());



//routers
app.use("/", postRoutes);
app.use("/postById", postRoutes);
app.use("/getUsersByName", postRoutes);
app.use("/createUser", postRoutes);


const port = 3000;
app.listen(port, ()=>{
    console.log('Node Js Project is running');
});


  
