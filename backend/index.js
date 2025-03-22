const express = require('express');
const {getConnection} = require('./Database/Mongo');

const app = express();
const port = process.env.PORT;
app.use(express.json());

//Rutas
app.get('/', async (req,res) => {
    res.send("Hola Mundo desde API con Metodo GET");
});

app.use('/product', require('./Routes/ProductRoute'));

//Funcion para iniciar el servidor
const startServer = async () => {
    try {
        
        await getConnection();
        console.log("Conexion a la base de datos exitosa");

        
        app.listen(port, () => {
            console.log(`Servidor corriendo en puerto http://localhost:${port}`);
        });

    } catch (error) {
        console.error("Erro al iniciar el servidot ", error.message);
        process.exit(1);
    }
};

startServer();