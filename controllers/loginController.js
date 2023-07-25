const Login = require('../model/loginModel');
const login = new Login();

const { validationResult } = require('express-validator');


exports.getOtp = (req,res, next)=>{
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
        let data = login.login(req.body).then((result)=>{

            var data1 = {
                'status' : 200,
                'message': "Success",
                'data' : "OTP Sent"
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

exports.verifyOtp = (req,res, next)=>{
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
        let data = login.verifyOtp(req.body).then((result)=>{

            var otp = result[0][0]['otp'];
            if(otp == req.body.otp){
                var data1 = {
                    'status' : 200,
                    'message': "Success",
                    'data' : result[0][0]
                  };
                res.json(data1);
            }else{
                var data1 = {
                    'status' : 200,
                    'message': "Invalid OTP",
                    'data' : ""
                  };
                res.json(data1);
            }
        
            
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