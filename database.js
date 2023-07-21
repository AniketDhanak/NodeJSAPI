const mysql = require("mysql")


//create conneciton
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bynaric@123",
    database: "Demo",
  });


//connect to db
db.connect((err) => {
    if (err) {
        console.log("error in connection" + err.stack);
        return;
    }
    console.log("MySql Connected " + db.threadId);
  });
  
  module.exports =db;

//  db.query('select * from users', (err, res)=>{
//     return console.log(res)
//  });