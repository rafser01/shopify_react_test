var express = require("express");
var router = express.Router();
const Shopify = require("shopify-api-node");

const SHOP_NAME = "sd-shop-pro";
const SHOPIFY_API_KEY = "2cb70e059604b4e2792a4b6570efb70d";
const SHOPIFY_API_PASSWORD = "0206a6f90142477232d7546ccf4e0506";

const shopify = new Shopify({
  shopName: SHOP_NAME,
  apiKey: SHOPIFY_API_KEY,
  password: SHOPIFY_API_PASSWORD
});

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/list", function(req, res, next) {
  shopify.product
    .list({ limit: 10 })
    .then(row => {
      if (row.length > 0) {
        res.send({ success: true, products: row });
      } else {
        res.send({
          success: false,
          products: "Product not found please tray again"
        });
      }
    })
    .catch(console.error);
  console.log("list ");
});

router.get("/orders/list", function(req, res, next) {
  shopify.order
    .list({ limit: 10 })
    .then(orders => {
      if (orders.length > 0) {
        res.send({ success: true, orders: orders });
      } else {
        res.send({
          success: false,
          orders: "orders not found please tray again"
        });
      }
    })
    .catch(console.error);
});

module.exports = router;
