//Put
const User = require('../models/user')
const updateUser=async (req,res)=>{
    try{
        const data = await User.findById(req.params.id) 
        data.fname = req.body.fname
        data.lname = req.body.lname
        const save = await data.save()
        res.json(save)   
    }catch(err){
        res.send('Error')
    }
}
module.exports=updateUser