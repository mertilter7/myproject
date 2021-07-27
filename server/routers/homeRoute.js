const homeRouter = require("express").Router();
const { homeController } = require("../controllers");

homeRouter.get("", homeController.getHomeText);
homeRouter.get("/:id", homeController.getHomeTextById);    
homeRouter.post("", homeController.createHomeText);
homeRouter.delete("/:id", homeController.deleteHomeText);
homeRouter.put("/:id", homeController.updateHomeText);


module.exports = { homeRouter };
