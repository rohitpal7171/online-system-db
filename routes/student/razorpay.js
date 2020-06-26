var express = require('express');
var router = express.Router();
var pool = require('../pool')
var upload = require('../multer')
const Razorpay = require('razorpay')
const shortid = require('shortid')

const razorpay = new Razorpay({
    key_id: 'rzp_test_2rlZvGlhW2VWAP',
    key_secret :'5bdueYRll5IqkxPiGpT5bCEZ',
})

  router.post('/something', async function(req,res){

    const payment_capture =1
    const amount = 5
    const currency ='INR'

    const options ={ 
        amount: amount * 100,
        currency,
        receipt : shortid.generate(),
        payment_capture
     }
     
     try{

   
    const response = await razorpay.orders.create( options )
    console.log( response )
    res.json({
        id: response.id,
        currency: response.currency,
        amount: response.amount
    })
} catch( error ){
    console.log( error )
}
  })

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