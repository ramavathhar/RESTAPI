const express=require("express");
const app=express();
const connectDB=require("./db/connect");
const product_routes=require("./routes/products");
require("dotenv").config();
const PORT=process.env.PORT||3000;
app.get("/",(req,res)=>{
    res.send("Hi,Iam live");
});
app.use("/api/products",product_routes);
const start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(' ${PORT} yes iam connected');
        });
    }
    catch(error){
        console.log(error);
    }
};
start();
