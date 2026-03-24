const express = require("express");
const app = express();
const userRoutes = require("./Routes/Routes");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "./View"); 
app.use(express.static("./Public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));