const { Router } = require("express");
const {
  crearUsuario,
  revalidarToken,
  loginUsuario,
} = require("../controllers/auth");

const router = Router();

//Crear un usuario
router.post("/new", crearUsuario);

//Login de usuario
router.post("/", loginUsuario);

//Validar y revalidar token
router.get("/renew", revalidarToken);

module.exports = router;
