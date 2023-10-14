"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get404 = (req, res, next) => {
    res.status(404).render("404", { myTitle: "404 Page", path: "/404" });
};
