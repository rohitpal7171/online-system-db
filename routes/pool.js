
// var mysql=require('mysql')
// var pool=mysql.createPool({
//     host:'182.50.133.89',
//     port:'3306',
//     user:'online_system',
//     password:'onlinesystem123!',
//     database:'online_system',
//     connectionlimit:'100',
//     multipleStatement:'true',

//   })
//   module.exports=pool;

var mysql=require('mysql')
var pool=mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123',
    database:'online_system',
    connectionlimit:'100',
    multipleStatement:'true',

  })
  module.exports=pool;
