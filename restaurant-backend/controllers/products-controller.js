Product = require('./../models/products-model');

exports.getProducts = function (req, res) {
  Product.get(function (err, products) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Products retrieved successfully",
      data: products
    });
  });
};

exports.new = function (req, res) {
  var product = new Product();
  product.name = req.body.name;
  product.price = req.body.price;
  product.category = req.body.category;
  product.image = req.body.image;
  if (req.body.description) product.description = req.body.description;
  if (req.body.rating) product.rating = req.body.rating;

  product.save(function (err) {
    res.json({
      message: 'New product created!',
      data: product
    });
  });
};

exports.view = function (req, res) {
  Product.findById(req.params.product_id, function (err, product) {
    if (err)
    res.send(err);
    res.json({
      message: 'Product details loading..',
      data: product
    });
  });
};

exports.update = function (req, res) {
  Product.findById(req.params.product_id, function (err, product) {
    if (err)
    res.send(err);
    product.name = req.body.name ? req.body.name : product.name;
    product.gender = req.body.gender;
    product.email = req.body.email;
    product.phone = req.body.phone;

    product.save(function (err) {
      if (err)
      res.json(err);
      res.json({
        message: 'Product Info updated',
        data: product
      });
    });
  });
};

exports.delete = function (req, res) {
  Product.remove({
    _id: req.params.product_id
  }, function (err, product) {
    if (err)
    res.send(err);
    res.json({
      status: "success",
      message: 'Product deleted'
    });
  });
};