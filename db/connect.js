const mongoose=require("mongoose");
uri="mongodb+srv://b20ec027:eUsm93qqrC6lVG1r@cluster0.g6tqcfe.mongodb.net/Cluster0?retryWrites=true&w=majority"
const  connectDB=(uri)=>{
    console.log("connect db");
    return mongoose.connect(uri,{
        useNewUrlparser:true,
        useUnifiedTopology:true,

    });
};
module.exports=connectDB;