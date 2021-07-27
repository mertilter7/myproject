const productsRouter = require("express").Router();
const { productsController } = require("../controllers");

// productsRouter.get("", productsController.getProducts);
productsRouter.get("/:id", productsController.getProductsById);
productsRouter.post("", productsController.createProducts);
productsRouter.delete("/:id", productsController.deleteProducts);
productsRouter.put("/:id", productsController.updateProducts);

module.exports = { productsRouter };
