const express = require("express");
const ds = require("../dataresourses/dataresourses");
const routers = express.Router();
routers.get("/",function(req,res){
const products = ds.fetchProducts();
res.status(200).json(products)
});
routers.get("/:id",function(req,res){
const productid = req.params.id;
const product =ds.fetchProductsById(productid);
if(product != undefined){
    res.status(200).json(product);
}else{
    res.status(404).send();
}
});
module.exports=routers;