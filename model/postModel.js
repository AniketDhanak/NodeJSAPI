const db = require('../database')


 module.exports = class User{
    async createUser(body){
        var myBody = {
            "name": body.name,
            "email": body.email
        } 
        console.log("Aniket"+ body);
        var name = body.name;
        var email = body.email;
         const data = new Promise((resolve,reject)=>{
                         db.query('INSERT INTO users(name, email) VALUES(?,?) ', [name,email] , function (error, results, fields) {
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

     fetchAll(){
        const data = new Promise((resolve,reject)=>{
            db.query('SELECT * FROM users', function (error, results, fields) {
                if (error){
                    console.log("Error: " + err);
                    reject(error);
                }else{
                    resolve(results);
                }
              });
        });
        return data;
    }

    async fetchUserById(body){
        
        console.log("Aniket"+ body);
        var id = body;
         const data = new Promise((resolve,reject)=>{
                         db.query('call getUserDetailById(?)',[id] , function (error, results, fields) {
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

     async fetchUserByName(body){
        var uName = body;
         const data = new Promise((resolve,reject)=>{
                         db.query('call getUserByName(?);',[uName] , function (error, results, fields) {
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
