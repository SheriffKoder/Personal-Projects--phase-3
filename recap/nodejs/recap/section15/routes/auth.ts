
const authRouter = require("express").Router();

const authController = require("../controllers/auth");



authRouter.get("/login", authController.getLogin);

authRouter.post("/login", authController.postLogin);

authRouter.post("/logout", authController.postLogout);

//10.2
authRouter.get('/signup', authController.getSignUp);
authRouter.post('/signup', authController.postSignUp);






module.exports = authRouter;
