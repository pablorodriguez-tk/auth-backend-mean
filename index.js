const express = require("express");

//Crear el servidor express
const app = express();
const cors = require("cors");

//CORS
app.use(cors());

//Lectura y parseo
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));

//Levantar servidor express
app.listen(4000, () => {
  console.log(`Servidor corriendo en el puerto ${4000}`);
});
