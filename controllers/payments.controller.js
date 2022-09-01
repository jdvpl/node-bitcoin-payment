const { response, request } = require("express");
const { Client, resources } = require("coinbase-commerce-node");
const { COINBASE_API_KEY } = require("../config");
Client.init(COINBASE_API_KEY);

const { Charge } = resources;

const setPayment = async (req = request, res = response) => {
  const { amount } = req.body;

  try {
    const chargeData = {
      name: "Payment suscription",
      description: "My month suscription",
      organization_name: "ECCA",
      brand_logo_url: "https://rapidfast-53b54.web.app/favicon.ico",
      local_price: {
        amount: amount,
        currency: "USD",
      },
      pricing_type: "fixed_price",
      metadata: {
        customer_id: "1077870326",
        customer_name: "Kakaroto",
      },
      redirect_url: `${process.env.URL_FRONTEND}/success-payment`,
      cancel_url: `${process.env.URL_FRONTEND}/cancel-payment`,
    };

    const charge = await Charge.create(chargeData);
    return res.status(200).json(charge);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const getPaymentStatus = (req, res) => {};

module.exports = { setPayment, getPaymentStatus };
