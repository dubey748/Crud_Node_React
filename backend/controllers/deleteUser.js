const User = require('../models/user')
const deleteUser=async (req,res)=>{
    try{
        const data = await User.findById(req.params.id) 
       
        const save = await data.remove()
        res.json(save)   
    }catch(err){
        res.send('Error')
    }
}
module.exports=deleteUser