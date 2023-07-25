const jwt = require('jsonwebtoken');
require("dotenv").config();


//verify token
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log ("Aniket:",token);
    const decodedToken = jwt.verify(token, jsonWebToken);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      res.status(401).json({
        error: new Error('Token invalid!')
      });  
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};