const User = require('../models/user')
const addUser=async (req,res)=>{
    const data = new User({
        fname:req.body.fname,
        lname:req.body.lname
        
    })

    try{
        const save =  await data.save() 
        res.json(save)
    }catch(err){
        res.send('Error')
    }
}
module.exports=addUser