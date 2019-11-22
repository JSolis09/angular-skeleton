const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.json({ status: "ok" });
});

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});