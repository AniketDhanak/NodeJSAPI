
const User = require('../model/postModel')
const user = new User();
const jwt = require('jsonwebtoken');

const { validationResult } = require('express-validator');



//get user by id
exports.getPostById = (req,res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var data1 = {
            'status' : 100,
            'message': "Please enter id",
            'data' : ""
          };
        res.json(data1);
    }else {
        let data = user.fetchUserById(req.query.id).then((result)=>{
            var data1 = {
                'status' : 200,
                'message': "Success",
                'data' : result[0]
              };
            res.json(data1);
        }).catch((error)=>{
            console.log(error);
            var data1 = {
                'status' : 200,
                'message': "Failre",
                'data' : error
              };
              res.json(data1);
        });
    }
   
}

//get All Users
exports.getPosts =  (req,res, next)=>{
    jwt.verify(req.token, process.env.SECRET_KEY, (err, authData)=>{
        // console.log("Auth: " +authData[0]);
        if(err){
            var data1 = {
                'status' : 200,
                'message': "Failure",
                'data' : "Token Invalid"
              };
              res.status(401);
            res.json(data1);    
        }else{
            const body = req.query;
    user.fetchAll(body).then(result =>{
        var data1 = {
            'status' : 200,
            'message': "Success",
            'data' : result[0]
          };
        res.json(data1);    
    }).catch(error=>{
        var data1 = {
            'status' : 200,
            'message': "Failure",
            'data' : "Something went wrong"
          };
        res.json(data1);    
    });
        }
    }
    )
    
    

}



//create  users
exports.createUser = (req,res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const missingParam = errors.errors[0]["path"];
        var data1 = {
            'status' : 100,
            'message': "Missing parameter: " + missingParam,
            'data' : ""
          };
        res.json(data1);
    }else{
    let data = user.createUser(req.body).then((result)=>{
        var data1 = {
            'status' : 200,
            'message': "Success",
            'data' : "User Created Successfully"
          };
        res.json(data1);
    }).catch((error)=>{
        console.log(error);
        var data1 = {
            'status' : 400,
            'message': "Failure",
            'data' : error
          };
          res.json(data1);
    });
}
}

//get user by name
exports.getUserByName = (req,res, next)=>{
    jwt.verify(req.token, process.env.SECRET_KEY, (err, authData)=>{
        
        if(err){
            console.log("Auth: " +err);
            var data1 = {
                'status' : 200,
                'message': "Failure",
                'data' : "Token Invalid Controller"
              };
              res.status(401);
            res.json(data1);    
        }else{
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const missingParam = errors.errors[0]["path"];
                var data1 = {
                    'status' : 100,
                    'message': "Missing parameter: "+ missingParam,
                    'data' : ""
                  };
                res.json(data1);
            }else{
            var userName = req.query.email;
            console.log(userName);
            let data = user.fetchUserByName(userName).then((result)=>{
                var data1 = {
                    'status' : 200,
                    'message': "Success",
                    'data' : result[0]
                  };
                res.json(data1);
            }).catch((error)=>{
                console.log(error);
                var data1 = {
                    'status' : 200,
                    'message': "Failre",
                    'data' : error
                  };
                  res.json(data1);
            });
            }
        }})
}


//update email id
exports.updateEmail = (req,res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const missingParam = errors.errors[0]["path"];
        var data1 = {
            'status' : 100,
            'message': "Missing parameter: "+ missingParam,
            'data' : ""
          };
        res.json(data1);
    }else{
    var body = req.body;
    let data = user.updateEmail(body).then((result)=>{
        var data1 = {
            'status' : 200,
            'message': "Update Successfull",
            'data' : result[0]??""
          };
        res.json(data1);
    }).catch((error)=>{
        console.log(error);
        var data1 = {
            'status' : 200,
            'message': "Failre",
            'data' : error
          };
          res.json(data1);
    });
}
}


//delete user with id
exports.deleteUser = (req,res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const missingParam = errors.errors[0]["path"];
        var data1 = {
            'status' : 100,
            'message': "Missing parameter: "+ missingParam,
            'data' : ""
          };
        res.json(data1);
    }else{
    var body = req.body;
    let data = user.deleteUser(body).then((result)=>{
        var data1 = {
            'status' : 200,
            'message': "Delete Successfull",
            'data' : result[0]??""
          };
        res.json(data1);
    }).catch((error)=>{
        console.log(error);
        var data1 = {
            'status' : 200,
            'message': "Failre",
            'data' : error
          };
          res.json(data1);
    });
}
}
