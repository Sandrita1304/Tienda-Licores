const {Router}= require("express");
const router =Router();

const {
   obtenerBebidas,
   guardarBebida,
   eliminarBebida
  } = require("../controller/Bebidas.controller");

 router.get("/",(req,res)=>{
    res.send("buenos dias");

 });
  
router.get("/Bebidas", obtenerBebidas);
router.post("/nuevaBebida", guardarBebida);
router.post("/eliminarBebida", eliminarBebida);

module.exports = router;
