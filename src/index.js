const express =require("express");
const productsRouters = require("./routers/products");
const APIserver = express();
APIserver.use("/products",productsRouters);
APIserver.get("/",function(req,res){
res.send("Hello Form Express");
});
APIserver.listen(3000,()=>console.log("API SERVER STARTED"))