const { Router } = require("express");
const { check } = require("express-validator");
const { setPayment } = require("../controllers/payments.controller");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.post(
  "/",
  [
    check("email", "El correo es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validarCampos,
  ],
  setPayment
);

module.exports = router;
