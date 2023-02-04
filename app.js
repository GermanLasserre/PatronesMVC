const express = require('express');
const app = express();

// Enrutador
const mainRouter = require("./routers/main")

app.use(express.static("public"));

//Middleware de ruta
app.use ("/", mainRouter);


app.listen(3000,() => console.log("Server listening on 3000"));