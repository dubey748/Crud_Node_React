const express=require('express')
const mongoose=require('mongoose')
const app=express()
const cors=require('cors')
const userRouter=require('./routes/users')
const DB='mongodb+srv://dubey748:Dubey@748@cluster0.wm3zhux.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', false)
mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{

    console.log("Database connected...")
}).catch((err)=>{
    console.log(err)
})
app.use(express.json())
app.use(cors());
app.use('/users', userRouter)

app.listen(748, () => {
    
    console.log("Connected to backend.");
});