const express = require("express");
const axios =require ('axios');
const router = express.Router();
const Item = require('../utils/itemsContructor')

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
            const item = new Item(element)
            items.push(item)
        }
        const productsToSend={
            autor:{
                name:req.query.name || null,
                lastName:req.query.lastName || null
            },
            categories:categories,
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
        const getDescription = await axios.get(`https://api.mercadolibre.com/items/${id}/description`)
        const product= getProduct.data
        const description= getDescription.data
        const getCategories = await axios.get(`https://api.mercadolibre.com/categories/${product.category_id}`)
        const categories = getCategories.data.path_from_root.map(category => category.name)
        const item = new Item(product,description)
        const itemToSend={
            autor:{
                name:req.query.name || null,
                lastName:req.query.lastName || null
            },
            categories:categories,
            item:item
        }
        res.send(itemToSend)
    } catch (error) {
        console.log(error)
        res.status(404).send(error.message)
    }
})

module.exports=router