const contactsRouter = require("express").Router();
const {contactsController } = require("../controllers");

contactsRouter.get("" , contactsController.getContact)
contactsRouter.post("" , contactsController.createContact)
contactsRouter.get("/:id", contactsController.getContactById)
contactsRouter.delete("/:id", contactsController.deleteContact)
contactsRouter.put("/:id" ,contactsController.updateContact)

module.exports = { contactsRouter }