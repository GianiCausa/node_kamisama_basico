

const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 4004;
//-------------------------------------------
const { getKamisama, getKamisamaById } = require("./controllers/kamisama.controllers")

app.use(cors());

app.get("/", getKamisama);

app.get("/:id", getKamisamaById);
//-------------------------------------------

app.listen(puerto, ()=>{
    console.log(`Servidor arriba con el puerto ${puerto}`);
});