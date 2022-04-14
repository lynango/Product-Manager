const ProductController = require("../controllers/Product.controller");

module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products/:id", ProductController.findOneProduct);
    app.put("/api/Products/:id", ProductController.updateProduct);
    app.delete("/api/Products/:id", ProductController.deleteProduct);
}