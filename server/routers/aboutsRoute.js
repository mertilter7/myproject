const aboutsRouter = require("express").Router();
const { aboutsController } = require("../controllers");

aboutsRouter.get("" , aboutsController.getAbouts)
aboutsRouter.post("" , aboutsController.createAbouts)
aboutsRouter.get("/:id", aboutsController.getAboutById)
aboutsRouter.delete("/:id", aboutsController.deleteAbouts)
aboutsRouter.put("/:id" ,aboutsController.updateAbouts)

module.exports = { aboutsRouter }