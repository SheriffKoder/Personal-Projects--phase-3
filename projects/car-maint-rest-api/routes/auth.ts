
const express_auth = require("express");
const router_auth = express_auth.Router();

const {body_auth} = require("express-validator");

const authController = require("../controllers/auth");




/////////////////////////////////////////////
//Routes
router_auth.post("/signup", authController.signUp);

// router.post("/post", feedController.createPost);





/////////////////////////////////////////////





module.exports = router_auth;
