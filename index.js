const express = require("express");
const cors = require("cors");
require("dotenv").config();

//Crear el servidor express
const app = express();

//Directorio público
app.use(express.static("public"));

//CORS
app.use(cors());

//Lectura y parseo
app.use(express.json());

//Rutas

app.use("/api/auth", require("./routes/auth"));

//Levantar servidor express
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
