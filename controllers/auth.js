const { response, request } = require("express");

const crearUsuario = (req = request, res = response) => {
  const { email, name, password } = req.body;

  return res.json({
    ok: true,
    msg: "Crear usuario /new",
  });
};

const loginUsuario = (req = request, res = response) => {
  const { email, password } = req.body;

  return res.json({
    ok: true,
    msg: "Login de usuario /",
  });
};

const revalidarToken = (req = request, res = response) => {
  return res.json({
    ok: true,
    msg: "Renew",
  });
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };
