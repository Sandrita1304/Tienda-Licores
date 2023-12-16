const express = require("express");
const routesBebidas = require("../routes/bebidas.route")

const app = express();
const port =3002;

app.use(express.json())

app.use(routesBebidas);
app.set("port",process.env.PORT || port);

module.exports = app;