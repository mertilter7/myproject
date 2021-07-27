const categoriesRouter = require("express").Router();
const { categoriesController } = require("../controllers");

categoriesRouter.get("" , categoriesController.getCategories)
categoriesRouter.post("" , categoriesController.createCategories)
categoriesRouter.get("/:id", categoriesController.getCategoriesById)
categoriesRouter.delete("/:id", categoriesController.deleteCategories)
categoriesRouter.put("/:id" , categoriesController.updateCategories)

module.exports = { categoriesRouter }