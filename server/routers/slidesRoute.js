const slidesRouter = require("express").Router();
const { slidesController } = require("../controllers");


slidesRouter.get("", slidesController.getSlides);
slidesRouter.get("/:id", slidesController.getSlidesById);    
slidesRouter.post("", slidesController.createSlides);
slidesRouter.delete("/:id", slidesController.deleteSlides);
slidesRouter.put("/:id", slidesController.updateSlides);

module.exports = { slidesRouter }