const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/product-list", {
        prods: rows,
        pageTitle: "All Products",
        path: "/products",
      });
    })
    .catch((err) => console.error(err));
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
      });
    })
    .catch((err) => console.error(err));
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};

exports.getProduct = (req, res, next) => {
  const proId = req.params.productId;
  Product.findById(proId);
  then(([product]) => {
    res.render("shop/product-detail", {
      path: "/products",
      pageTitle: product[0].title,
      product: product[0],
    });
  }).catch((err) => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.proId;
  Product.findById(prodId, (product) => {
    Cart.addProductToCart(product.prodId, product.price);
  });
  res.redirect("/cart");
};
