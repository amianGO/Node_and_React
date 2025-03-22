const {Router, json} = require('express');
const {validationResult, check} = require('express-validator');
const Product = require("../Models/Product");

const router = Router()

router.get('/', async (req,res) => {
    try {
        const products = await Product.find();
        res.json(products)
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"Error al Obtener los productos"});
    }
})

module.exports = router;
