const express = require("express");
const axios =require ('axios')
const router = express.Router();

router.get("/",(req,res,next)=>{
    const query=req.query.search
    console.log("query",req.body)
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    .then(respuesta => respuesta.data)
    .then(products =>{
        const categories=[]
        const items=[]
        products.available_filters[0].values.forEach(element => {
            categories.push(element.name)
        });
        products.results.forEach(element =>{
            items.push({
                id:element.id,
                title:element.title,
                price:{
                    currency:element.currency_id,
                    amount:Math.floor(element.price),
                    decimals:element.price.toFixed(2) - Math.floor(element.price)
                },
                picture:element.thumbnail,
                condition:element.condition,
                free_shipping:element.shipping.free_shipping
            })
        })
        const productsToSend={
            autor:{
                name:req.body.name || null,
                lastName:req.body.lastName || null
            },
            categorias:categories,
            items:items
        }
        res.send(productsToSend)
    })
    .catch(e=>console.log(e))
})

module.exports=router