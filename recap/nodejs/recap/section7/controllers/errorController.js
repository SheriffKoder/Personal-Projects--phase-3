
exports.get404 = (req, res, next) => {
    res.status(404).render("404", {
        myTitle: "404 page",
        path: "/404"
    });
};