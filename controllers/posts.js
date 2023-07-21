
const User = require('../model/postModel')
const user = new User();




//get user by id
exports.getPostById = (req,res, next)=>{
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

//get All Users
exports.getPosts =  (req,res, next)=>{
    user.fetchAll().then(result =>{
        var data1 = {
            'status' : 200,
            'message': "Success",
            'data' : result
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



//create  users
exports.createUser = (req,res, next)=>{
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

//get user by name
exports.getUserByName = (req,res, next)=>{
    var userName = req.query.name;
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