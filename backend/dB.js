const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://thanvirmuhd:admin@cluster0.mwggbto.mongodb.net/")
.then(()=>{
console.log('connected')
})
.catch(()=>{
    console.log('not connected')
})



const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection=mongoose.model("collection",newSchema)

module.exports=collection


