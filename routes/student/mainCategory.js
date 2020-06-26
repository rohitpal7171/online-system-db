var express = require('express');
var router = express.Router();
var pool = require('../pool')
var upload = require('../multer')



router.get('/displaymaincategory',function(req,res,next){
 
    pool.query('select * from main_category',function(error,result,){
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