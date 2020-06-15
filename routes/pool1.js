
var mysql=require('mysql')

var pool=mysql.createPool({
    host:'sql111.epizy.com',
    port:'3306',
    user:'epiz_26010020',
    password:'8A2AtbHpiiiQ',
    database:'epiz_26010020_online_system',
    connectionlimit:'100',
    multipleStatement:'true',
  
  })

  module.exports=pool;