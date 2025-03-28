const { Router, json } = require("express");
const { validationResult, check } = require("express-validator");
const Product = require("../Models/Product");

const router = Router();

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al Obtener los productos" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al Obtener el Producto." });
    }
});

router.post(
    "/",

    [
        check("nombre", "El Nombre Es Requerido.").notEmpty(),
        check("serial", "El serial Es Requerido y Unico").notEmpty(),
        check("img", "Se Requiere una Imagen para el Producto").notEmpty(),
        check("state", "El campo debe ser IsStock  o NoStock").isIn([
            "IsStock",
            "NoStock",
        ]),
    ],

    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()})
            }

            let {
                nombre,
                serial,
                img,
                state,
            } = req.body;

            const product = new Product({
                nombre,
                serial,
                img,
                state,
            });
            await product.save();
            res.status(201).json(product);
        } catch (error) { 
            console.error(error);
            res.status(500).json({ error: "Error al Crear el Producto." });
        }
    }
);

module.exports = router;
