const { response, request } = require("express");

const setPayment = async (req = request, res = response) => {
  const { email, password } = req.body;
  return res
    .status(200)
    .json({ email: email, password: password, msg: "Payment successful" });
};

module.exports = { setPayment };
