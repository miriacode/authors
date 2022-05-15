const express = require("express");
const cors = require("cors");
const app = express();

//Para usar Json y obtener datos de URL
app.use( express.json(), express.urlencoded({ extended: true }) );

//Permitir accesar desde un origen distinto
app.use (
    cors( {
        origin: "http://localhost:3000"
    })
)

//Inicilizamos BD
require("./server/config/mongoose.config");

//Importamos rutas
const myRoutes = require("./server/routes/author.routes");
myRoutes(app);

//Ejecutamos server
app.listen(8000, () => console.log("Server is ready!"));