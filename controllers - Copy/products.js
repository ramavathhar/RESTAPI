const Product=require("../models/products")
const getallproducts=async(req,res)=>{
    const {company,name,sort,select}=req.query;
    const queryObject={};
    if(company){
        queryObject.company=company;
    }
    if(name){
        queryObject.name={$regex:name,$options:"i"};
    }
    let apiData=Product.find(queryObject);
    if(sort){
        // let sortFix=sort.replace(","," ");
        let sortFix=sort.split(",").join(" ");
        apiData=apiData.sort(sortFix);
    }
      if(select){
        // let selectFix=select.replace(","," ");
        let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix);
    }
    let page=Number(req.query.page)||1;
    let limit=Number(req.query.limit)||3;

    let skip=(page-1)*limit;
    apiData=apiData.skip(skip).limit(limit)


    console.log(queryObject);
    const mydata =await apiData;
    res.status(200).json({mydata,nbHits:mydata.length});
}
const getallproductstesting=async(req,res)=>{
    const mydata=await Product.find(req.query).skip(2);
    //  const mydata=await Product.find(req.query).select("-name");
    res.status(200).json({mydata});
}
module.exports={getallproducts,getallproductstesting};