const db = require('../database')


 module.exports = class User{

    //create user
    async createUser(body){
        console.log("Aniket"+ body);
        var name = body.name;
        var email = body.email;
         const data = new Promise((resolve,reject)=>{
                         db.query('call createUser(?,?)', [name,email] , function (error, results, fields) {
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

     //get all users
     fetchAll(body){

        var index = (body.pageIndex - 1);
        var pageIndex = (Math.abs(index) * 10);
        console.log("page: "+ (pageIndex));
        const data = new Promise((resolve,reject)=>{

            db.query('call getAllUsers(?)',[pageIndex], function (error, results, fields) {
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

    //get user by id
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

     //get users by name
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

     //update userEmail
     async updateEmail(body){
        var myBody = {
            "name": body.name,
            "email": body.email
        } 
        console.log("Aniket"+ body);
        var id = body.id;
        var email = body.email;
         const data = new Promise((resolve,reject)=>{
                         db.query('call updateEmail(?,?)', [email, id] , function (error, results, fields) {
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

     //delete user
     async deleteUser(body){
        var id = body.id;
         const data = new Promise((resolve,reject)=>{
                         db.query('call deleteUser(?)', [id] , function (error, results, fields) {
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
