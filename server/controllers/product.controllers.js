const product = require('../models/product.models');
const Product = require('../models/product.models');

module.exports = {
    findAll: (req, res) => {
        Product.find()
            .then((allProducts) => res.json(allProducts))
            .catch((err) => 
                res.json({message: "Something went wrong at find()", error: err})
            );
    },
    findOne: (req, res) => {
        Product.findById(req.params.id)
            .then((product) => res.json(product))
            .catch((err) => 
                res.json({message: "Something went wrong at findOne()", error: err})
            );
    },
    create: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => 
                res.json({message: "Something went wrong at create()", error: err})
            );
    },

}