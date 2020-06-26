var express = require('express');
var router = express.Router();
var pool = require('../pool')
var upload = require('../multer')


  router.post('/displaybyids',function(req,res,next){
     console.log(req.body)
    pool.query('select * from independent_school_category where student_independent_class_id=?',[req.body.Id],function(error,result,){
        if(error){
            console.log(error)
            return res.status(500).json([])
        }
        else{
            console.log(result)
            return res.status(200).json(result)
        }
    })
});

//  router.get('/displaybymainandsubid',function(req,res,next){
//     //  console.log(body)
//     pool.query('select * from video_category where main_category_id=1 AND sub_college_category_id=1',function(error,result,){
//         if(error){
//             console.log(error)
//             return res.status(500).json([])
//         }
//         else{
//             return res.status(200).json(result)
//         }
//     })
// });
module.exports = router;