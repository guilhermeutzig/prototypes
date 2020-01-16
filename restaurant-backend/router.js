const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    status: 'API is now working',
    message: 'Welcome'
  });
});


var productController = require('./controllers/products-controller');

router.route('/products')
    .get(productController.getProducts)
    .post(productController.new);

router.route('/products/:product_id')
    .get(productController.view)
    .patch(productController.update)
    .put(productController.update)
    .delete(productController.delete);

module.exports = router;