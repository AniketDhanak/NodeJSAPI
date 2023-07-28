const jwt = require('jsonwebtoken');
require("dotenv").config();


module.exports = function verifyToken(req,res,next){
  const header = req.headers['authorization'];
  if(typeof header !== 'undefined'){
    const bearer = header.split(" ");
    const token = bearer[1];
    console.log(token);
    req.token = token;
    const id = jwt.decode(token);
    console.log(id);
    next();
    // res.json({'id': id})

  }else{
    var data1 = {
      'status' : 100,
      'message': "Failure",
      'data' : "Token Invalid"
    };
    res.status(401);
  res.json(data1);    
  }
}