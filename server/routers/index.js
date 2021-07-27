const router = require("express").Router();
const { userRouter } = require("./userRoute");
const { newsRouter } = require("./newsRoute");
const { slidesRouter } = require("./slidesRoute");
const { productsRouter } = require("./productsRoute");
const { aboutsRouter } = require("./aboutsRoute");
const { contactsRouter } = require("./contactsRoute");
const { homeRouter } = require("./homeRoute");
const { categoriesRouter } = require("./categoriesRoute");

router.use("/users", userRouter); 
router.use("/news", newsRouter); 
router.use("/slides", slidesRouter);
router.use("/products", productsRouter); 
router.use("/abouts", aboutsRouter);
router.use("/contacts", contactsRouter);
router.use("/home",     homeRouter);
router.use("/categories", categoriesRouter); 

module.exports = { router };