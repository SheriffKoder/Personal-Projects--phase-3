"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const feedRoutes = require("./routes/feed.js");
const authRoutes = require("./routes/auth.js");
//we are writing the back-end routes here
// app.js -> routes -> controllers
//Access-Control configurations
app.use((req, res, next) => {
    //add a header with each response sent
    //for all domains that will access our server
    //from any client "*" or lock to specific domains, separated by ","
    res.setHeader("Access-Control-Allow-Origin", "*");
    //allow these http methods for these origins' to use 
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    //allow these headers to be set on the requests from the front-end
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    //move to the next app.use
    next();
});
//use .json to parse incoming json data
//to be able to extract it on the body as (req.body) in controllers here
app.use(bodyParser.json());
//listen to any request on 8080/feed/(router-url)
app.use("/feed", feedRoutes);
app.use("/auth", authRoutes);
const connectToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect(process.env.MONGODB_URI);
        app.listen(8080);
    }
    catch (error) {
        console.log(error);
    }
});
connectToDB();
