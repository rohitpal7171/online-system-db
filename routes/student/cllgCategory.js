var express = require('express');
var router = express.Router();
var pool = require('../pool')
var upload = require('../multer')



router.post('/displaycategorybymainid',function(req,res,next){
     console.log(req.body)
    // pool.query('select * from schoolmodule where schoolId=?',[req.body.schoolId],function(error,result){
        pool.query('select a.sub_college_category_id,b.main_category_name,a.sub_college_category_name,a.sub_college_category_image from sub_college_category a JOIN main_category b ON a.main_category_id=b.main_category_id where a.main_category_id= ?',[req.body.Id],function(error,result){
      if(error){
        console.log(error)
        return res.status(500).json([])
      }
      else{
        // console.log(result)
        return res.status(200).json(result)
      }
    })
  })

  router.get('/displaysubcategory',function(req,res,next){
 
    pool.query('select * from sub_college_category',function(error,result,){
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