const userRouter = require("express").Router();
const { userController } = require("../controllers");

userRouter.get("", userController.getUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.post("", userController.createUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.put("/:id", userController.updateUser);

module.exports = { userRouter };
