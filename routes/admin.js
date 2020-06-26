var express = require('express');
var router = express.Router();
var pool=require('./pool')

router.post('/checkadminlogin',function(req,res,next){
    console.log(req.body)
    pool.query('select *  from admin where admin_id=? and admin_password=?',[req.body.adminId,req.body.adminPassword],function(error,result){
      if(error){
        console.log(error)
        return res.status(500).json({RESULT:false})
      }
      else{
          if(result.length==0)
        return res.status(200).json({RESULT:false})
        else     
        return res.status(200).json({RESULT:result})
       
      }
    })
  })

  router.get('/displayall',function(req,res,next){
 
    pool.query('select * from admin',function(error,result){
        if(error){
            console.log(error)
            return res.status(500).json([])
        }
        else{
            return res.status(200).json(result)
        }
    })
});


module.exports = router;
  