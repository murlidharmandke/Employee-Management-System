const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const routes = require("./routes/api/routes");
const app = express();
// var path = require("path");
app.use(cors({ origin: "*" }));
app.use(express.json());
connectDB();
routes.addRoutes(app);
const port = process.env.PORT || 9000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
