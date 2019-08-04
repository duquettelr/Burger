const db = require("../models");

module.exports = function (app) {

    app.get("/api/burgerNotEaten", function (req, res) {
        db.burger.findAll({
            where: {
                devoured: false
            }
        }).then(function (dbburgers) {
            res.json(dbburgers);
        });
    });

    app.get("/api/burgerEaten", function (req, res) {
        db.burger.findAll({
            where: {
                devoured: true
            }
        }).then(function (dbburgers) {
            res.json(dbburgers);
        });
    });

    app.post("/api/burgerNotEaten", (req, res) => {

        db.burger.create({
            burger_name: req.body.burger
        }).then(response => {
            console.log(response);

        });
    });


    app.post("/api/burgerNotEaten/:burger", (req, res) => {
            db.burger.update(
                {devoured: true },
                {where: 
                {id: req.params.burger}}
            ).then(function (dbburgers) {
            res.json(dbburgers)
            console.log(dbburgers)
         });
    });



}