const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;

/* Enrutador */
const mainRouter = require("./routers/main");

app.use(express.static(path.join(__dirname, "public")));


/*Middleware de ruta*/

app.use("/", mainRouter);
app.use("/about", mainRouter);


app.listen(3000, () => console.log('Servidor funcionando'))