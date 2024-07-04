const { request, response } = require("express");
const { kamisama } = require("../kamisama");
const getKamisama = (req, res)=>{

    return res.json({
        ok:true,
        statusCode:200,
        kamisama
    });

}

const getKamisamaById = (req = request, res = response)=>{

    let id = parseInt(req.params.id);

    let kamisamaABuscar = "";

    kamisamaABuscar = kamisama.find((kamisama)=>{
        return kamisama.id === id;
    });
    if(kamisamaABuscar){
        return res.json({
            ok:true,
            statusCode:200,
            kamisamaABuscar
        });
    }else{
        return res.json({
            ok:true,
            statusCode:404,
            msg:"No hay personajes con ese id"
        });
    }
}

module.exports = {
    getKamisama,
    getKamisamaById
}