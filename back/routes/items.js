const express = require("express");
const axios =require ('axios');
const router = express.Router();

router.get("/", async (req,res,next)=>{
    try {
        const query=req.query.search
        const getProducts = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
        const products = getProducts.data
        const categories=[]
        const items=[]
        products.available_filters[0].values.forEach(element => {
            categories.push(element.name)
        });
        for (let i = 0; i < 4; i++) {
            const element = products.results[i];
            items.push({
                id:element.id,
                title:element.title,
                price:{
                    currency:element.currency_id,
                    amount:element.price,
                    decimals:element.price.toFixed(2) - Math.floor(element.price)
                },
                picture:element.thumbnail,
                condition:element.condition,
                free_shipping:element.shipping.free_shipping
            })      
        }
        const productsToSend={
            autor:{
                name:req.query.name || null,
                lastName:req.query.lastName || null
            },
            categorias:categories,
            items:items
        }
        res.send(productsToSend)
    
    } catch (error) {
        console.log(error)
        res.status(404).send(error.message)
    }
})

router.get("/:id", async (req,res,next)=>{
   try {
        const id = req.params.id
        const getProduct= await axios.get(`https://api.mercadolibre.com/items/${id}`)
        const getDesription = await axios.get(`https://api.mercadolibre.com/items/${id}/description`)
        const product= getProduct.data
        const desription= getDesription.data
        const item ={
            id: product.id,
            title: product.title,
            price: {
                currency: product.currency_id,
                amount: product.price,
                decimals: product.price.toFixed(2) - Math.floor(product.price)
            },
            picture: product.thumbnail,
            condition: product.condition,
            free_shipping: product.shipping.free_shipping,
            sold_quantity: product.sold_quantity,
            desription: desription.plain_text
        }
        const itemToSend={
            autor:{
                name:req.body.name || null,
                lastName:req.body.lastName || null
            },
            item:item
        }
        res.send(itemToSend)
    } catch (error) {
        console.log(error)
        res.status(404).send(error.message)
    }
})

module.exports=router