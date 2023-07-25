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
app.use("/api/postById", postRoutes);
app.use("/api/getUsersByName", postRoutes);
app.use("/api/createUser", postRoutes);
app.use("/api/updateEmail", postRoutes);
app.use("/api/deleteUser", postRoutes);

app.use("/api/getOtp", postRoutes);
app.use("/api/verifyOtp", postRoutes);


const port = 3000;
app.listen(port, ()=>{
    console.log('Node Js Project is running');
});



  
