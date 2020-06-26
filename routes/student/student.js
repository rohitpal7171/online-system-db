var express = require('express');
var router = express.Router();
var pool = require('../pool')
var upload = require('../multer')

router.post('/studentsignup',function(req,res,next){
    console.log(req.body)

    pool.query('insert into student_independent_info(student_independent_name,student_independent_gender,student_independent_email,student_independent_phoneno,student_independent_password,student_independent_address)values(?,?,?,?,?,?)',[req.body.userName,req.body.userGender,req.body.userEmail,req.body.userPhoneNo,req.body.userPassword,req.body.userAddress],function(error,result){
      
        if(error)

        {
            return res.status(500).json({RESULT:false})
            console.log(error)
        }
        else
        {
            return res.status(200).json({RESULT:true})
        }
    })

});







router.post('/check1',function(req,res,next){

    pool.query('SELECT * FROM student_independent_info WHERE student_independent_email =? and student_independent_password=?',[req.body.userId,req.body.userPassword],function(error,result){
        if(error)
        {
            return res.status(500).json({RESULT:false})
            console.log(error)
        }
        else 
        { 
            if(result.length == 0) 
            {
                return res.status(500).json({RESULT:false})
            }
            else{
                console.log(result)
                return res.status(200).json({RESULT:true, data:result})
               
        }
    }
    })
});



router.get('/displaystudent',function(req,res,next){
 
    pool.query('select * from student_independent_info',function(error,result,){
        if(error){
            console.log(error)
            return res.status(500).json([])
        }
        else{
            return res.status(200).json(result)
        }
    })
});

router.post('/displaystudentbyid',function(req,res,next){
 
    pool.query('select * from student_independent_info where student_independent_info=?',[req.body.Id],function(error,result,){
        if(error){
            console.log(error)
            return res.status(500).json([])
        }
        else{
            return res.status(200).json(result)
        }
    })
});

router.get('/class',function(req,res,next){
 
    pool.query('select * from student_independent_class ',function(error,result,){
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