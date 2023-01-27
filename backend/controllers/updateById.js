
// patch
const User = require('../models/user')
const updateByUserId=async (req,res)=>{
    try{
        const data = await User.findById(req.params.id) 
        data.fname = req.body.fname
        const save = await data.save()
        res.json(save)   
    }catch(err){
        res.send('Error')
    }
}
module.exports=updateByUserId