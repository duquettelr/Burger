const express = require("express");
const app = express();
const PORT = process.env.PORT || 5600;

// const routes = require("./routes/apiRoutes.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Serve static public folder
app.use(express.static("./public"));



//Routing:
require("./routes/apiRoutes.js")(app);

const db = require("./models");


db.sequelize.sync().then(function () {
    app.listen(PORT, () => {
        console.log("Server listening on http://localhost:" + PORT)

    });
});