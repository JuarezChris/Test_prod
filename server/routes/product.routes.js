const ProductControllers = require("../controllers/product.controllers");


module.exports = (app) => {
    app.get("/api/products", ProductControllers.findAll);
    app.get("/api/product/:id", ProductControllers.findOne);
    app.post("/api/product", ProductControllers.create);
};
