var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: Buffer,
    required: true,
    contentType: String
  },
  rating: {
    type: Number,
    required: false
  },
  description: {
    type: String,
    required: false
  }
});

var Product = module.exports = mongoose.model('product', productSchema);

module.exports.get = function (callback, limit) {
  Product.find(callback).limit(limit);
}