
const express = require("express");
const router = express.Router();

const {body} = require("express-validator");

const feedController = require("../controllers/feed");




/////////////////////////////////////////////
//Routes
router.get("/posts", feedController.getPosts);

// router.post("/post", feedController.createPost);





/////////////////////////////////////////////





module.exports = router;
