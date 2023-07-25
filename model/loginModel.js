const db = require('../database')
const jwt = require('jsonwebtoken');

module.exports = class Login{

    async login(body){
        console.log("Aniket"+ body);
        var val = Math.floor(1000 + Math.random() * 9000);
        var email = body.email;
        var otp = val;
        var token = await jwt.sign({ id: email }, process.env.SECRET_KEY, {
            expiresIn: process.env.JWT_EXPIRE,
        });
         const data = new Promise((resolve,reject)=>{
                         db.query('call getOTP(?,?,?)', [otp,email,token] , function (error, results, fields) {
                 if (error){
                     console.log("Error: " + error);
                     reject(error);
                 }else{
                     resolve(results);
                 }
               });
            
         });
         return data;
     }

     async verifyOtp(body){
        console.log("Aniket"+ body);
        var email = body.email;
         const data = new Promise((resolve,reject)=>{
                         db.query('call verifyOtp(?)', [email] , function (error, results, fields) {
                 if (error){
                     console.log("Error: " + error);
                     reject(error);
                 }else{
                     resolve(results);
                 }
               });
            
         });
         return data;
     }



}