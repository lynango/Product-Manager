const Product = require("../models/product.model");

module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body) 
            .then((newProduct) => res.json(newProduct)) 
            .catch((err) => console.log("createProduct has failed"));
    },
    findAllProducts: (req, res) => {
        Product.find({})
        .then((allProducts) => res.json(allProducts))
        .catch((err) => console.log("findAllProducts has failed"));
    },
    findOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then((oneProduct) => res.json(oneProduct)) 
        .catch((err) => console.log("findOneProduct has failed"));
    },
    updateProduct: (req, res) => {
        Product.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true })
        .then((updatedProduct) => res.json(updatedProduct))
        .catch((err) => console.log("updateProduct has failed"));
    },
    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch((err) => console.log("deleteProduct has failed"));
    }
}