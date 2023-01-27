
const User = require('../models/user')
const getUser=async (req,res)=>{
    try{
        const data = await User.findById(req.params.id)
        res.json(data)
    }catch(err){
     res.send('Error ' + err)
    }
}
module.exports=getUser